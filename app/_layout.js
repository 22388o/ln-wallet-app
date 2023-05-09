import { Stack } from "expo-router";
import { Provider } from "../context/auth";
import { StatusBar } from "expo-status-bar";



export default function Root() {
  return (
    // Setup the auth context and render our layout inside of it.
    <Provider>
      <StatusBar style="dark" />
        <Stack
          screenOptions={{
          headerStyle: { backgroundColor: "white" },
          headerTitle: "",
          headerShadowVisible: false, 
        }} 
      >
        
        <Stack.Screen
        name="sendModal"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
          headerTitle: "",
          headerTintColor: 'white',
          headerStyle: { backgroundColor: "white" },
        }}
      />
        <Stack.Screen
        name="receiveModal"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
          headerTitle: "",
          headerTintColor: 'white',
          headerStyle: { backgroundColor: "white" },
        }}
      />
      <Stack.Screen
        name="settingsModal"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
          headerTitle: "",
          headerTintColor: 'black',
          headerStyle: { backgroundColor: "white" },
        }}
      />
    </Stack>
    </Provider>
  );
}