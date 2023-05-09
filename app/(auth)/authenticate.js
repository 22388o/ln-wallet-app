import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
                </Text><MaterialCommunityIcons name="login" size={20} color="black" />
              </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
              onPress={() => {
              router.push("/sign-up");
              }}>
                <Text style={styles.text}>
                  Sign Up
                </Text><Feather name="user-plus" size={20} color="black" />
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
    backgroundColor: "#f1f1f1"
  },
  buttonContainer: {
    justifyContent: 'center',
    height: 100
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: 'center',
    backgroundColor: '#a8a8a8',
    padding: 10,
    borderRadius: 10,
    width: 120,
  },
  text: {
    fontSize: 20,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});