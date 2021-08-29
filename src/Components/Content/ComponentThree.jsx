import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { BlogCard,ExternalLinks, GridContainer, TitleUnderline, TitleContent, UtilityList} from '../Projects/ProjectStyles.jsx';
import {Data} from '../Data/data.js'

const ProjectConst = () => {
    const buttonStyles = {}
    return(
    <>
        {Data.map((p,i) => {return (
           <GridContainer>
           <BlogCard key = {i}>
               <TitleContent>
               <br></br>
               <Typography variant = "h5" style = {{color:'White', fontFamily:'Space Grotesk'}}>
                   {p.title}
               </Typography>
               <TitleUnderline />             
               </TitleContent>            
               <Typography style = {{color:"White", align:'Left', padding:10}}>{p.description}</Typography>
               <section>
               <br></br>
               <Grid   container  direction="row"  justify="space-evenly"  alignItems="center">
                   {p.stack.map((t) => {
                       return (<><Grid Item xs><Typography variant = "h6" style = {{color:"White"}}>{t}</Typography></Grid></>)
                       })}
               <Grid/>
               </Grid>
               </section>
               <UtilityList>
               <ExternalLinks href={p.source} style = {buttonStyles} >Code</ExternalLinks>
               <ExternalLinks href={p.web} style = {buttonStyles}>Web</ExternalLinks>
               </UtilityList>
           </BlogCard>
       </GridContainer>  
        )})}
    </>
    )
}
export default ProjectConst;    
