import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { useAuth } from "../../context/auth";

export default function SignIn() {
  const { signIn } = useAuth();

return (
  <SafeAreaView style={styles.container}>
    <Stack.Screen 
      options={{
        headerStyle: { backgroundColor: "black" },
        headerTitle: "",
        headerShadowVisible: false, 
      }} 
    />
    <View>
      <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}
            onPress={() => signIn()
            }>
              <Text style={styles.text}>
                Sign In
              </Text>
            </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}
            onPress={() => {
            router.push("/(auth)/sign-up");
            }}>
              <Text style={styles.text}>
                Sign Up
              </Text>
            </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
)
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black'
},
buttonContainer: {
  justifyContent: 'center',
  height: 100
},
button: {
  alignItems: 'center',
  backgroundColor: '#DDDDDD',
  padding: 10,
  borderRadius: 10,
  width: 120,
},
text: {
  fontSize: 24,
},
countContainer: {
  alignItems: 'center',
  padding: 10,
},
});