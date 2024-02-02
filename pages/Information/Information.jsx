import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

export default function Information({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topNav}>
        <View style ={{flexDirection: "row", paddingLeft:5, gap:90}}>
            <TouchableOpacity onPress={() =>navigation.goBack()}>
            <Ionicons style= {{marginTop:12}} name="arrow-back-circle-outline" size={40} color="white" />
            </TouchableOpacity>
            <Text style ={{marginTop: 13, color: "white", fontSize:30, fontWeight:"bold"}}>Cataract 101</Text>
        </View>
        <Text style={{color: "white", fontSize:18, paddingLeft:140}}>What you need to know</Text>
        </View>
        <Text style={styles.heading}>What is a Cataract?</Text>
        <Image style ={{width:"100%", height:"6%"}} source = {require('./../../assets/img/old_man.jpg')}/>
        <Text style={{marginTop: 15, textAlign:"justify", fontSize: 17}}>
        A cataract is a clouding of the lens of the eye, which is typically clear. For people who have cataracts, seeing through cloudy lenses is like looking through a frosty or fogged-up window. Clouded vision caused by cataracts can make it more difficult to read, drive a car at night or see the expression on a friend's face.
        </Text>
        <Text style={{marginTop: 10, textAlign:"justify", fontSize: 17}}>
        Most cataracts develop slowly and don't disturb eyesight early on. But with time, cataracts will eventually affect vision.
        </Text>
        <Text style={{marginTop: 20, textAlign:"justify", fontSize: 17}}>
        At first, stronger lighting and eyeglasses can help deal with cataracts. But if impaired vision affects usual activities, cataract surgery might be needed. Fortunately, cataract surgery is generally a safe, effective procedure.
        </Text>

        <Text style={styles.heading}>Causes of Cataracts</Text>
        <Image style ={{width:"100%", height:"6%"}} source = {require('./../../assets/img/sad.jpg')}/>
        <Text style={styles.bulletPoint}>• Age</Text>
        <Text style={styles.text}>
          The primary cause of cataracts is aging. Most people develop cataracts as they get older.
        </Text>

        <Text style={styles.bulletPoint}>• Genetics</Text>
        <Text style={styles.text}>
          Genetics can play a role in cataract development. Some people may be more predisposed to cataracts due to their family history.
        </Text>

        <Text style={styles.bulletPoint}>• Medical Conditions</Text>
        <Text style={styles.text}>
          Certain medical conditions, such as diabetes, can increase the risk of cataracts.
        </Text>

        <Text style={styles.bulletPoint}>• Trauma or Injury</Text>
        <Text style={styles.text}>
          Eye injuries or trauma can contribute to the formation of cataracts.
        </Text>

        <Text style={styles.bulletPoint}>• Medications</Text>
        <Text style={styles.text}>
          Prolonged use of certain medications, such as corticosteroids, may accelerate cataract formation.
        </Text>

        <Text style={styles.heading}>Symptoms of Cataracts</Text>
        <Image style ={{width:"100%", height:"6%"}} source = {require('./../../assets/img/symptoms.jpeg')}/>
        <Text style={styles.bulletPoint}>• Blurred Visions</Text>
        <Text style={styles.text}>
          Gradual blurring of vision is a common symptom.
        </Text>

        <Text style={styles.bulletPoint}>• Sensitivity to Light</Text>
        <Text style={styles.text}>
          Increased sensitivity to light, glare, or halos around lights.
        </Text>

        <Text style={styles.bulletPoint}>• Difficulty Seeing at Night</Text>
        <Text style={styles.text}>
          Difficulty seeing clearly in low-light conditions.
        </Text>

        <Text style={styles.bulletPoint}>• Fading of Colors</Text>
        <Text style={styles.text}>
          Colors may appear faded or yellowed.
        </Text>

        <Text style={styles.bulletPoint}>• Frequent Prescription Changes</Text>
        <Text style={styles.text}>
          Need for frequent changes in eyeglass or contact lens prescriptions.
        </Text>

        <Text style={styles.heading}>Diagnosis</Text>
        <Image style ={{width:"100%", height:"6%"}} source = {require('./../../assets/img/diagnosis.jpg')}/>
        <Text style={styles.bulletPoint}>• Eye Examination</Text>
        <Text style={styles.text}>
          Cataracts are typically diagnosed through a comprehensive eye examination.
        </Text>

        <Text style={styles.bulletPoint}>• Visual Acuity Test</Text>
        <Text style={styles.text}>
          A visual acuity test measures the sharpness of your vision.
        </Text>

        <Text style={styles.bulletPoint}>• Slit-Lamp Examination</Text>
        <Text style={styles.text}>
          A slit-lamp examination allows the eye doctor to examine the structures at the front of the eye.
        </Text>

      
        <Text style={styles.text}>
          A dilated eye exam helps in examining the back of the eye, including the retina.
        </Text>

        <Text style={styles.heading}>Treatment Options</Text>
        <Image style ={{width:"100%", height:"7%"}} source = {require('./../../assets/img/banner.jpg')}/>
        <Text style={styles.bulletPoint}>• Prescription Glasses</Text>
        <Text style={styles.text}>
          In the early stages, changes in prescription glasses may improve vision.
        </Text>

        <Text style={styles.bulletPoint}>• Surgery (Cataract Extraction)</Text>
        <Text style={styles.text}>
          Cataract surgery involves removing the cloudy lens and replacing it with an artificial intraocular lens (IOL).
        </Text>

        <Text style={styles.bulletPoint}>• Intraocular Lens Options</Text>
        <Text style={styles.text}>
          Different types of IOLs are available, including monofocal, multifocal, and toric lenses.
        </Text>

        <Text style={styles.bulletPoint}>• Phacoemulsification</Text>
        <Text style={styles.text}>
          Modern cataract surgery often involves phacoemulsification, a minimally invasive technique.
        </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: "370%", 
  },
  
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
  },
  bulletPoint: {
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 20,
  },
  
  text: {
    marginTop: 5,
    textAlign:"justify",
    fontSize: 17,
  },
  topNav: {
    width: "100%",
    height: "2.4%",
    backgroundColor: "#6C63FF",
    borderBottomRightRadius: 50,
    marginTop: 15,
  },
});