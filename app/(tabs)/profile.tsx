import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';


export default function ProfileScreen() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <Text style={[styles.profileText, { color: Colors[colorScheme ?? 'light'].text }]}>Profile Page</Text>
      <View style={[styles.profileContainer, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
        <Link href="/" style={{ alignItems: 'center', backgroundColor: '#841584', borderRadius: 50 }}>
          <Text style={[styles.profileText, { color: Colors[colorScheme ?? 'light'].text }]}>
            <MaterialIcons name="home" size={27} color={Colors[colorScheme ?? 'light'].text} />
          </Text>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    padding: 20,
    borderRadius: 10,
  },
  profileText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
