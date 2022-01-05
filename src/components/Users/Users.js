import { Table } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
      const [users, setUsers] = useState([]);
      useEffect(() => {
            fetch('http://localhost:5000/users')
                  .then(res => res.json())
                  .then(data => setUsers(data))

      }, []);
      //delete an user
      const handleDeleteUser = (id) => {
            const procced = window.confirm('Are you sure,you want to delete?');
            if (procced) {
                  const url = `http://localhost:5000/users/${id}`;
                  fetch(url, {
                        method: 'DELETE',

                  })
                        .then(res => res.json())
                        .then(data => {
                              if (data.deletedCount > 0) {
                                    alert('Deleted Successfully');
                                    const remainingUsers = users.filter(user => user._id !== id);
                                    setUsers(remainingUsers)
                              }
                        })
            }


      }
      return (
            <div>
                  {/*  Using MUI */}
                  <h3>Total List {users.length}</h3>
                  <Table striped bordered hover>
                        <thead>
                              <tr>
                                    <th>#</th>
                                    <th>User Name</th>
                                    <th>Description</th>
                                    <th>Date</th>
                              </tr>
                        </thead>
                        {users?.map((pd, index) => (
                              <tbody>
                                    <tr>
                                          <td>{index}</td>
                                          <td>{pd?.name}</td>

                                          <td>{pd?.description.slice(0, 200)}</td>
                                          <td>{pd?.date}</td>
                                          <Link to={`/users/update/${pd._id}`}> <button style={{ color: "blue" }}>update</button> </Link>
                                          <button style={{ color: 'red' }} onClick={() => handleDeleteUser(pd._id)}>delete</button>

                                    </tr>
                              </tbody>
                        ))}
                  </Table>
            </div>
      );
};

export default Users;