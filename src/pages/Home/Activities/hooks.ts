import { useState } from 'react';
import {PhoneIcon} from './styles';

const mocky = [
  {
    id: 1,
    color: "red",
    title: "Atividades em atraso",
    activities: [
      {
        id: 1,
        Icon: PhoneIcon,
        title: "Ligação de agendamento de reunião",
        name: "Erica Collins",
        time: "Em atraso por 04 dias",
      },
    ],
  },
  {
    id: 2,
    color: "yellow",
    title: "Atividades previstas",
    activities: [
      {
        id: 1,
        Icon: PhoneIcon,
        title: "Ligação de agendamento de reunião",
        name: "Erica Collins",
        time: "Em atraso por 04 dias",
      },
      {
        id: 2,
        Icon: PhoneIcon,
        title: "Ligação de agendamento de reunião",
        name: "Erica Collins",
        time: "Em atraso por 04 dias",
      },
      {
        id: 3,
        Icon: PhoneIcon,
        title: "Ligação de agendamento de reunião",
        name: "Erica Collins",
        time: "Em atraso por 04 dias",
      },
    ],
  },
  {
    id: 3,
    color: "green",
    title: "Atividades concluídas",
    activities: [
      {
        id: 1,
        Icon: PhoneIcon,
        title: "Ligação de agendamento de reunião",
        name: "Erica Collins",
        time: "Em atraso por 04 dias",
      },
      {
        id: 2,
        Icon: PhoneIcon,
        title: "Ligação de agendamento de reunião",
        name: "Erica Collins",
        time: "Em atraso por 04 dias",
      },
      {
        id: 3,
        Icon: PhoneIcon,
        title: "Ligação de agendamento de reunião",
        name: "Erica Collins",
        time: "Em atraso por 04 dias",
      },
      {
        id: 4,
        Icon: PhoneIcon,
        title: "Ligação de agendamento de reunião",
        name: "Erica Collins",
        time: "Em atraso por 04 dias",
      },
    ],
  },
];

const useActivity = () => {
  const [selected, setSelected] = useState('Total');

  const titles = [
    {title: 'Total', color: 'black'},
    {title: 'Em atraso', color: 'red'}, 
    {title: 'Em andamento', color: 'blue'},
    {title: 'Previstas', color: '#e1ad01'},
    {title: 'Concluídas', color: 'green'}
  ];

  const filterActivities = () => {
    if (selected !== "Total") {
      return mocky.filter((activity: any) => {
        const mapItemByTitle = () => {
          switch (selected) {
            case 'Em atraso':
              return 'Atividades em atraso'
            case 'Em andamento':
              return 'Atividades em andamento'
            case 'Previstas':
              return 'Atividades previstas'
            case 'Concluídas':
              return 'Atividades concluídas'
          
            default:
              break;
          }
        }

        return activity.title === mapItemByTitle()
      })
    }

    return mocky;
  };

  return {selected, setSelected, titles, filterActivities}
}

export default useActivity;