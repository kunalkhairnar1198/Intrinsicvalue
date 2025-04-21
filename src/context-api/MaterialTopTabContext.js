import React, {createContext, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCompanyIndicesAction} from '../store/dashboard/dashboardslice';

const TabContext = createContext();

const MaterialTopTabContextProvider = props => {
  const [dynamicTab, setDynamicTab] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);

  const bottomSheetModalRef = useRef(null);
  const watchbottomSheetModalRef = useRef(null);
  const addWatchlistBottomModalRef = useRef(null);
  // console.log('CONTEXT', dynamicTab);

  const handleItemClick = item => {
    setDynamicTab({name: item.Symbol});
    dispatch(getCompanyIndicesAction(token, item.Symbol, setIsLoading));
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
      }}>
      {props.children}
    </TabContext.Provider>
  );
};

export {TabContext, MaterialTopTabContextProvider};
