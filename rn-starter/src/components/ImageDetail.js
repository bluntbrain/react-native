import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";

const ImageDetial = ({imageSource, score, title}) => {
return <View>
    <Image source={imageSource} />
    <Text>{title}</Text>
    <Text>Image score is {score}</Text>
    </View>

  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageDetial;
