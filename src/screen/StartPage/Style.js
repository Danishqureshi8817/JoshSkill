import { StyleSheet, Text, View,Image,TouchableOpacity, } from 'react-native'
import { wHeight,wWidht,sHeight,sWidht } from '../../utiles/Dimensions'
import { responsiveHeight,responsiveFontSize,responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../../styles/colors'

export default styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        // alignItems:'center',
        // marginTop:responsiveHeight(5),
        // gap:responsiveHeight(10)
        // justifyContent:'space-around',
        gap:sHeight*0.25

    },
    subContainer1:{
        justifyContent:'center',
        // alignItems:'center',
     
        

    },
    logo:{
        width:sWidht*0.4,
        height:sHeight*0.2,
        resizeMode:'contain',
        alignSelf:'center'
    },
    mainText:{
        color:colors.black,
        fontSize:responsiveFontSize(3),
        fontWeight:'400',
        marginTop:responsiveHeight(-2),
        alignSelf:'center'
    },
    discription:{
        //  borderWidth:responsiveWidth(0.1),
         marginTop:responsiveHeight(4),
         marginHorizontal:responsiveWidth(5),
        //  paddingHorizontal:responsiveWidth(18),
         paddingVertical:responsiveHeight(3),
         gap:responsiveWidth(3),
         elevation:1,
         borderRadius:responsiveWidth(1),
        //  shadowColor:'#171717',
      
    },
    discriptionTextBox:{
        flexDirection:'row',
        alignItems:'center',
        gap:responsiveWidth(7),
        paddingLeft:responsiveWidth(7)
    
    },
    discriptionText:{
        color:colors.black,
        fontSize:responsiveFontSize(2.1),
        fontWeight:'600'

    },
    subContainer2:{
     alignItems:'center',
     gap:responsiveHeight(1.5),
   
    
    },
    button:{
        backgroundColor:colors.themeColor,
        paddingHorizontal:responsiveWidth(33),
        paddingVertical:responsiveHeight(2),
        alignItems:'center',
        borderRadius:responsiveWidth(10),
        position:'relative'
    },
    buttomText:{
        color:colors.whiteText,
        fontSize:responsiveFontSize(2.1),
        fontWeight:'500'


    },
    loginWapper:{
        flexDirection:'row',
        gap:responsiveWidth(1)
    },
    loginWapperText1:{
        color:colors.black,
        fontSize:responsiveFontSize(1.9)
    },
    loginWapperText2:{
        color:colors.themeColor,
        fontSize:responsiveFontSize(1.9)
    },
    footerConatiner:{
        gap:responsiveHeight(1),
        marginTop:responsiveHeight(2)
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