import React from 'react'
import { Typography } from '@material-ui/core'
export const FrameworksHeader = () => {
    const Portfolio = {
        color:"White",
        fontFamily:"Prompt",
        fontWeight: 800,
        fontSize:64,
        borderBottom:"2px white solid",
        paddingBottom:"2px",
    }
    return (
        <>
            <Typography variant = "h4" style = {Portfolio} id = "Frameworks"> <br></br>Frameworks </Typography>
        </>
    )
}
