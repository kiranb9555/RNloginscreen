import React from "react";
import { StyleSheet } from "react-native";

const LoginStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },
    SecondUIView:{
        marginTop: 28,
        position:'relative', 
        zIndex:1,
    },
    HeaderText:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        color:'#333',
    },
    TextStyle:{
        fontSize:18,
        fontWeight:'500',
        textAlign:'center',
    },
    input:{
        width:'87%',
        alignSelf:'center',
        borderRadius:6,
        marginTop:8,
        borderWidth:1,
        borderColor:'rgba(0, 0, 0, 0.1)',
        padding: 16,
    },
    CheckBox_Style: {},
    CheckBoxView:{
        flexDirection:'row',
        alignItems:'center'
    },
    ButtonView:{
        marginHorizontal:'5%',
        padding:'4%',
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'8%',
        backgroundColor:'#1F96F0',
        borderRadius:5,
        elevation:2
    },
    ButtonText:{
        fontsize:15,
        color:'#fff',
        fontWeight:'600'
    },
});
export default LoginStyle;