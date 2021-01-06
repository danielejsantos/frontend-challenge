import { useState } from 'react';

import financesApi from '../../../__mocks__/user-finances';
import { Finances } from '../../../types';

const useOpportunities = () => {
  const [finances] = useState<Finances>(JSON.parse(financesApi))

  const mapOppotunities = (value: string) => {
        switch (value) {
          case "win":
            return {name: "Ganhas", color: "green"}
          case "lost":
            return {name: "Perdidas", color: "#c62828"}
          case "open":
            return {name: "Abertas", color: "#1976d2"}
          default:
            return {name: "Descartadas", color: "gray"};
        }
      }

  return { opportunities: finances.opportunities, mapOppotunities }
}

export default useOpportunities;