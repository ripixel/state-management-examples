import React, { useState } from 'react';

import P from '../../../P';

export const SingleBitOfState: React.FC = () => {
  const [numberValue] = useState(0);

  return <P>The number value is {numberValue}</P>;
};

export default SingleBitOfState;
