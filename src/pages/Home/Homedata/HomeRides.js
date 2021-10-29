import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeData from './HomeData';

const HomeRides = () => {
    const [rides, setRides] = useState([])
    useEffect(() => {
        fetch("https://immense-lake-80129.herokuapp.com/rides")
            .then(res => res.json())
            .then(data => setRides(data))
    }, [])
    return (
        <div>
            <h1>Our Rides</h1>
            <Container>

                <Row xs={1} md={3} className="g-4">
                    {
                        rides.map(ride => <HomeData ride={ride}></HomeData>)
                    }
                </Row>
            </Container>


        </div>
    );
};

export default HomeRides;