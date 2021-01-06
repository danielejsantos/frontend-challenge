import { useState } from 'react';

import financesApi from '../../../__mocks__/user-finances';
import { Finances } from '../../../types';

const useCredit = () => {
  const [finances] = useState<Finances>(JSON.parse(financesApi))

  return { credit: finances.credit }
}

export default useCredit;