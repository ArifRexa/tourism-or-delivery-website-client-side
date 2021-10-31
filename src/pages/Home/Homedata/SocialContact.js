import React from 'react';
import { Container } from 'react-bootstrap';
import "./Social.css"

const SocialContact = () => {
    return (
        <div>
            <Container>

            <h1 className="text-center my-5">Connect with us</h1>
            <div className="icoon-style">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-youtube-square"></i>

            </div>

            </Container>


        </div>
    );
};

export default SocialContact;