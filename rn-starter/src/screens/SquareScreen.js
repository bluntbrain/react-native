import React,{useState} from 'react'
import {Text, StyleSheet, View, Button, FlatList} from 'react-native'
import ColorCounter from './../components/ColorCounter'

const COLOR_INCREMENT = 50;

const SquareScreen = () => {
    const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);

    const setColor = (color, change) => {
        //color === 'red', 'green', 'blue'
        // to cap the negative value of color and prevent it from going below 0 and above 255
        switch(color){
        case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
            return;
        case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
            return;
        case 'blue':
                green + change > 255 || green + change < 0 ? null : setBlue(green + change);
            return;
        default:
            return;
        }
    }

    return(<View>
        <ColorCounter 
        onIncrease={() => setColor('red', COLOR_INCREMENT)} 
        onDecrease={() => setColor('red', -1* COLOR_INCREMENT)}
        color="RED"/>
        <ColorCounter 
        onIncrease={() => setColor('green', COLOR_INCREMENT)} 
        onDecrease={() => setColor('green', -1* COLOR_INCREMENT)}
        color="GREEN"/>
        <ColorCounter 
        onIncrease={() => setColor('blue', COLOR_INCREMENT)} 
        onDecrease={() => setColor('blue', -1* COLOR_INCREMENT)}
        color="BLUE"/>
        <View style={{height:150, width:360,marginVertical:10, marginHorizontal:10, backgroundColor:`rgb(${red},${green},${blue})`}}/>


        </View>)
}

const randomRGB =() => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`

}

export default SquareScreen;