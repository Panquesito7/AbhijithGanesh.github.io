import React from "react";
import {Grid} from "@material-ui/core"

const ContactMe = () => {
    const FontStyle = {
        paddingLeft: "24px",
        fontFamily: 'Montserrat',
        fontSize: "34px",
        color: 'White'
    }
    const hrestyles = {
        color:"#ffc700",
        size: 14,
    }
    const HeaderStyle = {
        paddingLeft:"24px",
        fontFamily: 'Staatliches',
        fontSize: 34,
        color: 'White',
    }
    const ContentStyle = {
        color: "White",
        fontSize: 24,
        fontFamily:'Playfair Display',
        paddingLeft: "24px"

    }
    const iconstyle = {
        fontSize: 36,
        paddingLeft:24,
    }
    return (
       <>
        <Grid container  direction="row"  justify="flex-start"  alignItems="left">
            <Grid item xs = {6}></Grid>
            <Grid item s = {4}>
                    <p style = {FontStyle}>
                        <u>
                            My Handles:
                        </u>
                    </p>
                    <ul style = {{color:'White'}}>
                    <br></br>
                    <li>
                        <section>
                            <header style = {HeaderStyle}><u>My GitHub Profile:</u></header>
                            <p style = {ContentStyle}>
                                You can view my repositories by clicking on the Github Icon. You can view my Django, Flask and FastAPI projects there.
                                The deployments related to Django projects can be viewed there. All projects have been deployed on Heroku.
                            </p>
                            < i style = {iconstyle} class="fab fa-github"> <a style = {hrestyles} href = "https://github.com/AbhijithGanesh">Click here</a></i>
                        </section>
                    </li>
                    <br></br>
                    <li><section>
                        <header style = {HeaderStyle}><u>My LinkedIn Profile:</u></header>
                        <p style = {ContentStyle}>
                            You can view my CV and LinkedIn profile by clicking the Handle below.Feel free to reach out and connect on LinkedIN.
                        </p>
                        < i style = {iconstyle} class="fab fa-linkedin"> <a style = {hrestyles} href = "https://www.linkedin.com/in/abhijith-ganesh-1811a91a9/">Click Here</a></i>
                    </section></li>
                    <br></br>
                    <li><section>
                        <header style = {HeaderStyle}><u>My Discord Handle</u></header>
                        <p style = {ContentStyle}>
                            Reach out to me in Discord by clicking the Handle.
                            <br></br>
                            <em>My ID: Sentinel#8542</em>
                        </p>
                        < i style = {iconstyle} class="fab fa-discord"> <a href="https://discord.com/users/293624241851727873" style={hrestyles}>Click Here</a></i>
                    </section></li>
                    </ul>
            </Grid>
            
        </Grid>
       </>
    )
}

export default ContactMe;