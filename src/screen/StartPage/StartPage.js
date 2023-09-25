import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView, Button } from 'react-native'
import React from 'react'
import { Logo } from '../../constants/imagePath'
import { responsiveHeight,responsiveFontSize,responsiveWidth } from 'react-native-responsive-dimensions'
import AIcon from 'react-native-vector-icons/AntDesign';
import styles  from './Style'




const StartPage = ({navigation}) => {
  return (
    <View style={styles.mainContainer} >

<View style={styles.subContainer1} >
<Image source={Logo} style={styles.logo} />
<Text style={styles.mainText} >Spoken English Course</Text>

<View style={styles.discription} >

<View style={styles.discriptionTextBox} >
<AIcon  name="checksquare" size={responsiveWidth(5)} color="#05855a"  />
<Text style={styles.discriptionText} >100+ lessons</Text>
</View>

<View style={styles.discriptionTextBox} >
<AIcon  name="checksquare" size={responsiveWidth(5)} color="#05855a"  />
<Text style={styles.discriptionText} >Beginner to Advanced</Text>
</View>

<View style={styles.discriptionTextBox} >
<AIcon  name="checksquare" size={responsiveWidth(5)} color="#05855a"  />
<View>
<Text style={styles.discriptionText} >English Speaking</Text>
<Text style={styles.discriptionText} >Environment</Text>
</View>
</View>
    
    
   
</View>



</View>

<View style={styles.subContainer2} >
    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}  style={styles.button} >
          
        <Text style={styles.buttomText} >Start Now</Text>
    </TouchableOpacity>

    <View style={styles.loginWapper}>
        <Text style={styles.loginWapperText1} >Aleady s user?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} >
        <Text style={styles.loginWapperText2} >Log in</Text>  
        </TouchableOpacity>

    </View>


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



         
    </View>
  )
}

export default StartPage

