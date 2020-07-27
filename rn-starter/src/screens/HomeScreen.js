import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Click on any button below to see it in action!</Text>
    <Button 
    onPress={()=> navigation.navigate("Reducers")}
    title="Go to Reduser Demo"/>
    <Button 
    onPress={()=> navigation.navigate("ImageScreen")}
    title="Go to Image Screen"/>
    <Button 
    onPress={()=> navigation.navigate("FlatList")}
    title="Go to List Demo"/>
    <Button 
    onPress={()=> navigation.navigate("Counter")}
    title="Go to Counter Demo"/>
    <Button 
    onPress={()=> navigation.navigate("Colors")}
    title="Go to Colors Demo"/>
    <Button 
    onPress={()=> navigation.navigate("Square")}
    title="Go to Square Demo"/>
    <Button 
    onPress={()=> navigation.navigate("TextScreen")}
    title="Go to User Input Demo"/>
    <Text style={styles.text}>Layout systems</Text>
    <Button 
    onPress={()=> navigation.navigate("BoxScreen")}
    title="Go to BoxScreen"/>
  </View>
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    alignSelf:"center",
    padding:30
  }
});

export default HomeScreen;
