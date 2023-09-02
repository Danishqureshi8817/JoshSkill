import { StyleSheet, Text, View,Image,TouchableOpacity, } from 'react-native'
import { wHeight,wWidht,sHeight,sWidht } from '../../utiles/Dimensions'
import { responsiveHeight,responsiveFontSize,responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../../styles/colors'


export default styles = StyleSheet.create({
    headerRightContainer:{ 
      flexDirection: 'row',
      gap:responsiveWidth(6) ,
      alignItems:'center'
    },
    headerUpgradeContainer:{
      backgroundColor:colors.yellow1,
      borderRadius:responsiveWidth(4)
    },
    headerUpgradeText:{
      color:colors.black,
      paddingVertical:responsiveHeight(0.8),
      paddingHorizontal:responsiveWidth(2.7),
      fontSize:responsiveFontSize(1.8),
      fontWeight:'400'
    },
    mainContainer:{
      flex:1
    },
    trialTimeWrapper:{
      flexDirection:'row',
      backgroundColor:colors.yellow1,
      alignSelf:'center',
      marginTop:responsiveHeight(3),
      paddingHorizontal:responsiveWidth(12),
      paddingVertical:responsiveHeight(1),
      gap:responsiveWidth(3),
      borderRadius:responsiveWidth(1),
      alignItems:'center'
    },
    trialTimeText:{
      color:colors.black,
      fontSize:responsiveFontSize(1.9),
      fontWeight:'500'
    },
    trialTimerWrapper:{
     flexDirection:'row',
     alignItems:'center',
     gap:responsiveWidth(1)
    },
    trialTime:{
      backgroundColor:colors.yellow2,
      paddingHorizontal:responsiveWidth(2),
      paddingVertical:responsiveHeight(1.1),
      borderRadius:responsiveWidth(1),
      color:colors.black,
      fontSize:responsiveFontSize(1.9)
    },
    trialTimeDots:{
      fontSize:responsiveFontSize(1.9),
      color:colors.black,
      fontWeight:'600'
    }
    ,
    ultimateWraper:{
      borderTopWidth:1,
      borderBottomWidth:1,
      borderTopColor:colors.inputBorder,
      borderBottomColor:colors.inputBorder,
      marginTop:responsiveHeight(2)
    },
    ultimateSubWraper:{    
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
    },
    ultimateLogo:{
          resizeMode:'contain',
          width:responsiveWidth(18),
          height:responsiveHeight(10)
    },
    ultimateText1:{
      color:colors.black,
      fontSize:responsiveFontSize(2.1)
  
  
    },
    ultimateText2:{
      color:colors.blackOpacity40
    },
    ultimateTime:{
      color:colors.blackOpacity40
    },
    button:{
      backgroundColor:colors.themeColor,
      paddingHorizontal:responsiveWidth(12),
      paddingVertical:responsiveHeight(2),
      alignItems:'center',
      borderRadius:responsiveWidth(10),
      position:'relative',
      marginHorizontal:responsiveWidth(12),
      marginTop:responsiveHeight(10)
  
  },
  buttomText:{
      color:colors.whiteText,
      fontSize:responsiveFontSize(1.9),
      fontWeight:'500',
      letterSpacing:0.4
  
  
  },
  trialTimeEnded:{
    color:colors.black,
    fontSize:responsiveFontSize(1.9),
    fontWeight:'500'
  },
  trialTimeEndedWrapper:{
    backgroundColor:colors.yellow1,
    alignSelf:'center',
    marginTop:responsiveHeight(3),
    paddingHorizontal:responsiveWidth(25),
    paddingVertical:responsiveHeight(2),
    gap:responsiveWidth(3),
    borderRadius:responsiveWidth(1),
    alignItems:'center'
  }
  
  })