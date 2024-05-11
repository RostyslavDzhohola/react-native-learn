import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useState } from "react";

import ImageViewer from "@/components/ImageViewer";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";

import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require("@/assets/images/background-image.png");


export default function StickerAppScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAppOptions, setShowAppOptions] = useState(false);

  const onReset = () => {
    setShowAppOptions(false);
  }

  const onAddSticker = () => {
    console.log('Adding sticker');
    alert('Adding sticker');
  }

  const onSaveImageAsync = () => {
    console.log('Saving image');
    alert('Saving image');
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not pick an image.');
    }
  };

  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer 
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      { showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
        <Button label="Choose a photo " theme="primary" onPress={pickImageAsync} />
        <Button label="Use this photo " theme="" onPress={() => setShowAppOptions(true)}/>
      </View>
      )}
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  }

});
