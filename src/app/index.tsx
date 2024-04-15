import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import FoodListItem from "../components/FoodListItem";
import { useState } from "react";

const foodItem = [
  {label: "Pizza", cal: 20, brand: "Pizza hut"},
  {label: "Apple", cal: 50, brand: "Apple cidar"},
  {label: "Apple", cal: 50, brand: "Apple cidar"},
  {label: "Apple", cal: 50, brand: "Apple cidar"},
  {label: "Apple", cal: 50, brand: "Apple cidar"},
  {label: "Apple", cal: 50, brand: "Apple cidar"},
  {label: "Apple", cal: 50, brand: "Apple cidar"},
  {label: "Apple", cal: 50, brand: "Apple cidar"},
  {label: "Apple", cal: 50, brand: "Apple cidar"},
  {label: "Apple", cal: 50, brand: "Apple cidar"},
  {label: "Apple", cal: 50, brand: "Apple cidar"},
  {label: "Coffee", cal: 75, brand: "Coffee shop"}
]

export default function App() {
  const [search, setSearch] = useState("") 


  const searchInput = () => {
    console.log("searching for: ", search);
    setSearch("")
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search..." value={search} onChangeText={setSearch} style={styles.input} />

      {search && <Button title="Search" onPress={searchInput} />}

     <FlatList 
     data={foodItem}
     renderItem={({item}) => <FoodListItem item={item} />}
     contentContainerStyle={{gap: 5}}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    // alignItems: 'center',
    justifyContent: "center",
    gap: 10
  },

  input: {
    backgroundColor: "#f2f2f2",
    marginTop: 20,
    padding:10,
    borderRadius: 10
  }
});
