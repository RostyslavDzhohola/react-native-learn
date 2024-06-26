import { View, Image } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';



export default function EmojiSticker({imageSize, stickerSource }) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scaleImage = useSharedValue(imageSize);

  const doubleTap = Gesture.Tap().numberOfTaps(2).onStart(() => {
    if (scaleImage.value === imageSize) {
      scaleImage.value = imageSize * 2; // Scale up
    } else {
      scaleImage.value = imageSize; // Scale down
    }
  })

  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
    // console.log(translateX.value, translateY.value)
  })

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ]
    }
  })

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[{ top: -350}, containerStyle]} >
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            resizeMode='contain'
            style={imageStyle}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}

