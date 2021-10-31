import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import HomeRides from './Homedata/HomeRides';
import RidingOffer from './Homedata/RidingOffer';
import SocialContact from './Homedata/SocialContact';

const Home = () => {
    return (
        <div>
            {/* <h1>This is home</h1> */}

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide" height="650px"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide" height="650px"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide" height="650px"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Third slide" height="650px"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img5}
                        alt="Third slide" height="650px"
                    />

                </Carousel.Item>
            </Carousel>


            {/*=========================== Features and Rides =============================*/}

            <HomeRides></HomeRides>
            <RidingOffer></RidingOffer>
            <SocialContact></SocialContact>

        </div>
    );
};

export default Home;