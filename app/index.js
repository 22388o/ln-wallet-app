import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
      {/* <Text>  
        <Link href="/wallet">
          Wallet
        </Link>
      </Text> */}
            <TouchableOpacity style={styles.button}
            onPress={() => {
            router.push("/wallet");
            }}>
              <Text style={styles.text}>
                Wallet
              </Text>
            </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});