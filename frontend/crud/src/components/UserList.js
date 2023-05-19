import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8000')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8000/delete/${id}`)
      .then(res => {
        const updatedUsers = users.filter(user => user._id !== id);
        setUsers(updatedUsers);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>User List</h1>
      <Link to="/create-user">
        <Button variant="primary">Add User</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
           
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={user._id}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
               
              <Link
											to={`/edit-user/${user._id}`}
											className="btn btn-primary"
										>
											Edit
										</Link>
                
                <Button variant="danger" onClick={() => deleteUser(user._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;
