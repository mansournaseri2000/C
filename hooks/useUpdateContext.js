import axios from 'axios';
import {USERACTIONS, UserAuthContext} from '../context/UserAuthContext.js';
import {
  DENTISTACTIONS,
  DentistAuthContext,
} from '../context/DentistAuthContext.js';
import {useContext, useEffect} from 'react';

const useUpdateContext = (type, profiledataId) => {
  const {dispatchUser} = useContext(UserAuthContext);
  const {dispatchDentist} = useContext(DentistAuthContext);
  useEffect(() => {
    fetchData();
    console.log('updatecontex')
  }, []);

  const fetchData = async () => {
    if (type === 'user') {
      try {
        const res = await axios.get(
          `http://10.0.2.2:5000/api/users/findbyid/${profiledataId}`,
        );
        if (res.data) {
          dispatchUser({type: USERACTIONS.SUCCESS, payload: res.data});
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    } else if (type === 'dentist') {
      try {
        const res = await axios.get(
          `http://10.0.2.2:5000/api/dentists/findbyid/${profiledataId}`,
        );
        if (res.data) {
          dispatchDentist({type: DENTISTACTIONS.SUCCESS, payload: res.data});
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    }
  };
};

export default useUpdateContext;
