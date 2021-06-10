import React from "react";
import {Grid} from "@material-ui/core"
import Abhijith from "./Static/Cover.png"

const Blog = () => {

    const ImgStyle = {
        width: "17%",
        height: "17%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    }
    
    const CenterStyle = {
        fontFamily: "Pirata One, cursive",
        fontSize: '58px' ,
        color: "white",
        
        
        
    }
    const ContentStyle = {
        fontFamily: "Merriweather",
        fontSize: '18px',
        color: 'White',
        

    }
    const Icons = {
        fontSize:'70px',
        Color:  "White",
        paddingRight: "4px",
        paddingLeft: "14px"
        
    }

    return(
       <>
            <Grid container direction="column" justify="center" alignItems = "center">
                <Grid item xs = {8}>
                    <main>
                    <div style = {CenterStyle}>
                        <img src = {Abhijith} style = {ImgStyle}></img>
                        <center>
                           <b>Abhijith Ganesh</b>
                        </center>
                    </div>
                    <div style = {ContentStyle}>
                    <ul>
                        <content>
                            Welcome to my Portfolio!
                            <p>
                                <li>I am an enthusiastic High-schooler (Grade 12 Student) who is interested in learning about new tech and I'm highly passionate about learning principles of the modern-day business world. I love airplanes and I'm very much interested learning about flights and everything related to aviation. Being an avid Formula One fan, I support the Mercedes Petronas AMG F1 Team and the entire sporting fraternity. Cars in-general are beautiful and who wouldn't enjoy their weekend in a vintage car. If you guys see a Mercedes 500K anywhere please reach out through the Contact me.</li>
                            </p>
                            <p>
                                <li> I love building new applications using Python, JavaScript, etc. Backend frameworks of types fascinate me <ol>
                                    <li> Full-Stack Framework like Django.</li>
                                    <li> Microframeworks like Flask and Express JS.</li>
                                    <li> Asynchronous framework like FastAPI</li>
                                </ol>
                                </li>
                                <li>
                                    I'm interested about language agnostic tech-auxiliaries like Nginx, Kubernetes and Docker.
                                </li>
                            </p>
                            <br></br>
                        </content>
                        </ul>
                    </div>
                    <center>
                        <i class="fab fa-python white" style= {Icons}></i>
                        <i class="fab fa-js-square" style = {Icons}></i>
                        <i class="fab fa-react" style = {Icons}></i>
                        <i class="fab fa-docker" style = {Icons}></i>
                    </center>
                    </main>
                </Grid>
            </Grid>
           
       </>
    )
}

export default Blog