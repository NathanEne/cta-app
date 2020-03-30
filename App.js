import React from 'react';
import HomeScreen from './screens/homeScreen';

export default function App() {


const pressHandler = (id) => {
    console.log(id);
}

  return (
   <HomeScreen /> 
  );
}

