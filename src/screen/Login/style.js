import { StyleSheet, Text, View,Image,TouchableOpacity, } from 'react-native'
import { wHeight,wWidht,sHeight,sWidht } from '../../utiles/Dimensions'
import { responsiveHeight,responsiveFontSize,responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../../styles/colors'


export default styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        paddingTop:responsiveHeight(2)

    },
    icon:{
        marginLeft:responsiveWidth(2.5)
    },
    cnfText:{
        color:colors.blackOpacity80,
        fontSize:responsiveFontSize(2.7),
        fontWeight:'500',
        marginLeft:responsiveWidth(7),
        marginTop:responsiveHeight(4)
    },
    inputStyle:{
      flexDirection:'row',
        borderWidth:1,
        borderColor:colors.inputBorder,
        marginHorizontal:responsiveWidth(7),
        alignItems:'center',
        borderRadius:responsiveWidth(2),
        paddingHorizontal:responsiveWidth(4),
        gap:2,
        marginTop:responsiveHeight(5)

    },
    code:{
        color:colors.black,
        fontSize:responsiveFontSize(1.9)
    },
    textInput:{
        flex:1,
        color:colors.black,
        fontSize:responsiveFontSize(1.9)
    },
    otpTextContainer:{
        alignSelf:'center',
        alignItems:'center',
        marginTop:responsiveHeight(2)
    },
    otpText1:{
        color:colors.gray,
        fontSize:responsiveFontSize(1.7)
    },
    otpText2:{
        color:colors.gray,
        fontSize:responsiveFontSize(1.7)
    },
    button:{
        borderWidth:2,
        borderColor:colors.themeColor,
        marginHorizontal:responsiveWidth(7),
        alignItems:'center',
        paddingVertical:responsiveHeight(1.5),
        marginTop:responsiveHeight(5),
        borderRadius:responsiveWidth(6),
   



    },
    buttonText:{
        color:colors.themeColor,
        fontSize:responsiveFontSize(2.1),
        fontWeight:'bold'
    },
    orContainer:{
        marginHorizontal:responsiveWidth(7),
        alignItems:'center',
        flexDirection:'row',
        alignSelf:'center',
        gap:responsiveWidth(2),
        marginTop:responsiveHeight(3),
        
    },
    orLine1:{
     borderBottomWidth:1,
     borderBottomColor:colors.inputBorder,
     width:wWidht*0.4
    },
    orText:{
     color:colors.gray,
     fontSize:responsiveFontSize(2.1),
    
    },
    orLine2:{
     borderBottomWidth:1,
     borderBottomColor:colors.inputBorder,
     width:wWidht*0.4,

    },
    gButton:{
       alignSelf:'center',
       borderColor:colors.inputBorder,
       borderWidth:1,
       borderRadius:responsiveWidth(7),
       paddingVertical:responsiveHeight(2),
       paddingHorizontal:responsiveWidth(2),
       marginTop:responsiveHeight(3)


    },
    gIcon:{
        resizeMode:'contain',
        width:wWidht*0.1,
        height:wHeight*0.03,
        alignSelf:'center'

        
    },
    footerConatiner:{
        gap:responsiveHeight(1),
        marginTop:responsiveHeight(28),
        alignSelf:'center',
        
    },
    footerMainText:{
        color:colors.gray

    },
    footerSubConatiner:{
        flexDirection:'row',
        alignSelf:'center'

    },
    footerSubMainText1:{
        color:colors.gray
    },
    footerSubMainText2:{
        color:colors.themeColor,
        textDecorationLine:'underline'
    },
   



    



})