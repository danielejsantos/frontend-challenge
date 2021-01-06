export interface Activity {
  id: number;
  title: string;
  name: string;
  time: string;
}

export interface TimelineProps {
  color: string;
  title: string;
  activities: Activity[]
}