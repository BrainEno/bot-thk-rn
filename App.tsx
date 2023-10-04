import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/gql/client";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  ColorSchemeProvider,
  LoadAssets,
  darkTheme,
  theme,
  useColorScheme,
} from "./src/components/theme";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./src/Routes";
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import ConversationView from "./src/views/ConversationView";
import HomeView from "./src/views/HomeView";
import { View, Text } from "react-native";

const fonts = {};
const assets: number[] = [];
const Stack = createStackNavigator<Routes>();

const AppNavigator = () => {
  const { colorScheme } = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : theme}>
      <Stack.Navigator initialRouteName="Conversation">
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={HomeView}
            options={{ title: "Home", headerShown: false }}
          />
          <Stack.Screen
            name="Conversation"
            component={ConversationView}
            options={{
              title: "Conversation",
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </ThemeProvider>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    SFProDisplayBold: require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    SFProTextRegular: require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ApolloProvider client={client}>
        <ColorSchemeProvider>
          <LoadAssets fonts={fonts} assets={assets}>
            <AppNavigator />
          </LoadAssets>
        </ColorSchemeProvider>
      </ApolloProvider>
    </GestureHandlerRootView>
  );
}
