import React from 'react';
import { Text, View, TouchableOpacity, Image } from "react-native";
// import { useNavigation } from '@react-navigation/native';
import HeaderTitleStyles from './styles';
import { Images, Back_Icon } from '../../Assets/Images';
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
    BackIcon
} = Images;

export default function HeaderTitle(props) {
    // const navigation = useNavigation();

    return (
        <View style={[HeaderViewStyle]}>
            <View style={Header_Details_ViewStyle}>
                <Text style={HeaderTextStyle}>{props.TextString}</Text>
            </View>
        </View>
    );
}
