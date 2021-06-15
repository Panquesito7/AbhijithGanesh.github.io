import Link from 'next/link';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {FaDiscord} from "react-icons/fa"
import { AiFillGithub, AiFillLinkedin, } from 'react-icons/ai';
import {IoAirplane,} from 'react-icons/io5'
import React from 'react';
import {
  AppBar,
  Grid,
  Typography,
  Toolbar,
  Button,
  IconButton,

} from "@material-ui/core";
import { Container, CenterSection,RightSection,LeftSection, NavLink, SocialIcons } from './HeaderStyles.jsx';
const StyledBar = () =>  {
 
  const style = {
    background: '#0a0e29',
    minHeight: 70,
}
const LHSHeader = {
    fontWeight:900,
    fontSize: 24,
    fontFamily: 'Goldman',
    display: 'flex', 
    alignItems: 'center',
    color: 'white',
}
const Icons = {
    Color:  "White",
    paddingTop:"4px",
    paddingRight: "4px",
    paddingLeft: "4px",
}
const matches = useMediaQuery('(max-width:415px)');
const fontsizes = {
    One:20,
    Two:24
}
const CenterHeaderOne = {
    fontSize:20,
    fontFamily: 'Exo 2',
    alignItems:'center',
    color:"White",
  }
if (matches){
    CenterHeaderOne["fontSize"] = 20
}
else{
    CenterHeaderOne["fontSize"] = 26
}

return (
    
<>
<Container>
    <LeftSection> 
        <section >
            <a style={LHSHeader} href="/">
            <IoAirplane style = {{fontSize:40}}/> <span>Abhijith Ganesh</span>
            </a>
        </section>
    </LeftSection>
        <CenterSection>
            <Grid item ><Typography variant = "h4"><a style = {CenterHeaderOne} href = '#Projects'><em>Projects</em></a></Typography></Grid>
            <Grid item ><Typography variant = "h4"><a style = {CenterHeaderOne}href = '#Frameworks'><em>Frameworks</em></a></Typography></Grid>
            <Grid item ><Typography variant = "h4"><a style = {CenterHeaderOne}href = '#Timeline'><em>My Timeline</em></a></Typography></Grid>
            <Grid item ><Typography variant = "h4"><a style = {CenterHeaderOne} href = '#About'><em>About</em></a></Typography></Grid>    
        </CenterSection>
    <RightSection>
        <Grid item xs>
        <SocialIcons href="https://github.com/AbhijithGanesh/"> 
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/abhijith-ganesh-1811a91a9/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://discord.com/users/293624241851727873">
          <FaDiscord size = "2.9rem" style = {Icons}/>
        </SocialIcons>
        </Grid>
      </RightSection>
</Container> 
</>
)
};

export default StyledBar;
