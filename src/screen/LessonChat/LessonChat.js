import { StyleSheet, Text, View,ImageBackground, Image,TouchableOpacity,Button } from 'react-native'
import React,{useLayoutEffect,useEffect,useState,useCallback} from 'react'
import { AvtarAudio, ChatSkin, HIcon, Lesson1 } from '../../constants/imagePath'
import colors from '../../styles/colors'
import EIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Logo } from '../../constants/imagePath';
import { wWidht } from '../../utiles/Dimensions';
import TrackPlayer,{Capability,usePlaybackState,useProgress,State} from 'react-native-track-player';
import {Slider} from '@miblanchard/react-native-slider';
import { useIsFocused } from '@react-navigation/native';
import Lesson from '../../components/Lesson';
import chatData from '../../utiles/chatData';


const LessonChat = ({navigation}) => {
    const playbackState = usePlaybackState()
    const progress = useProgress()
    const [currentTrack, setCurrentTrack] = useState(null);

   const song = {    title: 'Avaritia',
    artist: 'deadmau5',
    artwork: require('../../assets/song.png') ,
    url: 'https://studymaterial.newindiagyan.online/uploads/file_example_MP3_700KB.mp3', // Load media from the network
}
    useEffect( () => {
       
      setupPlayer()
    //  return  () =>{
    //     TrackPlayer.reset()
    //     // await TrackPlayer.remove(song)
    //     TrackPlayer.destory()
    //  }

    return () => {
      TrackPlayer.pause()
      };
    }, [])
    
console.log("song",playbackState);
// console.log("trackerCC",currentTrack);

const toggelPlayback = async playbackState =>{
   
    if(playbackState === State.Paused || playbackState === State.Ready || playbackState === State.Buffering || playbackState === State.Connecting ){
    await TrackPlayer.play()
    }
    else if(playbackState === State.Stopped){
         // Seek to the beginning of the track
      await TrackPlayer.seekTo(0);
      // Play the current track again
      await TrackPlayer.play();
    } else{
        await TrackPlayer.pause()
    }
}
   

    const setupPlayer = async ()=>{
        try {
            await TrackPlayer.setupPlayer();

           await TrackPlayer.updateOptions({
                // Media controls capabilities
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext,
                    Capability.SkipToPrevious,
                    Capability.Stop,
                ],
                // Capabilities that will show up when the notification is in the compact form on Android
                compactCapabilities: [Capability.Play, Capability.Pause],  
            });
           await TrackPlayer.add(song)
        } catch (error) {   

        }
    }

    //header Style
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.themeColor,
        color:colors.whiteText

      },
      headerTitle: "Ultimate Spoken English Cou...",
      headerTitleStyle:{
        color:colors.whiteText
      },
      headerRight: () =>
      (
          <EIcon onPress={()=>{}}  name="dots-three-vertical" size={responsiveWidth(5)} color={colors.whiteText}/>
      ),
      headerLeft: () =>
      (
        <View style={styles.headerLeft}>
         <Icon onPress={()=>{navigation.goBack()}}  name="arrow-back" size={responsiveWidth(6)} color={colors.whiteText} />
         <Image source={HIcon} style={styles.headerLogo} /> 
        </View>
      ),
    }
)
  }, [])

  return (
    <View style={styles.mainContainer} >
        <ImageBackground source={ChatSkin}  style={StyleSheet.absoluteFillObject} >
         
         <Lesson data={chatData} />

        </ImageBackground>
 
    </View>
  )
}

export default LessonChat

const styles = StyleSheet.create({
    headerLeft:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:responsiveWidth(2),
        gap:responsiveWidth(1.5),
        marginLeft:responsiveWidth(-2)
    },
    headerLogo:{
       resizeMode:'contain',
       width:responsiveWidth(8),
       height:responsiveHeight(4),
       borderRadius:responsiveWidth(4)
    },
    mainContainer:{
        flex:1
    },
   




})