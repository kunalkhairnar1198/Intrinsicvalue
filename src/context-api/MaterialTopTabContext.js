import React, {createContext, useState} from 'react';

const TabContext = createContext();

const MaterialTopTabContextProvider = props => {
  const [dynamicTab, setDynamicTab] = useState(null);

  console.log('CONTEXT', dynamicTab);

  const handleItemClick = item => {
    setDynamicTab({name: item.Symbol});
  };

  return (
    <TabContext.Provider value={{dynamicTab, handleItemClick}}>
      {props.children}
    </TabContext.Provider>
  );
};

export {TabContext, MaterialTopTabContextProvider};
