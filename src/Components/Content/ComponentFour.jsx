import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import {TimeLineData} from '../Data/data.js'

const TimeLineContent =() => {
  const colorStyle = {
      color:"White",
      fontSize:20,

  }
  return (
    <React.Fragment>
      {TimeLineData.map((val)=>{ return (
          <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography style = {colorStyle}>{val.year}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography style = {colorStyle}>{val.text}</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        
      )})}
        <Typography style = {colorStyle} align = "center">
            The Journey Continues.....
        </Typography>
      </React.Fragment>
  );
}

export default TimeLineContent;    

