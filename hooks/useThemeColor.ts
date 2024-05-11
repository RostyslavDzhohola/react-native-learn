/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/Colors';

/**
 * Custom hook to get the theme-specific color value.
 * 
 * This hook provides a way to access color values specific to the current theme (light or dark).
 * It first checks if a color override is provided in the props for the current theme, and if not,
 * it falls back to the default color defined in the Colors constants.
 *
 * @param {object} props - An object containing optional 'light' and 'dark' properties with color values.
 * @param {string} colorName - The name of the color key in the Colors constants.
 * @returns {string} The color value according to the current theme and specified color name.
 */
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  // Determine the current theme using the useColorScheme hook, defaulting to 'light' if undefined.
  const theme = useColorScheme() ?? 'light';
  
  // Attempt to retrieve a color override from props based on the current theme.
  const colorFromProps = props[theme];

  // Return the color from props if available; otherwise, use the default color from the Colors constants.
  return colorFromProps ?? Colors[theme][colorName];
}
