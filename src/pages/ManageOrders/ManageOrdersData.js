import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ManageOrdersData = (props) => {
    const {_id, name, email, rideName, quantity, age, price, status} = props.allOrder
    const [user, setUser] = useState({})

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure? Do you want to cancel this Booking?")
        if (proceed) {
            const url = `https://immense-lake-80129.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        window.alert("Deleted Successfully")
                        window.location.reload(false);


                    }
                })

        }

    }

    const hanldeApproved = (e) =>{
        const url = `https://immense-lake-80129.herokuapp.com/bookings/${_id}`;
        fetch(url, {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                window.alert("Approved Successfully")
                window.location.reload(false);
                
            }
        })

    }
    return (
        <div>
            {/* <h1>Name: {name}</h1> */}
            <div style={{ marginBottom: "10px", padding: "10px", border: "2px solid black" }}>
                <div>
                    <b>Name:</b>{name} <br />
                    <b>Email:</b>{email}<br />
                    <b>Ride Name:</b>{rideName}<br />
                    <b>Price:</b>{price}<br />
                    <b>Quantity:</b>{quantity}<br />
                    <b>Age:</b>{age} <br /> 
                    <Button className="mt-2 me-2" onClick={() => handleDelete(_id)}>Delete</Button>
                    <Button className="mt-2" onClick={hanldeApproved}>{status}</Button>
                </div>

            </div>
            
        </div>
    );
};

export default ManageOrdersData;