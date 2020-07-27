import React, {useReducer} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

//reducer = function that manages changes to an object
// action = how to change state

const reducer = (state, action) => {
    //state === {count : number}
    //action === {type: "increment" || "decrement", payload: 1}

    switch (action.type){
        case 'increment':
            return {...state, count : state.count + action.payload};
        case 'decrement':
            return {...state, count : state.count - action.payload};

        default: return state;
    }
}


const CounterScreen = () => {
    const [state, dipatch] = useReducer(reducer, {count: 0})
    return(
    <View>
    <Button
    title="Increase"
    onPress={() => {
        dipatch({type: 'increment', payload: 1})
    }}
    />
    <Button
    title="Decrease"
    onPress={() => {
        dipatch({type: 'decrement', payload: 1})
    }}
    />
    <Text style={styles.counterStyle}>Current count : {state.count}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    counterStyle:{
        fontSize:20,
        margin:20,
        alignSelf:"center"
    }
});

export default CounterScreen;