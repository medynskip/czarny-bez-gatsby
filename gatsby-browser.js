import React from 'react';

import QueryClientWrap from './src/providers/queryClientProviderWrap';

export const wrapRootElement = ({ element }) => {
  return <QueryClientWrap>{element}</QueryClientWrap>;
};