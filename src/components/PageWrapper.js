import React, { createConext, useState } from 'react';
import { useToggle } from '../hooks';

const AppContext = createConext({
  isMenuOpen: false,
});

const PageWrapper = ({children}) => {
  const {isToggled, toggle} = useToggle();
  return <AppContext.Provider
    value={{ isMenuOpen: false}}>
    {children}
    </AppContext.Provider>
};