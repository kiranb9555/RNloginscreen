import { StyleSheet } from 'react-native';
import { RFPercentage, } from "react-native-responsive-fontsize";

const HeaderTitleStyles = StyleSheet.create({
    HeaderViewStyle: {
        flexDirection: 'column',
        height: '8%',
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: "100%",
        paddingHorizontal: 10
    },
    Header_Details_ViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'
    },
    HeaderTextStyle: {
        fontSize: RFPercentage(2.5),
        color: '#333',
        textAlign: 'center',
        alignItems: 'center',
        alignSelf:'center'
        
    },
    HeaderBackIconView: {
        height: 20,
        width: 20,
    },
    HeaderBackIcon: {
        height: 20,
        width: 20,
        tintColor: "#333",
    },
    HeaderRightIconView: {
        borderRadius: 10,
        padding: 8,
        justifyContent: 'center',
    },
    HeaderRightIcon: {
        height: 20,
        width: 20,
    },
});

export default HeaderTitleStyles;