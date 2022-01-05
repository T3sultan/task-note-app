import React, { useRef } from 'react';

const AddUser = () => {
      const nameRef = useRef();
      const dateRef = useRef();
      const descriptionRef = useRef();

      const handleAddUser = (e) => {
            const name = nameRef.current.value;
            const date = dateRef.current.value;
            const description = descriptionRef.current.value;
            const newUser = { name, date, description }

            fetch('http://localhost:5000/users', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(newUser)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.insertedId) {
                              alert('Successfully added user.')
                              e.target.reset();
                        }
                  })


            e.preventDefault()
      }



      return (
            <div>
                  <h2>Add Todo List</h2>
                  <form onSubmit={handleAddUser}>

                        <input
                              name="name"
                              placeholder="Name"
                              required="true"

                              ref={nameRef}

                        />
                        <br />

                        <input
                              description="description"
                              placeholder="Description"
                              ref={descriptionRef}

                        />
                        <br />

                        <input
                              type="date"
                              ref={dateRef}
                              placeholder="date"
                        />
                        <br />
                        <input style={{color:'blue'}} type="submit" value="Add" />

                  </form>
            </div>
      );
};

export default AddUser;