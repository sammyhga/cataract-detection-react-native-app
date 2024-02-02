import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
   <View style={{backgroundColor:"white"}}>
  <Image style={{height: "40%", width:"90%",alignSelf:"center", marginTop:150 }} source = {require('./../../assets/img/doc.png')}/>   
      <View style={styles.topNav}>
        <Text style ={{paddingTop: 50, fontSize: 35, fontWeight:"bold", textAlign: "center", color:"white"}}>
            Welcome to CataCare!
        </Text>
        <Text style ={{fontSize: 17, textAlign: "center", marginTop: 10, color: "white"}}>
        Your Window to Cataract Detection and Eye Wellness
        </Text>
        <TouchableOpacity  style ={styles.roundedButton} onPress={() =>navigation.navigate("Description")}>
        <Text style={{textAlign: "center", fontSize: 17, color:"#6C63FF", fontWeight:"bold"}}>
            Let's Get You Started
        </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    topNav: {
      width: "100%",
      height: "50%",
      backgroundColor: "#6C63FF",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginTop: 40,
    },

    roundedButton:{
        width:"70%",
        padding: 15,
        marginTop: 25,
        backgroundColor: "white",
        borderRadius:99,
        height:"10%",
        alignSelf: "center",
    }
});