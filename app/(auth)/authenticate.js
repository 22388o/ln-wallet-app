import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {

  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}
              onPress={() => {
              router.push("/sign-in");
              }}>
                <Text style={styles.text}>
                  Sign In
                </Text>
              </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
              onPress={() => {
              router.push("/sign-up");
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