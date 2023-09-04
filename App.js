const Stack = createNativeStackNavigator();
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from './screens/SplashScreen';
import OnboardingOne from './screens/OnboardingOne';
import OnboardingTwo from './screens/OnboardingTwo';
import OnboardingThree from './screens/OnboardingThree';
import Home from './screens/Home';

import Chat from './screens/Chat';
import Conditions from './screens/Conditions';
import FAQs from './screens/FAQs';
import Videos from './screens/Videos';

import DentistRegister from './screens/DentistRegister';
import DentistLogin from './screens/DentistLogin';
import DentistReset from './screens/DentistReset';
import DentistRecovery from './screens/DentistRecovery';

import DentistHome from './screens/DentistHome';
import DentistProfile from './screens/DentistProfile';
import DentistIdentity from './screens/DentistIdentity';
import DentistContract from './screens/DentistContract';
import DentistContractPDF from './screens/DentistContractPDF';
import DentistTermination from './screens/DentistTermination';
import DentistTerminationPDF from './screens/DentistTerminationPDF';
import DentistDifferList from './screens/DentistDifferList';
import DentistPaymentSuccess from './screens/DentistPaymentSuccess';
import DentistPaymentCancel from './screens/DentistPaymentCancel';
import DentistDiffAccept from './screens/DentistDiffAccept';
import DentistDiffAcceptPdf from './screens/DentistDiffAcceptPdf';
import DentistGuaranteeList from './screens/DentistGuaranteeList';

import DentistCases from './screens/DentistCases';
import DentistNewCases from './screens/DentistNewCases';
import DentistTreatmentList from './screens/DentistTreatmentList';
import DentistFinishedList from './screens/DentistFinishedList';
import DentistRefinementList from './screens/DentistRefinementList';
import DentistArchiveList from './screens/DentistArchiveList';
import DentistReturnList from './screens/DentistReturnList';
import DentistNewReturn from './screens/DentistNewReturn';
import DentistOrderList from './screens/DentistOrderList';
import DentistTerminationAction from './screens/DentistTerminationAction';
import DentistCaseTermination from './screens/DentistCaseTermination';
import DentistCaseTerminationPDF from './screens/DentistCaseTerminationPDF';

import CaseRegister from './screens/CaseRegister';
import CaseLogin from './screens/CaseLogin';
import CaseReset from './screens/CaseReset';
import CaseRecovery from './screens/CaseRecovery';

import CaseProfile from './screens/CaseProfile';
import CaseAddress from './screens/CaseAddress';
import CaseIdentity from './screens/CaseIdentity';

import CaseModelingShop from './screens/CaseModelingShop';
import CaseModelingSuccess from './screens/CaseModelingSuccess';
import CaseModelingCancel from './screens/CaseModelingCancel';
import CaseModelingInstruction from './screens/CaseModelingInstruction';
import CaseModelingTrack from './screens/CaseModelingTrack';
import CaseImperssion from './screens/CaseImperssion';
import CaseMedical from './screens/CaseMedical';
import CaseSutable from './screens/CaseSutable';
import CaseDoctorOpinion from './screens/CaseDoctorOpinion';
import CaseOrderMethods from './screens/CaseOrderMethods';
import Case3DPaymentSuccess from './screens/Case3DPaymentSuccess';
import Case3DPaymentCancel from './screens/Case3DPaymentCancel';
import CaseSimulationFirst from './screens/CaseSimulationFirst';
import CaseShopDisable from './screens/CaseShopDisable';
import CaseShopDetail from './screens/CaseShopDetail';
import CaseAlignerPaymentSuccess from './screens/CaseAlignerPaymentSuccess';
import CaseAlignerPaymentCancel from './screens/CaseAlignerPaymentCancel';
import CaseContract from './screens/CaseContract';
import CaseContractPDF from './screens/CaseContractPDF';
import CaseSimulationSecond from './screens/CaseSimulationSecond';
import CaseTrackAligner from './screens/CaseTrackAligner';
import CaseTrackStructure from './screens/CaseTrackStructure';
import CaseTreatment from './screens/CaseTreatment';
import CaseProgress from './screens/CaseProgress';
import CaseGuarantees from './screens/CaseGuarantees';
import TestPage from './screens/TestPage'
import FixedPage from './screens/FixedPage';
import ScrollViewPage from './screens/ScrollViewPage';
import BrochurePage from './screens/BrochurePage'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconRegistry, ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,} from 'react-native';

