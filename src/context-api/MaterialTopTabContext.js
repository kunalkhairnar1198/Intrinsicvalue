import React, {createContext, useState} from 'react';

const TabContext = createContext();

const MaterialTopTabContextProvider = props => {
  const [dynamicTab, setDynamicTab] = useState(null);
  const [loading, setIsLoading] = useState(false);

  console.log('CONTEXT', dynamicTab);

  const handleItemClick = item => {
    setDynamicTab({name: item.Symbol});
    setIsLoading(true);
  };
  const toggleLoader = () => {
    setIsLoading(false);
  };
  return (
    <TabContext.Provider
      value={{dynamicTab, toggleLoader, loading, handleItemClick}}>
      {props.children}
    </TabContext.Provider>
  );
};

export {TabContext, MaterialTopTabContextProvider};
