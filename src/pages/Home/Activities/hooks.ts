import { useState } from 'react';

import activitiesApi from '../../../__mocks__/activities';

const useActivity = () => {
  const [selected, setSelected] = useState('total');
  const [search, setSearch] = useState('');
  const [activities] = useState(JSON.parse(activitiesApi));

  const titles = [
    {title: 'Total', color: 'black', name: 'total'},
    {title: 'Em atraso', color: '#c62828', name: 'late'}, 
    {title: 'Em andamento', color: '#1976d2', name: 'currently'},
    {title: 'Previstas', color: '#f9a825', name: 'expected'},
    {title: 'Concluídas', color: 'green', name: 'concluded'}
  ];

  const filterActivities = () => {
    const filteredByTitle = selected === 'total' ? activities :
      activities.filter((activity: any) => {
        if (!search) return activity.title === selected;
        return activity.title === selected;
      });

    const filterActivitiesBySearch = filteredByTitle.map((item: any) => {
      const filtered = item.activity.filter((item: any) => (
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.time.toLowerCase().includes(search.toLowerCase())
      ))

      return { ...item, activity: filtered }
    });

    return filterActivitiesBySearch;
  };

  const mapActivityByTitle = (value: string) => {
    switch (value) {
      case 'late':
        return {name: 'Atividades em atraso', color: '#c62828'}
      case 'currently':
        return {name: 'Atividades em andamento', color: '#1976d2'}
      case 'expected':
        return {name: 'Atividades previstas', color: '#f9a825'}
      case 'concluded':
        return {name: 'Atividades concluídas', color: 'green'}
    
      default:
        return {name: 'Atividades não mapeada', color: 'gray'}
    }
  }

  return {selected, setSelected, titles, filteredActivities: filterActivities(), mapActivityByTitle, search, setSearch}
}

export default useActivity;