import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return <View>
        <Text style={styles.heading}>User input Demo</Text>
        <Text style={styles.normalText}>Enter Name</Text>
        <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(newValue) => setName(newValue) }
        />
        <Text style={styles.normalText}>Enter Password</Text>
        <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        value={password}
        onChangeText={(newValue) => setPassword(newValue) }
        />
        <Text style={styles.heading}>My name is {name}</Text>
        {password.length < 4 ? <Text style={styles.heading}>Password should be atleast 4 characters</Text>:<Text style={styles.heading}>Strong password</Text>}
    </View>
};

const styles = StyleSheet.create({
    input:{
        margin:10,
        borderColor: 'black',
        borderWidth:1,
        padding: 10,
        borderRadius:10
    },
    heading:{
        fontSize:20,
        alignSelf:"center"
    },
    normalText:{
        padding:10
    }
})

export default TextScreen;