import React, {createContext, useState} from 'react';

const TabContext = createContext();

const MaterialTopTabContextProvider = props => {
  const [dynamicTab, setDynamicTab] = useState(null);
  const [isLoading, setIsLaoding] = useState(false);

  console.log('CONTEXT', dynamicTab);

  const handleItemClick = (item, navigation) => {
    setIsLaoding(true);
    setDynamicTab({name: item.Symbol});
    setTimeout(() => {
      navigation.navigate('Dynamicscreen', {item});
      setIsLaoding(false);
    }, 10);
  };

  return (
    <TabContext.Provider value={{dynamicTab, isLoading, handleItemClick}}>
      {props.children}
    </TabContext.Provider>
  );
};

export {TabContext, MaterialTopTabContextProvider};
