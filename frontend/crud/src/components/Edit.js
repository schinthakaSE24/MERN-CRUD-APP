import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();



  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Make a GET request to fetch the user data
        const response = await axios.get(`http://localhost:8000/edit/${id}`);
        const userData = response.data;
        setName(userData.name);
        setAge(userData.age);

      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      name,
      age,

    };

    try {
      // Make a PUT request to update the user
      const response = await axios.put(`http://localhost:8000/update/${id}`, updatedUser);
      console.log(response.data); // Handle the response as desired
      navigate("/")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
       
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      
      
      
   
      <button type="submit">Update User</button>
      <Link to="/">Back</Link>
    </form>
  );
};

export default Edit;
