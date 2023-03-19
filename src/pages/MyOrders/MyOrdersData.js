import React from 'react';
import { Button } from 'react-bootstrap';
// import useAuth from '../Hooks/useAuth';



const MyOrdersData = (props) => {
    const { _id, name, email, rideName, quantity, age, price, status } = props.bking;

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure? Do you want to cancel this ride?")
        if (proceed) {
            const url = `https://thempark.onrender.com/bookings/${id}`;
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
    return (
        <div className="card-style my-2">
            <div style={{ marginBottom: "10px", padding: "10px" }}>
                <div>
                    <b>Name: </b> {name} <br />
                    <b>Email: </b> {email}<br />
                    <b>Ride Name: </b> {rideName}<br />
                    <b>Quantity: </b> {quantity}<br />
                    <b>Price: </b> {price}<br />
                    <b>Age: </b> {age} <br />
                    <Button className="mt-2 me-2" onClick={() => handleDelete(_id)}>Delete</Button>
                    <Button className="mt-2">{status}</Button>
                </div>

            </div>


        </div>
    );
};

export default MyOrdersData;