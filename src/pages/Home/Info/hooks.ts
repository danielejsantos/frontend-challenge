import { useState } from 'react';

import userInfoMock from "../../../__mocks__/user-info";
import { UserInfoProps } from './types';

const useInfo = () => {
  const [userInfo] = useState<UserInfoProps>(JSON.parse(userInfoMock));

  return { userInfo }
}

export default useInfo