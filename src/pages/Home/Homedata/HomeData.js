import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Home.css";

const HomeData = (props) => {
    const { _id, rideName, imgThumb, descriptions } = props.ride
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={imgThumb} className = "img-sizing"/>
                <Card.Body>
                    <Card.Title>{rideName}</Card.Title>
                    <Card.Text>
                    {descriptions.slice(0, 150)}
                    </Card.Text>
                    <Link to = {`/booking/${_id}`}>
                    <Button>Book Now</Button>
                    </Link>
                </Card.Body>
                
                
            </Card>

        </div>
    );
};

export default HomeData;