import {GestureHandlerRootView, RectButton} from 'react-native-gesture-handler';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 20);
  }, []);

  function MaterialIcon({name, style}) {
    const {height, tintColor, ...iconStyle} = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = name => ({
    toReactElement: props => MaterialIcon({name, ...props}),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      },
    );
  }
  const MaterialIconsPack = {
    name: 'material',
    icons: createIconsMap(),
  };

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* <Stack.Screen name="FixedPage" component={FixedPage} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="ScrollViewPage" component={ScrollViewPage} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="BrochurePage" component={BrochurePage} options={{headerShown: false}}/> */}
            <Stack.Screen name="TestPage" component={TestPage} options={{headerShown: false}}/>
            
            {/* <Stack.Screen name="OnboardingOne" component={OnboardingOne} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="OnboardingThree" component={OnboardingThree} options={{headerShown: false}}/> */}

            {/* <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/> */}
           
            {/* <Stack.Screen name="DentistRegister" component={DentistRegister} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistLogin" component={DentistLogin} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistRecovery" component={DentistRecovery} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistReset" component={DentistReset} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistHome" component={DentistHome} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistProfile" component={DentistProfile} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistIdentity" component={DentistIdentity} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistContract" component={DentistContract} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistContractPDF" component={DentistContractPDF} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistTermination" component={DentistTermination} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistTerminationPDF" component={DentistTerminationPDF} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistDifferList" component={DentistDifferList} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistPaymentSuccess" component={DentistPaymentSuccess} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistPaymentCancel" component={DentistPaymentCancel} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistDiffAccept" component={DentistDiffAccept} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistDiffAcceptPdf" component={DentistDiffAcceptPdf} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistGuaranteeList" component={DentistGuaranteeList} options={{headerShown: false}}/>  */}
            {/* <Stack.Screen name="DentistCases" component={DentistCases} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistNewCases" component={DentistNewCases} options={{headerShown: false}}/>   */}
            {/* <Stack.Screen name="DentistTreatmentList" component={DentistTreatmentList} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistFinishedList" component={DentistFinishedList} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistRefinementList" component={DentistRefinementList} options={{headerShown: false}}/>  */}
            {/* <Stack.Screen name="DentistArchiveList" component={DentistArchiveList} options={{headerShown: false}}/>  */}
            {/* <Stack.Screen name="DentistReturnList" component={DentistReturnList} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistNewReturn" component={DentistNewReturn} options={{headerShown: false}}/>  */}
            {/* <Stack.Screen name="DentistOrderList" component={DentistOrderList} options={{headerShown: false}}/>  */}
            {/* <Stack.Screen name="DentistTerminationAction" component={DentistTerminationAction} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistCaseTermination" component={DentistCaseTermination} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="DentistCaseTerminationPDF" component={DentistCaseTerminationPDF} options={{headerShown: false}}/> */}
         
         
            {/* <Stack.Screen name="CaseRegister" component={CaseRegister} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseLogin" component={CaseLogin} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseRecovery" component={CaseRecovery} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseReset" component={CaseReset} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseProfile" component={CaseProfile} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseAddress" component={CaseAddress} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseIdentity" component={CaseIdentity} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseModelingShop" component={CaseModelingShop} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseModelingSuccess" component={CaseModelingSuccess} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseModelingCancel" component={CaseModelingCancel} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseModelingInstruction" component={CaseModelingInstruction} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseModelingTrack" component={CaseModelingTrack} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseImperssion" component={CaseImperssion} options={{headerShown: false}}/>  */}
            {/* <Stack.Screen name="CaseMedical" component={CaseMedical} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseSutable" component={CaseSutable} options={{headerShown: false}}/>   */}
            {/* <Stack.Screen name="CaseDoctorOpinion" component={CaseDoctorOpinion} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseOrderMethods" component={CaseOrderMethods} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="Case3DPaymentSuccess" component={Case3DPaymentSuccess} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="Case3DPaymentCancel" component={Case3DPaymentCancel} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseSimulationFirst" component={CaseSimulationFirst} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseShopDisable" component={CaseShopDisable} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseShopDetail" component={CaseShopDetail} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseAlignerPaymentSuccess" component={CaseAlignerPaymentSuccess} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseAlignerPaymentCancel" component={CaseAlignerPaymentCancel} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseContract" component={CaseContract} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseContractPDF" component={CaseContractPDF} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseSimulationSecond" component={CaseSimulationSecond} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseTrackAligner" component={CaseTrackAligner} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseTrackStructure" component={CaseTrackStructure} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseTreatment" component={CaseTreatment} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseProgress" component={CaseProgress} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="CaseGuarantees" component={CaseGuarantees} options={{headerShown: false}}/> */}
           
            {/* <Stack.Screen name="Chat" component={Chat} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="FAQs" component={FAQs} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="Videos" component={Videos} options={{headerShown: false}}/> */}
            {/* <Stack.Screen name="Conditions" component={Conditions} options={{headerShown: false}}/> */}
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
        )}
      </NavigationContainer>
      </GestureHandlerRootView>
      </ApplicationProvider>
    </>
  );
};
export default App;
