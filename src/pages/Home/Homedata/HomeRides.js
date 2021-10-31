import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import HomeData from './HomeData';
import "./Social.css"

const HomeRides = () => {
    const [rides, setRides] = useState([])
    
    useEffect(() => {
        fetch("https://immense-lake-80129.herokuapp.com/rides")
            .then(res => res.json())
            .then(data => setRides(data))
    }, [])

    const {user, isLoading} = useAuth();
    if (isLoading) {
        return <Spinner className="item-center" animation="border" variant="danger" />
        
    }
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