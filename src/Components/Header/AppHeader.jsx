import useMediaQuery from '@material-ui/core/useMediaQuery';
import {FaDiscord} from "react-icons/fa"
import { AiFillGithub, AiFillLinkedin, } from 'react-icons/ai';
import {IoAirplane,} from 'react-icons/io5'
import React from 'react';
import {
  Grid,
  Typography,

} from "@material-ui/core";
import { Container, CenterSection,RightSection,LeftSection, SocialIcons } from './HeaderStyles.jsx';
const StyledBar = () =>  {
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
            <Grid item><Typography variant = "h4"><a style = {CenterHeaderOne} href = '#Projects'>Projects</a></Typography></Grid>
            <Grid item ><Typography variant = "h4"><a style = {CenterHeaderOne}href = '#Frameworks'>Frameworks</a></Typography></Grid>
            <Grid item ><Typography variant = "h4"><a style = {CenterHeaderOne}href = '#Timeline'>My Timeline</a></Typography></Grid>
            <Grid item ><Typography variant = "h4"><a style = {CenterHeaderOne} href = '#About'>About</a></Typography></Grid>    
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
