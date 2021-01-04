import styled from 'styled-components';

interface CircleProps {
  circleColor: string;
}

export const Container = styled.div`
  display: flex;
  margin-left: 11px;
`;

export const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  align-items: center;
`;

export const Circle = styled.div<CircleProps>`
  position: absolute;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  z-index: 5;
  background-color: ${({circleColor}) => circleColor};
`;

export const Line = styled.div`
  height: 100%;
  width: 2px;
  background-color: lightgrey;
`;

export const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActivityTitle = styled.p`
  font-size: 16px;
  color: grey;
  font-weight: 700;
  margin-top: 2px;
  margin-bottom: 16px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const DetailsContainer = styled.div`
  padding-left: 15px;
`;

export const Name = styled.div`
  font-size: 14px;
  color: grey;
  font-weight: 700;
`;

export const Info = styled.p`
  font-size: 12px;
  color: grey;
`;