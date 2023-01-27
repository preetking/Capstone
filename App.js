import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    
    <View style={{flex: 5}}>
      <View style={{flex: 1, backgroundColor: 'black'}}/>
      <Text style = {styles.title} onPress={()=> console.log("Text Clicked")}>      Medical Scanner</Text>
      <View style={{flex: 4, backgroundColor: 'black'}}/>
      <Pressable style = {styles.button1} onPress={()=>console.log("Connecting...")}><Text style={styles.text}>{'Connect To a Network'}</Text></Pressable>    
      <View style={{flex: 1, backgroundColor: 'black'}} />
      <Pressable style = {styles.button1} onPress={()=>console.log("Connecting...")}><Text style={styles.text}>{'View Stored Files'}</Text></Pressable> 
      <View style={{flex: 5, backgroundColor: 'black'}} />
      
    </View>
  );
} 

const styles = StyleSheet.create({
  backround1: {
    flex: 1,          
    backgroundColor: 'black', //or can do #rgb, #rrggbb, etc
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: 'green', 
    backgroundColor: 'black', 
    alignContent: 'center',
    fontFamily: 'Courier New',
    fontSize: '25',
    fontWeight: 'bold',  
    
    },
    text: {
      fontFamily: 'Courier New',
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: 'green',
  }
});

