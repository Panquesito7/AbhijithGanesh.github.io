import React from "react";
import { Typography } from "@material-ui/core";
import { SectionDivider } from "./SectionDivider";
import AboutPage from "../About/about";
const CentralContent = () => {
    const CenterStyle = {
        fontFamily: "Pirata One, cursive",
        fontSize: '32px' ,
        color: "white",
    }
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
            <em>Hello There! Seeing that you've landed here, most likely you should be interested to know about me or already know about me and want to know more. This project was an exploratory and you can explore this website to know more.</em>
        </Typography>
        
         <br></br>
    </>
    )
}

export default CentralContent