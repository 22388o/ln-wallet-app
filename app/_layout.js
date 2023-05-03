import { Stack } from "expo-router";
import { Provider } from "../context/auth";

export default function Root() {
  return (
    // Setup the auth context and render our layout inside of it.
    <Provider>
        <Stack
          screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTitle: "",
          headerShadowVisible: false, 
        }} 
      />
    </Provider>
  );
}