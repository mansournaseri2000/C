import * as React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Padding, Border, FontFamily, FontSize, Color} from '../GlobalStyles';
import IdentityCard from '../components/IdentityCard';
import UploadImg from '../components/UploadImg';
import UploadPDF from '../components/UploadPDF';
import DifferCard from '../components/DifferCard';
import PaymentSuccess from '../components/PaymentSuccess';
import PaymentCancel from '../components/PaymentCancel';
import NewCaseCard from '../components/NewCaseCard';
import TreatmentCard from '../components/TreatmentCard';
import FinishedCard from '../components/FinishedCard';
import RefinementCard from '../components/RefinementCard';
import ArchiveCard from '../components/ArchiveCard';
import ReturnCard from '../components/ReturnCard';
import SearchBar from '../components/SearchBar';
import InfoCard from '../components/InfoCard';
import OrderCard from '../components/OrderCard';
import CaseTerminationCard from '../components/CaseTerminateCard';
import ShopDetailCard from '../components/ShopDetailCard';
import InstrcutureSlider from '../components/InstructureSlider';
import InfoVideoCard from '../components/InfoVideoCard';
import VideoCard from '../components/VideoCard';
import ArchUpload from '../components/ArchUpload';
import MedicalUpload from '../components/MedicalUpload';
import RadioQuestionCard from '../components/RadioQuestionCard';
import RadioAccept from '../components/RadioAccept';
import ShopCard from '../components/ShopCard';
import PrimaryDateCard from '../components/PrimaryDateCard';
import SecondaryDateCard from '../components/SecondaryDateCard';
import TrackerCard from '../components/TrackerCard';
import IconTitle from '../components/IconTitle';
import TreatmentTrack from '../components/TreatmentTrack';
import TreatmentUploadSlider from '../components/TreatmentUploadSlider';
import RefinementTrack from '../components/RefinementTrack';
import PrgoressSlider from '../components/ProgressSlider';
import AdCarousel from '../components/AdCarousel';
import BackgroundVideo from '../components/BackgroundVideo';
import BrochureCarousel from '../components/BrochureCarousel';
import InputGroup from '../components/InputGroup';
import InputGroupDate from '../components/InputGroupDate';
import InputGroupSelect from '../components/InputGroupSelect';
import InputGroupSearchSelect from '../components/InputGroupSearchSelect';
import SelectInputModal from '../components/SelectInputModal';
import SelectInputModalList from '../components/SelectInputModalList';

import PrimaryBtnSmall from '../components/PrimaryBtnSmall';
import PrimaryBtn from '../components/PrimaryBtn';
import SecondaryBtnSmall from '../components/SecondaryBtnSmall';
import SecondaryBtn from '../components/SecondaryBtn';
import PrimaryGhostBtn from '../components/PrimaryGhostBtn';
import SecondaryGhostBtn from '../components/SecondaryGhostBtn';
import WebviewBtn from '../components/WebviewBtn';
import DownloadPdfBtn from '../components/DownloadPdfBtn';

// import Select from '../components/Select';
// import DatePickerCom from '../components/DatePickerCom';
import YoutubeVideo from '../components/YoutubeVideo';
// import Radio from '../components/Radio';
// import Contract from '../components/Contract';
// import Download from '../components/Download';
// import ThreeD from '../components/ThreeD';
// import Condition from '../components/Condition';
// import Loading from '../components/Loading';
// import TakePic from '../components/TakePic';
// import MultipleFile from '../components/MultipleFile';
// import ListofPic from '../components/ListofPic';
// import Country from '../components/Country';
// import CountryState from '../components/CountryState';
// import Compress from '../components/Compress';
// import DropDown from '../components/Dropdown';

import Conttainer from '../components/Container';

