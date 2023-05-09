import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useAuth } from "../context/auth";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {
  const { signOut } = useAuth();
  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}
              onPress={() => {
              router.push("/wallet");
              }}>
                <Text style={styles.text}>
                  Wallet
                </Text>
                <Ionicons name="ios-wallet-outline" size={20} color="black" />
              </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}
              onPress={() => signOut()}>
                <Text style={styles.text}>
                  Sign Out
                </Text>
                <MaterialIcons name="logout" size={20} color="black" />
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
    backgroundColor: '#f1f1f1'
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
    width: 140,
  },
  text: {
    fontSize: 20,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});