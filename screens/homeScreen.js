import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import Header from './components/header';

export default function HomeScreen() {
const [belts, setBelts] = useState([
    {beltLvl: 'White', key: 1},
    {beltLvl: "Yellow-Stripe", key: 2},
    {beltLvl: "Yellow", key: 3},
    {beltLvl: "Green-Stripe", key: 4},
    {beltLvl: "Green", key: 5},
    {beltLvl: "Blue-Stripe", key: 6},
    {beltLvl: "Blue", key: 7},
    {beltLvl: "Red-Stripe", key: 8},
    {beltLvl: "Red", key: 9},
    {beltLvl: "Black-Stripe", key: 10},
    {beltLvl: "Poom", key: 11},
    {beltLvl: "Black", key: 12}
]);

const pressHandler = (id) => {
    console.log(id);
}

  return (
    
    <View style={styles.container}>
      <Header txt = { 'Home Page' } />
    <ScrollView>  
    {belts.map((item)=> (
          <View key = {item.key}>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
              <Text style = {styles.item}>{item.beltLvl} Belt </Text>
            </TouchableOpacity>
          </View>
        )
    )}

    <Text></Text>
    </ScrollView>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5c5e5d',
  },
  item: {
    marginTop: 24,
    padding: 30, 
    backgroundColor: '#868786',
    fontSize: 24

  }
});