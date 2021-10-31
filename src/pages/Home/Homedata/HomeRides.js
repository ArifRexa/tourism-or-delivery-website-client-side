import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            <h1 className="text-center my-5">Our Rides</h1>
            <Container>

                <Row xs={1} md={3} className="g-4">
                    {
                        rides.map(ride => <HomeData key={ride._id} ride={ride}></HomeData>)
                    }
                </Row>
                <Link to = "/rides"><Button className="my-3">See more</Button></Link>
                
            </Container>


        </div>
    );
};

export default HomeRides;