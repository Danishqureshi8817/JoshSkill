import { Image, StyleSheet, Text, View,TouchableOpacity,TouchableHighlight,Button } from 'react-native'
import React,{useLayoutEffect,useState} from 'react'
import colors from '../../styles/colors'
import EIcon from 'react-native-vector-icons/Entypo';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Logo } from '../../constants/imagePath';
import styles  from './style'
import navigationStrings from '../../constants/navigationStrings';
import TrailTimer from '../../components/TrailTimer';
import CompletePay from '../CompletePay/CompletePay';



const Home = ({navigation}) => {

// console.log("porops",navigation)

const [trialEnd, settrialEnd] = useState(true)
const [showEnd, setShowEnd] = useState(false)
  //header Style
  useLayoutEffect(() => {

  
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.themeColor,
        color:colors.whiteText

      },
      headerTitle: "Josh Skills",
      headerTitleStyle:{
        color:colors.whiteText
      },
      headerRight: () =>
      (

        <View style={styles.headerRightContainer}>
          <View style={styles.headerUpgradeContainer} >
            <Text style={styles.headerUpgradeText} >Upgrade Now</Text>
          </View>
         
          <EIcon onPress={()=>{navigation.goBack()}}  name="dots-three-vertical" size={responsiveWidth(5)} color={colors.whiteText} style={{}} />

        </View>

      ),
      headerLeft : () =>( 
        <View>
           
        </View>
      )
      
    }
)

  }, [])

  



  return (
    <View style={styles.mainContainer} >

    

      <TrailTimer/> 
      

        <TouchableHighlight underlayColor={colors.touchableHighlight} onPress={()=>{navigation.navigate(navigationStrings.Lesson)}} style={styles.ultimateWraper} >
        <View style={styles.ultimateSubWraper} >
          <Image source={Logo} style={styles.ultimateLogo} />

          <View style={styles.ultimateTextWrapper}  >
          <Text style={styles.ultimateText1} >Ultimate Spoken Englis...</Text>
          <Text style={styles.ultimateText2}>Lesson 2</Text>
          </View>

          <Text  style={styles.ultimateTime} >11:35 am</Text>
          </View>
        </TouchableHighlight>


        <TouchableOpacity onPress={()=>{navigation.navigate(CompletePay)}}  style={styles.button} >
          
        <Text style={styles.buttomText} >Buy English Course</Text>
    </TouchableOpacity>

    {/* <Button title='sound play' onPress={()=>{}} /> */}

    {/* <Button
      title={"Stop"}
      onPress={stop} 
    /> */}
    </View>
  )
}

export default Home

