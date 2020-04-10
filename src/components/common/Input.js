import React from 'react';
import {View,Text,TextInput} from 'react-native';

const Input = ({label,value,onchangeText,placeholder,secureTextEntry}) => {

    const {inputStyle,labelStyle,containerstyle} = styles;

    return (
        <View style={containerstyle}>
          <Text style={labelStyle}>{label}</Text>
          <TextInput 
                style={inputStyle}
                value={value}  
                onChangeText={onchangeText}
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
          />
        </View>
    );
};

const styles = {
    inputStyle:{
        color: '#000',
        paddingRight: 5,
        paddingLeft : 5,
        fontSize : 15,
        LineHeight: 23,
        flex : 2
    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex : 1
    },
    containerstyle:{
        height: 40,
        flex: 1,
        alignItems: 'center'
    }
};

export {Input};