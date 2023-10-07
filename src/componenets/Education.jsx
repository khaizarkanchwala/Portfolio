import React from 'react'
import styled from 'styled-components';
import  Timeline from '@mui/lab/Timeline';
import { TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineDot } from '@mui/lab';
import SchoolCard from './cards/SchoolCard';
import CollageCard from './cards/CollageCard';
import InterCard from './cards/InterCard';

const TimeLineSection=styled.div`
  width: 100%;
  max-width:  1000px;
  margin-top: 10px;
  display:  flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 12px;
`;

const Education = () => {
  return (
    <div name="education" className="w-full h-screen bg-gradient-to-b  from-black to-gray-800">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pd-8"> 
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">Education</p>
        </div>
              <TimeLineSection>
                <Timeline>
                    <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot variant='outlined' color='secondary'/>
                          <TimelineConnector/> {/* remove for last */}
                        </TimelineSeparator>
                        <TimelineContent sx={{py:'22px',px:'2'}}>
                          <CollageCard/>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot variant='outlined' color='secondary'/>
                          <TimelineConnector/> {/* remove for last */}
                        </TimelineSeparator>
                        <TimelineContent sx={{py:'22px',px:'2'}}>
                          <InterCard/>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot variant='outlined' color='secondary'/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py:'22px',px:'2'}}>
                          <SchoolCard/>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
              </TimeLineSection>
          </div>
    </div>
  )
}

export default Education