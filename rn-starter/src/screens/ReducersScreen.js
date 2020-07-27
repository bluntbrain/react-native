import React,{useReducer} from 'react'
import {Text, StyleSheet, View, Button, FlatList} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 50;
//recuders = function that manages change to an object
// this is reducer implementation (define it outside Screen function)
// action = how should we change the state object
// dispatch = run my reducer
const reducer = (state, action) => {
    //state === {red: number, green: number, blue: number}
    //action === {type: 'change_red' || 'change_green' || 'change_blue' m, amount : 15 || -15}
    switch (action.type){
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload <0
            ? state
            : {...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload <0
            ? state
            : {...state, green: state.green + action.payload};        
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload <0
            ? state
            : {...state, blue: state.blue + action.payload};          
        default:
            return state;
    }
}

const ReducersScreen = () => {
    
    const [state, dispatch] = useReducer(reducer,{red:0, green:0, blue:0})
    const {red, green , blue} = state;
    return(<View>

        <Text style={styles.heading}>Reducers implementation</Text>

        <ColorCounter 
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})} 
        onDecrease={() => dispatch({type: 'change_red', payload: -1*COLOR_INCREMENT})}
        color="RED"/>

        <ColorCounter 
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})} 
        onDecrease={() => dispatch({type: 'change_green', payload: -1*COLOR_INCREMENT})}
        color="GREEN"/>

        <ColorCounter 
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})} 
        onDecrease={() => dispatch({type: 'change_blue', payload: -1*COLOR_INCREMENT})}
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

const styles = StyleSheet.create({
    heading:{
        textAlign:"center",
        fontSize:20
    
    }
})

export default ReducersScreen;