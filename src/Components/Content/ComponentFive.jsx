import React from 'react'
import { Typography, Grid} from '@material-ui/core'
import {FaLinux} from 'react-icons/fa'
import {DiReact, DiBootstrap, DiMysql,DiSqllite} from "react-icons/di"
import {SiMaterialUi, SiDjango, SiFlask, SiKubernetes,SiPostman, SiGraphql, SiArchlinux} from "react-icons/si"
import Garuda from "./Garuda.svg"
import { FaNodeJs } from 'react-icons/fa'
const FrameworkComponent = () => {
    const Margins  = {
        color:"White",
        fontFamily:"Space Grotesk",
        fontSize: 24,
        borderColor:"White",
        borderLeft: "2px",
        borderRight: "2px",
    }
    const DesignStyles = {
        color:"White",
        bold:true,
        underline:true,
        fontSize: "24px",
        
    }
    const FrontEndIcons ={
        color:"White",
        fontSize:30,
        padding: "6px"
    }
    const DatabaseDesign = {
        color:"White",
        fontSize:30,
        padding:"6px",
    }
    return(
        <>
            <Typography variant = "h4">
                <p style = {Margins}>
                    I've worked with a variety of web-development tools and frameworks, which cover different aspects like Back-end and Design. I've got experience with JavaScript and Python along with corresponding frameworks and libraries of those languages. I am a Linux-enthusiast and I am currently using Garuda Linux. If you guys do too, reach out!
                </p>
            </Typography>
            <br></br>
            <Grid  container  direction="row"  justify="space-evenly"  alignItems="center">
                <Grid Item xs>
                    <Typography variant = "h5" style = {DesignStyles}>Front-End</Typography>
                    <DiReact class = "fa-react" style = {FrontEndIcons}/>
                    <DiBootstrap style = {FrontEndIcons}/>
                    <SiMaterialUi style = {FrontEndIcons}/>
                </Grid>
                <Grid Item xs>
                    <Typography variant = "h5" style = {DesignStyles}>Back-End</Typography>
                    <FaNodeJs class = "fa-react" style = {FrontEndIcons}/>
                    <SiDjango style = {FrontEndIcons}/>
                    <SiFlask style = {FrontEndIcons}/>
                </Grid>
                <Grid Item xs>
                    <Typography variant = "h5" style = {DesignStyles}>Tools</Typography>
                    <SiKubernetes class = "fa-react" style = {FrontEndIcons}/>
                    <SiPostman style = {FrontEndIcons}/>
                    <SiGraphql class = "fa-react" style = {FrontEndIcons}/>
                </Grid>
                <Grid item xs style = {DesignStyles}>
                    <Typography variant ="h5" style  = {DesignStyles}>Databases and Distros</Typography>
                    <FaLinux style  = {DatabaseDesign}/>
                    <DiMysql style = {DatabaseDesign}/>
                    <SiArchlinux style = {DatabaseDesign}/>
                    <DiSqllite class = "fa-react" style = {DatabaseDesign}/>
                    <img src = {Garuda}style = {{width:40, height:40}} alt = "Garuda Linux"></img>
                </Grid>
                
            </Grid>
        </>
    )
}
export default FrameworkComponent;    