import { PhoneIcon, CalendarIcon, EmailIcon, PeopleIcon } from './styles';

const useTimeline = () => {
  const mapIconByTitle = (title: string) => {
    const splitedTitle = title.split(" ");
    const newTitle = splitedTitle[0];

    switch (newTitle) {
      case "Ligação":
        return PhoneIcon;
      case "Email":
        return EmailIcon;
      case "Reunião":
        return PeopleIcon;
      default:
        return CalendarIcon;
    }
  }

  return { mapIconByTitle }
}

export default useTimeline;