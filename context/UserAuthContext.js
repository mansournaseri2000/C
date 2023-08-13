import {createContext, useEffect, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const USERACTIONS = {
  LOGIN: 'LOGIN_START',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILUER: 'LOGIN_FAILURE',
  LOUGOUT: 'LOGIN_LOGOUT',
};

const UserAuthReducer = (state, action) => {
  switch (action.type) {
    case USERACTIONS.LOGIN:
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case USERACTIONS.SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case USERACTIONS.FAILUER:
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };
    case USERACTIONS.LOUGOUT:
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return {...state};
  }
};
export const UserAuthContext = createContext();

export const UserAuthContextProvider = ({children}) => {
  const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
  };
  const [state, dispatchUser] = useReducer(UserAuthReducer, INITIAL_STATE);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        dispatchUser({type: USERACTIONS.SUCCESS, payload: JSON.parse(userData)});
      }
    } catch (error) {
      console.log('Error loading user data:', error);
    }
  };

  const saveUserData = async userData => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      dispatchUser({type: USERACTIONS.SUCCESS, payload: userData});
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  const clearUserData = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      dispatchUser({type: USERACTIONS.LOUGOUT});
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  };

  return (
    <UserAuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        saveUserData,
        clearUserData,
        dispatchUser,
      }}>
      {children}
    </UserAuthContext.Provider>
  );
};
