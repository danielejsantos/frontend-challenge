import React from "react";

import {
  Container,
  TimelineContainer,
  Circle,
  Line,
  ActivityContainer,
  ActivityTitle,
  InfoContainer,
  Info,
  DetailsContainer,
  Name,
} from "./styles";
import { TimelineProps, Activity } from "./types";

const Timeline: React.FC<TimelineProps> = ({
  circleColor,
  title,
  activities,
}) => (
  <Container>
    <TimelineContainer>
      <Circle circleColor={circleColor} />
      <Line />
    </TimelineContainer>
    <ActivityContainer>
      <ActivityTitle>{title}</ActivityTitle>
      {activities.map((activity: Activity) => (
        <InfoContainer key={activity.id}>
          <activity.Icon />
          <DetailsContainer>
            <Name>{activity.title}</Name>
            <Info>{activity.name}</Info>
            <Info>{activity.time}</Info>
          </DetailsContainer>
        </InfoContainer>
      ))}
    </ActivityContainer>
  </Container>
);

export default Timeline;
