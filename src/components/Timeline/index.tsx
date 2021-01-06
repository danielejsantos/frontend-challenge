import React from "react";
import useTimeline from "./hooks";

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

const Timeline: React.FC<TimelineProps> = ({ color, title, activities }) => {
  const { mapIconByTitle } = useTimeline();

  return (
    <Container>
      <TimelineContainer>
        <Circle circleColor={color} />
        <Line />
      </TimelineContainer>
      <ActivityContainer>
        <ActivityTitle>{title}</ActivityTitle>
        {activities.map((activity: Activity) => {
          const Icon = mapIconByTitle(activity.title);

          return (
            <InfoContainer key={activity.id}>
              <Icon color={color} />
              <DetailsContainer>
                <Name>{activity.title}</Name>
                <Info>{activity.name}</Info>
                <Info>{activity.time}</Info>
              </DetailsContainer>
            </InfoContainer>
          );
        })}
      </ActivityContainer>
    </Container>
  );
};

export default Timeline;
