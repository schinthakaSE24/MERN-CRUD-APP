import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const UserForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newUser = {
      name,
      age,
     
    };

    try {
      // Make a POST request to create a new user
      const response = await axios.post('http://localhost:8000/create', newUser);
      console.log(response.data); 
     navigate('/');// Handle the response as desired
    } catch (error) {
      console.error(error);
    }

    // Clear the form
    setName('');
    setAge('');
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Age:
        <input type="Number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      
      <Button type="submit">Create User</Button> <br></br>
      <Link to="/">Back</Link>
    </form>
  );
};

export default UserForm;



