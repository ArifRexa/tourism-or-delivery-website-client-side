import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageOrdersData from './ManageOrdersData';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch("https://thempark.onrender.com/bookings")
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    return (
        <div>
            <h1 className="text-center my-5">Here is all Bookings</h1>

            <Container>

                <Row xs={1} sm={2} md={3} >
                    {
                        allOrders.map(allOrder => <ManageOrdersData key={allOrder._id} allOrder={allOrder}></ManageOrdersData>)
                    }
                </Row>

            </Container>

        </div>
    );
};

export default ManageOrders;