import { useState } from 'react';

import financesApi from '../../../__mocks__/user-finances';
import { Finances } from '../../../types';

const useAssets = () => {
  const [finances] = useState<Finances>(JSON.parse(financesApi))

  const mapColorByStatus = (value: string) => {
    switch (value) {
      case "expired":
        return {name: "Vencidos", color: "#c62828"};
      case "to expire":
        return {name: "A Vencer", color: "#f9a825"};
      default:
        return {name: "Pagos", color: "green"};;
    }
  }

  return { assets: finances.assets, mapColorByStatus }
}

export default useAssets;