import ProjectContent from './Content/ComponentThree'
import React from "react";
import {Grid} from "@material-ui/core"
import { ProjectHeader } from "./Projects/ProjectHeader";
import ParticlesBg from 'particles-bg'
import CentralContent from "./PageCenter/ComponentOne";
import AboutPage from "./About/about";
import { SectionDivider } from "./PageCenter/SectionDivider";
import AboutContent from "./Content/ComponentTwo";
import FrameworkComponent from './Content/ComponentFive';
import { TimelineHeader } from './Timeline/timeline';
import { FrameworksHeader } from './Frameworks/FrameworkHeader';
import TimeLineContent from './Content/ComponentFour';

const Blog = () => {
  
    let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        alpha: [0.6, 0],
        scale: [.1, 0.4],
        position: "all",
        cross: "dead",
        random: 15
      };
  
      if (Math.random() > 0.90) {
        config = Object.assign(config, {
          onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(
              particle.p.x,
              particle.p.y,
              particle.radius * 2,
              particle.radius * 2
            );
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
          }
        });
      }

    return(
       <>   
            <Grid container direction="column" justify="center" alignItems = "center">
                <Grid item xs = {8}>
                    <main>
                    <br></br>
                    <CentralContent/>
                    <br></br>
                    <SectionDivider/>
                    <FrameworksHeader/>
                    <FrameworkComponent/>
                    <br></br>
                    <SectionDivider/>
                    <ProjectHeader/>
                    <ProjectContent/>
                    <br></br>
                    <SectionDivider/>
                    <TimelineHeader/>
                    <TimeLineContent/>
                    <br></br>
                    <SectionDivider/>
                    <AboutPage/>
                    <AboutContent/>
                    <br></br>
                    </main>
                </Grid>
            </Grid>
            <ParticlesBg color = "white" type="custom" config={config} bg={true} />
       </>
    )
}

export default Blog