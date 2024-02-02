import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'

export default function Contact({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topNav}>
            <View style ={{flexDirection: "row", paddingLeft:5, gap:15}}>
            <TouchableOpacity onPress={() =>navigation.goBack()}>
            <Ionicons style= {{marginTop:36}} name="arrow-back-circle-outline" size={40} color="white" />
            </TouchableOpacity>
           
            <Text style={styles.navBarText}>They Are Here to Help You</Text>
            </View>
        <View style={styles.horizontal_line}></View>
        </View>

    {/*Dr. James Banda*/} 
      <View style={{ flexDirection: "column", alignItems: "center", marginTop: 15 }}>
        <Image style={{ width: 220, height: 200, padding: 15, marginTop: 15, borderRadius:100}} source={require('./../../assets/img/doc1.jpg')} />
        <Text style={{fontSize: 26, fontWeight:"bold"}}>
          Dr. James Banda
        </Text>
        <Text style={{fontSize: 20, fontWeight:"bold"}}>
          Newark Central Hospital
        </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, gap: 10, paddingLeft: 70}}>
        <Fontisto name="email" size={24} color="black" />
        <Text style={{fontSize:18, }}>drjames@newarkhospital.mw</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10, gap: 10, paddingLeft: 70}}>
      <Feather name="phone" size={24} color="black" />
        <Text style={{fontSize:18, }}>0993 105 484</Text>
      </View>
      <View style={styles.horizontal_line}></View>

       {/*Dr. Hannah Kalonga*/} 
       <View style={{ flexDirection: "column", alignItems: "center", marginTop: 15 }}>
        <Image style={{ width: 220, height: 200, padding: 15, marginTop: 15, borderRadius:100}} source={require('./../../assets/img/doc3.jpg')} />
        <Text style={{fontSize: 26, fontWeight:"bold"}}>
            Dr. Hannah Kalonga
        </Text>
        <Text style={{fontSize: 20, fontWeight:"bold"}}>
          St. James Private Hospital
        </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, gap: 10, paddingLeft: 70}}>
        <Fontisto name="email" size={24} color="black" />
        <Text style={{fontSize:18, }}>drhannah@stjameshospital.mw</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10, gap: 10, paddingLeft: 70}}>
      <Feather name="phone" size={24} color="black" />
        <Text style={{fontSize:18, }}>0998 109 870</Text>
      </View>
      <View style={styles.horizontal_line}></View>

      {/*Dr. Beston Mkandawire*/} 
      <View style={{ flexDirection: "column", alignItems: "center", marginTop: 15 }}>
        <Image style={{ width: 220, height: 200, padding: 15, marginTop: 15, borderRadius:100}} source={require('./../../assets/img/doc2.jpg')} />
        <Text style={{fontSize: 26, fontWeight:"bold"}}>
            Dr. Beston Mkandawire
        </Text>
        <Text style={{fontSize: 20, fontWeight:"bold"}}>
          St. Luke's International Hospital
        </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, gap: 10, paddingLeft: 70}}>
        <Fontisto name="email" size={24} color="black" />
        <Text style={{fontSize:18, }}>beston@stlukes.mw</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10, gap: 10, paddingLeft: 70}}>
      <Feather name="phone" size={24} color="black" />
        <Text style={{fontSize:18, }}>0998 109 870</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,  
      },

      topNav: {
        width: "100%",
        height: 90,
        backgroundColor: "#6C63FF",
        borderBottomRightRadius: 40,
        marginTop: 10,
      },
      navBarText:{
        marginTop:40,
        color:"black",
        fontSize:27,
        color: "white",
        textAlign:"right"
      },
      horizontal_line:{
        borderBottomWidth: 1,
        borderColor: "gray",
        padding: 10
      }
})