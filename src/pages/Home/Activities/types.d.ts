export interface TitleButtonProps {
  selected: boolean;
}

export interface UserActivities {
  id: number;
  icon: string;
  title: string;
  name: string;
  time: String;
}

export interface ActivitiesApi {
  title: string;
  activities: [UserActivities];
}