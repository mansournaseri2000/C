import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';

export default function DatePickerCom() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  console.log(date)
  return (
    <>
      <Text onPress={() => setOpen(true)}>{moment(date).format("YYYY/MM/DD")}</Text>
      <DatePicker
        mode="date"
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
