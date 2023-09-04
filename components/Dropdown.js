import {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View} from 'react-native';

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  
  function searchText(text){
    console.log(text)
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',width: 200}}>
      <DropDownPicker
        style={{width: 200,alignSelf:'center'}}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        searchable={true}
        addCustomItem={true}
        searchPlaceholder="Search..."
        onChangeSearchText={(text) => searchText(text)}
      />
    </View>
  );
}
