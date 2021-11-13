import React, {useState} from 'react'
import RNSingleSelect, {
  ISingleSelectDataType,
} from "@freakycoder/react-native-single-select";
import {View, Text, StyleSheet} from 'react-native'

const App = () => {

  const [selected, setSelected] = useState(null)
  const staticData = [
    { id: 0, value: "Euismod Justo" },
    { id: 1, value: "Risus Venenatis" },
    { id: 2, value: "Vestibulum Ullamcorper" },
    { id: 3, value: "Lorem Nibh" },
    { id: 4, value: "Ligula Amet" },
  ];

  return (
    <View style={styles.container}>
      <RNSingleSelect
        data={staticData}
        darkMode={false}
        searchEnabled={false}
        onSelect={(selectedItem) =>
          {
          console.log("SelectedItem: ", selectedItem)

          //Using useState Hook the selected item dosen't handle in the component
          //setSelected(selectedItem)
        }
        }
      />

      {
        selected && (
          <Text>
            Selected: {selected.value}
          </Text>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  }
})


export default App
