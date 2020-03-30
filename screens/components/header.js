import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header({txt}) {
return (
    <View style ={styles.header}>
        <Text style = {styles.title}>{txt}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#c21801'
    },
    title: {
            textAlign: 'center',
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold'
    }
});