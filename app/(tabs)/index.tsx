import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";

import ImageViewer from "@/components/ImageViewer";
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require("@/assets/images/background-image.png");


export default function StickerAppScreen() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not pick an image.');
    }
  };

  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo " theme="primary" onPress={pickImageAsync} />
        <Button label="Use this photo " theme="" onPress/>
      </View>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

});
