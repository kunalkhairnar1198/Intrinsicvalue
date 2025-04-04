import React, {createContext, useRef, useState} from 'react';

const TabContext = createContext();

const MaterialTopTabContextProvider = props => {
  const [dynamicTab, setDynamicTab] = useState(null);
  const [loading, setIsLoading] = useState(false);

  const bottomSheetModalRef = useRef(null);
  const watchbottomSheetModalRef = useRef(null);
  // console.log('CONTEXT', dynamicTab);

  const handleItemClick = item => {
    setDynamicTab({name: item.Symbol});
    setIsLoading(true);
  };
  const toggleLoader = () => {
    setIsLoading(false);
  };
  return (
    <TabContext.Provider
      value={{
        dynamicTab,
        toggleLoader,
        loading,
        bottomSheetModalRef,
        watchbottomSheetModalRef,
        handleItemClick,
      }}>
      {props.children}
    </TabContext.Provider>
  );
};

export {TabContext, MaterialTopTabContextProvider};
