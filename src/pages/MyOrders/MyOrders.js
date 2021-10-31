import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import MyOrdersData from './MyOrdersData';

const MyOrders = () => {
    const [booking, setbooking] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        fetch("https://immense-lake-80129.herokuapp.com/bookings")
            .then(res => res.json())
            .then(data => {
                const v = data.filter(p => p.email === user.email)
                setbooking(v)
            })
    }, [user])
    console.log(booking);
    return (
        <div>
            <h1 className="text-center my-5">My Orders</h1>
            <Container>

                <Row xs={1} sm={2} md={3}>
                    {
                        booking.map(bking => <MyOrdersData key={bking._id} bking={bking}></MyOrdersData>)
                    }
                </Row>

            </Container>

        </div>
    );
};

export default MyOrders;