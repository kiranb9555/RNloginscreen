import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import {
    View, Text, TextInput, TouchableOpacity, Keyboard,

} from 'react-native';
import { Images } from "../../Assets/Images";
import HeaderTitle from "../../Components/HeaderTitle";
import LoginStyle from "./styles";

const {
    container,
    SecondUIView,
    HeaderText,
    TextStyle,
    input,
    CheckBox_Style,
    CheckBoxView,
    ButtonView,
    ButtonText,
} = LoginStyle;

const {
    CheckGrey,
    UncheckGrey,
} = Images;

const Login = () => {
    const [Checked, setChecked] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    

    const Validate = () => {
        Keyboard.dismiss();
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        // if (!strongRegex.test(email)) {
        //     showMessage(MESSAGE.email)
        //     return false;
        // } else if (password.length < 8) {
        //     showMessage(MESSAGE.password);
        //     return false;
        // }
    }

    return (
        <View style={container}>
            <HeaderTitle TextString='Login' />
            <View style={SecondUIView}>
                <Text style={HeaderText}>Welcome Back</Text>
                <Text style={TextStyle}>Login with email address</Text>

                <TextInput
                    placeholder="Email or Phone Number"
                    style={input}
                    onChangeText={(e) => setEmail(e)}
                    setError={error}
                />
                <TextInput
                    placeholder="Password"
                    style={input}
                />
                <View style={CheckBoxView}>
                    <CheckBox
                        style={CheckBox_Style}
                        // onClick={() => {
                        //     setChecked(!Checked);
                        // }}
                        // isChecked={Checked}
                        // rightText={'Remember Me'}
                        // rightTextStyle={{ color: "#707070", marginLeft: '4%' }}
                        // checkedImage={<CheckGrey width={"7%"} height={"7%"} />}
                        // unCheckedImage={<UncheckGrey width={'7%'} height={'7%'} />}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}

                    />
                    <Text style={[TextStyle, { fontSize: 15, color: '#333' }]}>Remember Me</Text>
                </View>
                {
                    toggleCheckBox == true ?
                        <TouchableOpacity>
                            <View style={ButtonView}>
                                <Text style={ButtonText}>Login</Text>
                            </View>
                        </TouchableOpacity> :
                        <TouchableOpacity  onPress={Validate()}>
                            <View style={[ButtonView,{backgroundColor:'#EDEDED'}]}>
                                <Text style={[ButtonText,{color:'#A5A4A4'}]}>Login</Text>
                            </View>
                        </TouchableOpacity>
                }



            </View>
        </View>
    )
}
export default Login;