import {createContext, useEffect, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const DENTISTACTIONS = {
  LOGIN: 'LOGIN_START',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILUER: 'LOGIN_FAILURE',
  LOUGOUT: 'LOGIN_LOGOUT',
};

const DentistAuthReducer = (state, action) => {
  switch (action.type) {
    case DENTISTACTIONS.LOGIN:
      return {
        dentist: null,
        isFetching: true,
        error: false,
      };
    case DENTISTACTIONS.SUCCESS:
      return {
        dentist: action.payload,
        isFetching: false,
        error: false,
      };
    case DENTISTACTIONS.FAILUER:
      return {
        dentist: null,
        isFetching: false,
        error: action.payload,
      };
    case DENTISTACTIONS.LOUGOUT:
      return {
        dentist: null,
        isFetching: false,
        error: false,
      };
    default:
      return {...state};
  }
};
export const DentistAuthContext = createContext();

export const DentistAuthContextProvider = ({children}) => {
  const INITIAL_STATE = {
    dentist: null,
    isFetching: false,
    error: false,
  };
  const [state, dispatchDentist] = useReducer(DentistAuthReducer, INITIAL_STATE);

  useEffect(() => {
    loadDentistData();
  }, []);

  const loadDentistData = async () => {
    try {
      const dentistData = await AsyncStorage.getItem('dentistData');
      if (dentistData) {
        dispatchDentist({type: DENTISTACTIONS.SUCCESS, payload: JSON.parse(dentistData)});
      }
    } catch (error) {
      console.error('Error loading dentist data:', error);
    }
  };

  const saveDentistData = async dentistData => {
    try {
      await AsyncStorage.setItem('dentistData', JSON.stringify(dentistData));
      dispatchDentist({type: DENTISTACTIONS.SUCCESS, payload: dentistData});
    } catch (error) {
      console.error('Error saving dentist data:', error);
    }
  };

  const clearDentistData = async () => {
    try {
      await AsyncStorage.removeItem('dentistData');
      dispatchDentist({type: DENTISTACTIONS.LOUGOUT});
    } catch (error) {
      console.error('Error clearing dentist data:', error);
    }
  };

  return (
    <DentistAuthContext.Provider
      value={{
        dentist: state.dentist,
        isFetching: state.isFetching,
        error: state.error,
        saveDentistData,
        clearDentistData,
        dispatchDentist,
      }}>
      {children}
    </DentistAuthContext.Provider>
  );
};
