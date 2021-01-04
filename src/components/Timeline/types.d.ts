export interface Activity {
  id: number;
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