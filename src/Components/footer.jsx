import React from "react"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { CloudWaveEffect  } from "react-background-animation";
import {SiKubernetes} from 'react-icons/si'

const Footer = () => {
    const matches = useMediaQuery('(max-width:415px)')
    const Icons = {
        // fontSize:'60px',
        color:  "White",
        paddingRight: "4px",
        paddingLeft: "14px",
        
        
    }
    if (matches){
        Icons["fontSize"] = "3em"
    }
    else{
        Icons["fontSize"] = "60px"
    }

    return (
    <section>
        <center>
            <i class="fab fa-python white" style= {Icons}></i>
            <i class="fab fa-node" style = {Icons}></i>
            {/* <i class="fab fa-docker" style = {Icons}></i> */}
            <SiKubernetes class = "kubernetes" style = {Icons}/>
            <i class="fab fa-linux" style = {Icons}></i>
            <i class="fab fa-react" style = {Icons}></i>
        </center>
    </section>
    
    )
}

export default Footer;