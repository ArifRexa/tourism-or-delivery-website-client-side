import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Card, Col, Container,  Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import "./Booking.css";
import { Link } from 'react-router-dom';

const Booking = () => {
    const { user } = useAuth();
    const { _id } = useParams()
    const [details, setDetails] = useState({})


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = "Pending"
        data.price = `${details.price}`
        data.rideName=`${details.rideName}`
        console.log(data);
        axios.post('http://immense-lake-80129.herokuapp.com/bookings', data)
        .then(res => {
            if (res.data.insertedId) {
                window.alert("Booking Confirmed Successfully")
                reset()
                
            }
            
        })
            
    };

    useEffect(() => {
        fetch(`https://immense-lake-80129.herokuapp.com/rides/${_id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const {rideName, price}= details;
    console.log(details.price);
    return (
        <div className = "form-style">
            <h1 className="text-center my-5">{rideName}</h1>
            

            <Container>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={details.imgThumb} />
                        <Card.Body>
                            <Card.Title>{details.rideName}</Card.Title>
                            <Card.Text>
                                <h5>Make: {details?.make}</h5>
                                <h5>Height: {details?.height}</h5>
                                <h5>Longest Drop: {details?.longestDrop}</h5>
                                <h5>Top Speed: {details?.topSpeed}</h5>
                                <h5>Inversion: {details?.inversions}</h5>
                                <h5>VerticalAngle: {details?.verticalAngle}</h5>
                                <h5>G-Forces: {details?.gForces}</h5>
                                <h5>Duration: {details?.duration}</h5>
                                <h5>Opened: {details?.opened}</h5>
                                <h5>Descriptions: {details?.descriptions}</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Container>


            <h1 className="text-center my-5">Confirm Your Booking</h1>
            <h3 className="text-center ">{rideName}</h3>


            <Container>
                <form onClick={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 30 })} placeholder="Name"/>
                    <input defaultValue={user.email} {...register("email", {required: true})} placeholder="Email"/>
                    <input type="number" {...register("quantity", {required: true, min: 1, max: 10 })} placeholder="select quantity"/>
                    <input type="number" {...register("age", {required: true, min: 13, max: 99 })} placeholder="select age (min 13)"/>
                    <input type="submit" value="Confirm"/>
                </form>
            </Container>


            <Container>
                <Link to="/rides"><Button >Go Back</Button></Link>
            </Container>









        </div>
    );
};

export default Booking;