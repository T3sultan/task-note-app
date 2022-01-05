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
                              style={{ width: "50%" }}
                              name="name"
                              placeholder="Name"
                              required="true"

                              ref={nameRef}

                        />
                        <br />

                        <input
                              style={{ width: "50%" }}
                              description="description"
                              placeholder="Description"
                              ref={descriptionRef}

                        />
                        <br />

                        <input
                              style={{ width: "50%" }}
                              type="date"
                              ref={dateRef}
                              placeholder="date"
                        />
                        <br /><br />
                        <div style={{color: 'blue'}}>
                              <input style={{ color: 'blue', width: "20%" }} type="submit" value="Add" />


                        </div>

                  </form>
            </div>
      );
};

export default AddUser;