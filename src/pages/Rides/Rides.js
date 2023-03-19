import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RidesData from './RidesData';

const Rides = () => {
    const [rides, setRides] = useState([])
    useEffect(() => {
        fetch("https://thempark.onrender.com/rides")
            .then(res => res.json())
            .then(data => setRides(data))
    }, [])


    return (
        <div>
            <h1 className="text-center my-5">Our Rides</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        rides.map(ride => <RidesData key={ride._id} ride={ride}></RidesData>)
                    }
                </Row>
                <Link to="/home"><Button className="mt-2">Go Home</Button></Link>
            </Container>

        </div>
    );
};

export default Rides;