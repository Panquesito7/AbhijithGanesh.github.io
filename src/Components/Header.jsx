import React from "react"
import {
    AppBar,
    Grid,
    Typography,
    Toolbar,

} from "@material-ui/core"


const DesignerHeader = () => {
    const style = {
        background: '#0a0e29',
        minHeight: 70,
          
    }
    const LHSHeader = {
        fontSize: 24,
        fontFamily: 'Goldman',
        color: 'white',


    }
    const RightHeader = {
        marginLeft: 'auto',
        align: "right",
        paddingLeft:"4px",
        paddingRight:4,
        fontSize:24,
        size:"large",
        color: "#dbb13b",
        fontFamily: 'Libre Baskerville, serif',
        variant:'bold',
    }
    const AppBarStyle = {
        borderBottom: "White Solid"
    }
    const Buttonstyles = {
        background: '#0a0e29',
        borderColor : '#0a0e29',
        color: "White"
    }
    const RouteGiver = (link) => {
        const routedLink = "/"+link
        return routedLink
    }
    return (
        
    <>
    
    <AppBar position="relative" style = {AppBarStyle} >                
        <Toolbar  style={style} variant = 'dense'>
            <Grid item xs = {12}>
                    <button style = {Buttonstyles}>
                    <Typography variant = "bold" size = "large" style = {LHSHeader}>
                        <u><a href = {RouteGiver("")} style = {LHSHeader}>Abhijith Ganesh</a></u>
                    </Typography>
                    </button>
            </Grid>
                <Grid   container  direction="row"  justify="flex-end"  alignItems="center">
                    <Grid item s = {3}><Typography variant = "h3"><i><a style = {RightHeader} href = '#Profile'>Profile</a></i></Typography></Grid>
                    <Grid item s ={3}><Typography variant = "h3"><i><a style = {RightHeader}href  = '#ContactMe' >Contact Me</a></i></Typography></Grid>
                    <Grid item s ={4}><Typography variant = "h3"><i><a style = {RightHeader} href = '#Recommendations'>Recommendations</a></i></Typography></Grid>
                </Grid>
        </Toolbar>              
    </AppBar>
    </>
    )
}

export default DesignerHeader