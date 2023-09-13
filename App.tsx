// App.tsx
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "~/screens/LoginScreen";
import { Routes } from "~/navigation/Routes";
import { TermsScreen } from "~/screens/TermsScreen";
import { StarshipFeedScreen } from "~/screens/StarshipFeedScreen";

//import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={Routes.LOGIN_SCREEN}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
            <Stack.Screen
              name={Routes.STARSHIP_FEED_SCREEN}
              component={StarshipFeedScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}

export default App;

//export { default } from "./.storybook";
