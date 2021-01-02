export interface Activity {
  Icon: React.ComponentType;
  title: string;
  name: string;
  time: string;
}

export interface TimelineProps {
  circleColor: string;
  title: string;
  activities: Activity[]
}