import React from "react";
import {
   View,
   Text,
   StyleSheet,
   Dimensions,
   StatusBar,
   Image
} from "react-native";
 
const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

import LottieView from 'lottie-react-native';
 
export default class App extends React.Component {

   constructor(props) {
       super(props);
       this.state = {
         
       }
   }

   render() {
       return (
           <View style={styles.container}>
               <LottieView 
                  source={require('./animation.json')} 
                  autoPlay 
                  loop 
               />
           </View>
       )
   }
}

const styles = StyleSheet.create({
   container: {
       height: Dev_Height,
       width: Dev_Width,
       backgroundColor: "#FFF"
   },
})
