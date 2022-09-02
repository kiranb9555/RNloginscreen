import React from 'react';
import { Text, View, TouchableOpacity, Image } from "react-native";
// import { useNavigation } from '@react-navigation/native';
import HeaderTitleStyles from './styles';
import { Images } from '../../Assets/Images';
// import GlobalVariable from '../../Assets/Styles/GlobalColor';

const {
    HeaderViewStyle,
    Header_Details_ViewStyle,
    HeaderTextStyle,
    HeaderBackIconView,
    HeaderBackIcon,
    HeaderRightIconView,
    HeaderRightIcon,
} = HeaderTitleStyles

const {
    Back_Icon
} = Images;

export default function HeaderTitle(props) {
    // const navigation = useNavigation();

    return (
        <View style={[HeaderViewStyle]}>
            
            <View style={Header_Details_ViewStyle}>
                <Text style={HeaderTextStyle}>{props.TextString}</Text>
            </View>
            {/* {props.RightIcon ?
                <TouchableOpacity style={[HeaderRightIconView, { backgroundColor: props.modalVisible ? GlobalVariable.COLOR.WHITE : GlobalVariable.COLOR.FERNGREEN, }]} onPress={() => { props.RightIconPress() }}>
                    <Image source={props.RightIcon} style={[HeaderRightIcon, { tintColor: props.modalVisible ? GlobalVariable.COLOR.FERNGREEN : GlobalVariable.COLOR.WHITE, }]} />
                </TouchableOpacity>
                :
                <View style={HeaderRightIcon} />
            } */}
        </View>
    );
}
