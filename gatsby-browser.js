import React from 'react';
import { GlobalStyle } from './src/components/globalStyles';

export const wrapRootElement = ({ element }) => <div>{element}</div>; // Wrapp here!

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);
