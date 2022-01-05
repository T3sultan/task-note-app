import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
      const [user, setUser] = useState({});
      const { id } = useParams();

      useEffect(() => {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url)
                  .then(res => res.json())
                  .then(data => setUser(data));
      }, []);

      // Update User
      const handleNameChange = e => {
            const updatedName = e.target.value;
            const updatedUser = { name: updatedName, description: user.description };
            setUser(updatedUser);
      }

      const handleDesUpdate = e => {
            const updatedDes = e.target.value;
            const updatedUser = { name: user.name, description: updatedDes }
            setUser(updatedUser);
      }
      const handleUpdateUser = e => {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                  method: 'PUT',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(user)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.modifiedCount > 0) {
                              alert('Update Successful');
                              setUser({});
                              e.target.reset();
                        }
                  })
            e.preventDefault();
      }

      return (
            <div>
                  <h2>Information Update</h2>
                  <form onSubmit={handleUpdateUser}>
                        <input type="text" onChange={handleNameChange} value={user.name || ''} /> <br />
                        <input type="text" onChange={handleDesUpdate} value={user.description || ''} /> <br />
                        <input type="submit" value="Update" />
                  </form>
            </div>
      );
};

export default UpdateUser;