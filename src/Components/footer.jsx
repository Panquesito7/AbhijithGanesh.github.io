import React from "react"

const Footer = () => {
    const Icons = {
        fontSize:'70px',
        Color:  "White",
        paddingRight: "4px",
        paddingLeft: "14px"
        
    }

    return (
        <center>
            <i class="fab fa-python white" style= {Icons}></i>
            <i class="fab fa-js-square" style = {Icons}></i>
            <i class="fab fa-react" style = {Icons}></i>
            <i class="fab fa-docker" style = {Icons}></i>
        </center>

    )
}

export default Footer;