const TestPage = () => {
  return (
    // <IdentityCard
    //   iconSrc={require('../assets/icons/Identification.png')}
    //   label={'Identity Card'}
    //   label1={'Optional'}
    //   imgsrc={require('../assets/IdentificationImg.png')}
    //   dir="ltr"
    //   //dir="rtl"
    // />

  

    // <UploadPDF
    // // type={'contract'}
    // type={'termination'}
    // // type={'acceptance'}
    // />

    // <DifferCard
    //   fullname={'Mansour Naseri'}
    //   phone={'+9126030028'}
    //   price={'1800'}
    //   dir="ltr"
    //   // dir="rtl"
    // />

    // <PaymentSuccess
    //   productname={'Modeling Kit'}
    //   price={'800'}
    //   tax={'7'}
    //   dir="ltr"
    //   // dir='rtl'
    // />

    //   <PaymentCancel
    //   productname={'Modeling Kit'}
    //   price={'800'}
    //   tax={'7'}
    //   dir="ltr"
    //   // dir='rtl'
    // />

    // <NewCaseCard
    //   fullname={'Mansour Naseri'}
    //   phone={'+9126030028'}
    //   price={'1800'}
    //   dir="ltr"
    //   // dir="rtl"
    // />

    // <TreatmentCard
    // fullname={'Mansour Naseri'}
    // phone={'+9126030028'}
    // price={'1800'}
    // dir="ltr"
    // // dir="rtl"
    // />

    // <FinishedCard
    // fullname={'Mansour Naseri'}
    // phone={'+9126030028'}
    // price={'1800'}
    // dir="ltr"
    // // dir="rtl"
    // />

    // <RefinementCard
    // fullname={'Mansour Naseri'}
    // phone={'+9126030028'}
    // price={'1800'}
    // dir="ltr"
    // // dir="rtl"
    // />

    // <ArchiveCard
    // fullname={'Mansour Naseri'}
    // phone={'+9126030028'}
    // price={'1800'}
    // dir="ltr"
    // // dir="rtl"
    // />

    // <SearchBar
    // dir='ltr'
    // // dir = 'rtl'
    // />

    // <ReturnCard
    // fullname = {'Fullname'}
    // productname = {'Aligner Kit'}
    // shipmethod = {'Ship Method'}
    // date = {'10/10/2020'}
    // dir='ltr'
    // // dir = 'rtl'
    // />

    // <InfoCard
    // lable={'Information'}
    // description={'You can order a 3D design before ordering and paying the full cost of the aligner service you want, because the type of aligner will be determined after the 3D design, and in the next step, the paid fee will be deducted from your aligner plan.'}
    // dir = 'ltr'
    // // dir = 'rtl'
    // />

    // <OrderCard
    //   fullname={'mansour naseri'}
    //   productname={'Teeth Molding Kit Complex'}
    //   price={'800'}
    //   dateorder={'15/03/2023'}
    //   trackcode={'12514-44458-52851'}
    //   datepost={'15/03/2022'}
    //   dir={'ltr'}
    // />

    // <CaseTerminationCard
    //   fullname={'mansour naseri'}
    //   phone={'+491258221'}
    //   dir={'ltr'}
    // />

    // <ShopDetailCard
    //   producttype={'Easy'}
    //   productname={'Modeling Kit'}
    //   price={'800'}
    //   dir={'rtl'}
    // />

    // <InstrcutureSlider />

    // <InfoVideoCard
    //   youtubeUrl={'https://www.youtube.com/watch?v=rp5MXHE3hUw'}
    //   title={'Modeling kit tutorial'}
    //   description={` Please watch the following video carefully before sending any pictures or videos so that you can choose the best angles for photographing the face.`}
    //   dir={'ltr'}

    // />

    // <VideoCard
    //   youtubeUrl={'https://www.youtube.com/watch?v=rp5MXHE3hUw'}
    //   title={'Modeling kit tutorial'}
    //   dir={'rtl'}
    // />

    // <ArchUpload label={'Lower Arch'}/>

    //   <UploadImg
    //   page={4}
    //   dir="ltr"
    //   //   //dir="rtl"
    // />


    // <MedicalUpload 
    // label={'Left Side'}
    // option={'Required'}/>
    
    // <RadioQuestionCard 
    // question={'What misaligned teeth do you suffer from?'}
    // dir='rtl'
    // />

    // <RadioAccept title={'Did you receive your aligner set?'} dir={'rtl'}/>

    // <ShopCard product={'Aligner Kit'} type={'Easy'} price={'800'} dir={'rtl'}/>

    // <PrimaryDateCard />

    // <SecondaryDateCard />

    // <TrackerCard />
    // <IconTitle />
    // <TreatmentTrack />
    // <TreatmentUploadSlider />
    // <RefinementTrack />
    // <PrgoressSlider />
    // <AdCarousel />
    // <BackgroundVideo />
    // <BrochureCarousel/>
    // <SelectInputModal/>
    // <SelectInputModalList />

    // <InputGroup/>
    // <InputGroupDate/>
    <InputGroupSelect/>
    // <InputGroupSearchSelect/>

    // <PrimaryBtn
    //   buttonText={'test'}
    //   //   //handler={}
    // />

    // <PrimaryBtnSmall
    //   buttonText={'test'}
    //   //handler={}
    // />

    // <SecondaryBtn
    //   buttonText={'test'}
    //   //handler={}
    // />

    // <SecondaryBtnSmall
    //   buttonText={'test'}
    //   //handler={}
    // />

    // <PrimaryGhostBtn
    //   buttonText={'test'}
    //   //handler={}
    // />

    // <SecondaryGhostBtn
    //   buttonText={'test'}
    //   //handler={}
    // />

    // <WebviewBtn />
    // <DownloadPdfBtn />

    // <DatePickerCom />
    // <YoutubeVideo />
    // <Radio />
    // <Contract />
    // <Download />
    // <ThreeD />
    // <Condition />
    // <Loading/>
    // <TakePic/>
    // <MultipleFile/>
    // <ListofPic/>
    // <Country/>
    // <CountryState/>
    // <Compress/>
    // <DropDown/>
  );
};

export default TestPage;
