import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useAuth } from "../context/auth";

export default function Home() {
  const { signOut } = useAuth();
  const router = useRouter()

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
              onPress={() => {
              router.push("/wallet");
              }}>
                <Text style={styles.text}>
                  Wallet
                </Text>
              </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}
              onPress={() => signOut()}>
                <Text style={styles.text}>
                  Sign Out
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