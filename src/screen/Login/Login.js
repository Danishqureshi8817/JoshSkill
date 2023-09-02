import { StyleSheet, Text, View,TextInput,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { responsiveHeight,responsiveFontSize,responsiveWidth } from 'react-native-responsive-dimensions'
import { wHeight,wWidht,sHeight,sWidht } from '../../utiles/Dimensions'
import { GoogleIcon } from '../../constants/imagePath';
import styles from './style';
import colors from '../../styles/colors';
import navigationStrings from '../../constants/navigationStrings';


const Login = ({navigation}) => {
  return (
    <View style={styles.mainContainer} >

      <Icon onPress={()=>{navigation.goBack()}}  name="arrow-back" size={responsiveWidth(8)} color={colors.blackOpacity80} style={styles.icon} />
      

       <Text style={styles.cnfText} >Confirm your number</Text>


       <View style={styles.inputStyle} >
        <Text style={styles.code} >+91</Text>

        <TextInput
         placeholder='Enter your number'
         keyboardType='number-pad'
         maxLength={10}
         style={styles.textInput}
         />
       </View>


       <View style={styles.otpTextContainer} >
          <Text style={styles.otpText1} >A 4 digit OTP will be sent via SMS to verify</Text>
          <Text style={styles.otpText2} >your mobile number</Text>
       </View>

       <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate(navigationStrings.Home)}} >
          
          <Text style={styles.buttonText} >Send OTP</Text>
       </TouchableOpacity>


       <View style={styles.orContainer} >
        <View style={styles.orLine1} ></View>
        <Text style={styles.orText} >OR</Text>
        <View style={styles.orLine2} ></View>
       </View>


       <TouchableOpacity style={styles.gButton} >
          <Image source={GoogleIcon} style={styles.gIcon} />
       </TouchableOpacity>


       <View style={styles.footerConatiner}>

<Text style={styles.footerMainText} >By continuing you consent to share your information with</Text>
<View style={styles.footerSubConatiner}>
<Text style={styles.footerSubMainText1} >josh Skill & agree to </Text> 
<TouchableOpacity onPress={()=>{}} >
        <Text style={styles.footerSubMainText2}>josh Skills' Privacy Policy</Text>
        </TouchableOpacity>
</View>

</View>




    
    </View>
  )
}

export default Login

// const styles = StyleSheet.create({

//     mainContainer:{
//         flex:1,
//         paddingTop:responsiveHeight(2)

//     },
//     icon:{
//         marginLeft:responsiveWidth(2.5)
//     },
//     cnfText:{
//         color:'#213554',
//         fontSize:responsiveFontSize(2.7),
//         fontWeight:'500',
//         marginLeft:responsiveWidth(7),
//         marginTop:responsiveHeight(4)
//     },
//     inputStyle:{
//       flexDirection:'row',
//         borderWidth:1,
//         borderColor:"rgba(0,0,0,0.08)",
//         marginHorizontal:responsiveWidth(7),
//         alignItems:'center',
//         borderRadius:responsiveWidth(2),
//         paddingHorizontal:responsiveWidth(4),
//         gap:2,
//         marginTop:responsiveHeight(5)

//     },
//     code:{
//         color:'#000',
//         fontSize:responsiveFontSize(1.9)
//     },
//     textInput:{
//         flex:1,
//         color:'#000',
//         fontSize:responsiveFontSize(1.9)
//     },
//     otpTextContainer:{
//         alignSelf:'center',
//         alignItems:'center',
//         marginTop:responsiveHeight(2)
//     },
//     otpText1:{
//         color:'#969799',
//         fontSize:responsiveFontSize(1.7)
//     },
//     otpText2:{
//         color:'#969799',
//         fontSize:responsiveFontSize(1.7)
//     },
//     button:{
//         borderWidth:2,
//         borderColor:'#107be5',
//         marginHorizontal:responsiveWidth(7),
//         alignItems:'center',
//         paddingVertical:responsiveHeight(1.5),
//         marginTop:responsiveHeight(5),
//         borderRadius:responsiveWidth(6)

//     },
//     buttonText:{
//         color:'#107be5',
//         fontSize:responsiveFontSize(2.1),
//         fontWeight:'bold'
//     },
//     orContainer:{
//         marginHorizontal:responsiveWidth(7),
//         alignItems:'center',
//         flexDirection:'row',
//         alignSelf:'center',
//         gap:responsiveWidth(2),
//         marginTop:responsiveHeight(3),
        
//     },
//     orLine1:{
//      borderBottomWidth:1,
//      borderBottomColor:'rgba(0,0,0,0.09)',
//      width:wWidht*0.4
//     },
//     orText:{
//      color:'#969799',
//      fontSize:responsiveFontSize(2.1),
    
//     },
//     orLine2:{
//      borderBottomWidth:1,
//      borderBottomColor:'rgba(0,0,0,0.09)',
//      width:wWidht*0.4,

//     },
//     gButton:{
//        alignSelf:'center',
//        borderColor:'#rgba(0,0,0,0.08)',
//        borderWidth:1,
//        borderRadius:responsiveWidth(7),
//        paddingVertical:responsiveHeight(2),
//        paddingHorizontal:responsiveWidth(2),
//        marginTop:responsiveHeight(3)


//     },
//     gIcon:{
//         resizeMode:'contain',
//         width:wWidht*0.1,
//         height:wHeight*0.03,
//         alignSelf:'center'

        
//     },
//     footerConatiner:{
//         gap:responsiveHeight(1),
//         marginTop:responsiveHeight(28),
//         alignSelf:'center',
        
//     },
//     footerMainText:{
//         color:'#969799',

//     },
//     footerSubConatiner:{
//         flexDirection:'row',
//         alignSelf:'center'

//     },
//     footerSubMainText1:{
//         color:'#969799'
//     },
//     footerSubMainText2:{
//         color:'#107be5',
//         textDecorationLine:'underline'
//     }



    



// })