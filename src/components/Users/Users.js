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
                  {/* <h2>Users Available:{users.length}</h2>
                  <ul>
                        {
                              users.map(user => <li key={user._id}>
                                    {user.name} :: {user.description} :: {user.date}

                                    <Link to={`/users/update/${user._id}`}> <button>update</button> </Link>
                                    <button onClick={() => handleDeleteUser(user._id)}>X</button>
                              </li>)
                        }
                  </ul> */}
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

                                          <td>{pd?.description.slice(0, 20)}</td>
                                          <td>{pd?.date}</td>



                                          <Link to={`/users/update/${pd._id}`}> <button style={{color:"blue"}}>update</button> </Link>
                                          <button style={{color:'red'}} onClick={() => handleDeleteUser(pd._id)}>X</button>
                                          {/* 
                                <button
                                    onClick={() => handleDelete(pd._id)}
                                    className="btn bg-danger p-1"
                                >
                                    Remove
                                </button> */}
                                          {/* <Link to={`/services/update/${pd._id}`}> <button className="btn bg-warning">update</button> </Link> */}
                                    </tr>
                              </tbody>
                        ))}
                  </Table>
            </div>
      );
};

export default Users;