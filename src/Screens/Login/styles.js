import React from "react";
import { StyleSheet } from "react-native";

const LoginStyle = StyleSheet.create({
    container:{
        flex:1,
    },
    SecondUIView:{

    },
    HeaderText:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:'10%',
        color:'#333',
    },
    TextStyle:{
        fontSize:18,
        fontWeight:'500',
        margin:'3%',
        textAlign:'center'
    },
    input:{
        marginHorizontal:'5%',
        marginVertical:'3%',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#333',
        color:'#333',
        paddingLeft:'5%',
        fontSize:16
    },
    CheckBox_Style: {
        marginLeft:'4%'
    },
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