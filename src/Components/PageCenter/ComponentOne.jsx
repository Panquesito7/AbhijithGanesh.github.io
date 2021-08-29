import React from "react";
import { Typography } from "@material-ui/core";
const CentralContent = () => {
    const Portfolio = {
        color:"White",
        fontFamily:"Prompt",
        fontWeight: 800,
        fontSize:64,
        borderBottom:"2px white solid",
        paddingBottom:"2px",
    }
    const subPortfolio = {
        color:"White",
        fontFamily:'Space Grotesk',
        fontWeight: 800,
        fontSize:20,

    }
    return (
    <>
        <Typography variant = "h4" style = {Portfolio}>Welcome to <br></br>My Personal Portfolio! </Typography>
        <Typography variant = "h6" style = {subPortfolio}>
            <em>Hello There! Seeing that you've landed here, most likely you should be interested to know about me or already know about me and want to know more. This project was one of my first attempts of  building a React-front-end application  and you can explore this website to know more about me,</em>
        </Typography>
        
         <br></br>
    </>
    )
}

export default CentralContent