// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import DatePicker from 'react-native-date-picker';

// const MyDatePickerComponent = () => {
//     console.log("qwertyuio")
//     const [date, setDate] = useState(new Date());
//     const [showDatePicker, setShowDatePicker] = useState(false);
  
//     const handleDateChange = (selectedDate) => {
//       setDate(selectedDate);
//       setShowDatePicker(false);
//     };
  
//     return (
//       <View>
//         <TouchableOpacity onPress={() => setShowDatePicker(true)}>
//           <Text>Show Date Picker</Text>
//         </TouchableOpacity>
  
//         {showDatePicker && (
//           <DatePicker
//             date={date}
//             onDateChange={handleDateChange}
//             mode="date" // You can also use "time" or "datetime"
//           />
//         )}
  
//         <Text>Selected Date: {date.toDateString()}</Text>
//       </View>
//     );
//   };

//   export default MyDatePickerComponent;

import React, { useState } from 'react';
import { Button, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function MyDatePickerComponent() {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <View>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </View>
  )
};