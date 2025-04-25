import React, {createContext, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCompanyIndicesAction} from '../store/dashboard/dashboardslice';

const TabContext = createContext();

const MaterialTopTabContextProvider = props => {
  const [dynamicTab, setDynamicTab] = useState(null);

  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);
  const {dynamicData} = useSelector(state => state.dashboard);

  const bottomSheetModalRef = useRef(null);
  const watchbottomSheetModalRef = useRef(null);
  const addWatchlistBottomModalRef = useRef(null);
  // console.log('CONTEXT', dynamicTab);

  useEffect(() => {
    if (dynamicTab) {
      console.log(
        'api call for retrive dynamic tab itesms',
        dynamicTab,
        dynamicData,
      );
      dispatch(getCompanyIndicesAction(token, dynamicTab, setIsLoading));
      setIsLoading(false);
    }
  }, [dynamicTab]);

  const handleItemClick = symbol => {
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
        addWatchlistBottomModalRef,
        watchbottomSheetModalRef,
        handleItemClick,
        setDynamicTab,
        dynamicTab,
      }}>
      {props.children}
    </TabContext.Provider>
  );
};

export {TabContext, MaterialTopTabContextProvider};
