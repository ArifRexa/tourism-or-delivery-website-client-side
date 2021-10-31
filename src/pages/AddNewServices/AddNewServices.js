import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import "./AddNewServices.css"


const AddNewServices = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://immense-lake-80129.herokuapp.com/rides', data)
        .then(res => {
            if (res.data.insertedId) {
                window.alert("Feature Add Successfully")
                reset()
                
            }
            
        })
            
    };

    return (
        <div>
            <h1 className="text-center my-5">Add New Services</h1>

            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("rideName", { required: true})} placeholder="Ride Name (Exapmle: Easy Deasy)"/>

                    <input {...register("make", { required: true, maxLength: 30 })} placeholder="Makers Name"/>

                    <input {...register("height", { required: true, maxLength: 20 })} placeholder="height"/>

                    <input {...register("longestDrop", { required: true, maxLength: 20 })} placeholder="Longest Drop"/>

                    <input {...register("topSpeed", { required: true, maxLength: 20 })} placeholder="Top Speed"/>

                    <input type="number" {...register("inversions", { required: true, maxLength: 20 })} placeholder="Inversions"/>

                    <input {...register("verticalAngle", { required: true, maxLength: 20 })} placeholder="Vertical Angle"/>

                    <input type="double" {...register("gForces", { required: true, maxLength: 20 })} placeholder="G Forces"/>

                    <input {...register("duration", { required: true, maxLength: 20 })} placeholder="Duration (min:sec)"/>

                    <input type="number" {...register("opened", { required: true })} placeholder="Opened"/>

                    <input {...register("descriptions", { required: true})} placeholder="Descriptions"/>

                    <input {...register("imgThumb", { required: true})} placeholder="Image Url"/>

                    <input type="number" {...register("price")} placeholder="Price"/>

                    <input className="btn-style" type="submit" value="Confirm"/>
                </form>
            </Container>
            
        </div>
    );
};

export default AddNewServices;