import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Detector({ navigation }) {
  const cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [photo, setPhoto] = useState();
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const galleryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();

      setHasCameraPermission(cameraPermission.status === "granted");
      setHasGalleryPermission(galleryPermission.status === "granted");
    })();
  }, []);

  const [hasGalleryPermission, setHasGalleryPermission] = useState();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedAsset = result.assets && result.assets.length > 0 ? result.assets[0] : null;
      setPhoto(selectedAsset);
      setPrediction(null); // Reset prediction when a new image is selected
    }
  };

  if (hasCameraPermission === undefined || hasGalleryPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission || !hasGalleryPermission) {
    return (
      <Text>
        Permission for camera or gallery not granted. Please change this in settings.
      </Text>
    );
  }

  let takePic = async () => {
    if (cameraRef.current) {
      try {
        let options = {
          quality: 1,
          base64: true,
          exif: false,
        };

        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
      } catch (error) {
        console.error("Error taking picture:", error.message);
      }
    }
  };

  const predictImage = async () => {
    if (photo) {
      try {
        let formData = new FormData();
        formData.append('file', {
          uri: photo.uri,
          name: 'image.jpg',
          type: 'image/jpeg',
        });

        let response = await fetch('https://us-central1-static-operator-411314.cloudfunctions.net/predict', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let result = await response.json();
        setPrediction(result);
        setError(null); // Reset error state on successful prediction
      } catch (error) {
        console.error('Error predicting image:', error.message);
        setPrediction(null); // Reset prediction on error
        setError('Failed to predict image. Please try again.');
      }
    }
  };

  if (hasCameraPermission === undefined || hasGalleryPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission || !hasGalleryPermission) {
    return (
      <Text>
        Permission for camera or gallery not granted. Please change this in settings.
      </Text>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {photo ? (
        <>
          <Image style={styles.preview} source={{ uri: photo.uri || photo.uri || photo.uri || null }} />
          <TouchableOpacity onPress={predictImage}>
            <Text style={styles.links}>
                Predict
            </Text>
          </TouchableOpacity>
          {error && <Text style={styles.errorText}>{error}</Text>}
          {prediction && (
            <Text style={{fontSize: 19, fontWeight:"bold"}}>Prediction: {prediction.class}</Text>
          )}
          {prediction && (
            <Text style={{fontSize: 19, fontWeight:"bold"}}>Confidence: {prediction.confidence}%</Text>
          )}
          <TouchableOpacity onPress={() => setPhoto(null)}>
            <Ionicons name="trash" size={40} color="black" />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Camera style={styles.camera} ref={cameraRef}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={pickImage}>
              <FontAwesome name="picture-o" size={60} color="white" style={{marginTop:700}} />
              </TouchableOpacity>
              <TouchableOpacity onPress={takePic}>
            <Entypo name="camera" size={60} color="white" style={{marginTop:700}}/>
            </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle-outline" size={60} color="white" style={{ marginTop: 700 }} />
              </TouchableOpacity>
            </View>
          </Camera>
        </>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 16,
    marginLeft: 50,
    gap: 50
  },

  camera: {
    flex: 1,
    width: '100%',
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1,
    marginBottom: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
  },

  links:{
    textAlign: "center",
    fontSize: 20,
    color:"white",
    fontWeight:"bold",
    borderRadius: 99,
    backgroundColor: "#6C63FF",
    height: 35,
    padding: 5,
    width: 120
  },
});