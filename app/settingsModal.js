import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, TextInput, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Stack } from "expo-router";
import { useAuth } from "../context/auth";
import { useState } from 'react'


export default function SignIn() {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [adminKey, setAdminKey] = useState("");

  const handleSignUp = () => {
    signUp(email.toLocaleLowerCase(), password, profilePhoto, apiKey, adminKey);
  }


return (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.modalContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
        <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: "#f8fafc" },
          headerTitle: "Settings",
          headerShadowVisible: false, 
          }} 
          />
        <View>
          <View style={styles.buttonContainer}>
            <TextInput 
              style={styles.textInput} 
              value={email}
              placeholder="Email"
              placeholderTextColor="black"
              onChangeText={setEmail}
            />
            <TextInput 
              style={styles.textInput} 
              secureTextEntry={true}
              value={password}
              placeholder="Password"
              placeholderTextColor="black"
              onChangeText={setPassword}
            />
            <TextInput 
              style={styles.textInput} 
              value={profilePhoto}
              placeholder="Profile photo url"
              placeholderTextColor="black"
              onChangeText={setProfilePhoto}
            />
            <TextInput 
              style={styles.textInput} 
              secureTextEntry={true}
              value={apiKey}
              placeholder="LNbits API Key"
              placeholderTextColor="black"
              onChangeText={setApiKey}
            />
            <TextInput 
              style={styles.textInput} 
              secureTextEntry={true}
              value={adminKey}
              placeholder="LNbits Admin Key"
              placeholderTextColor="black"
              onChangeText={setAdminKey}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.button}
              onPress={handleSignUp}
            >
              <Text style={styles.buttonText}>
                Update
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.infoText}>
                Disclaimer. Updating your profile will update all fields, even those left empty. Make sure to enter in the values you would like to keep and update the ones that you want to change before submitting.
              </Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f8fafc'
},
buttonContainer: {
  justifyContent: 'center',
  alignItems: 'center',
},
button: {
  alignItems: 'center',
  backgroundColor: '#e2e8f0',
  padding: 10,
  borderRadius: 10,
  width: 120,
},
text: {
  fontSize: 24,
},
buttonText: {
  fontSize: 18,
},
infoText: {
  margin: 8,
  textAlign: 'center',
  color: 'black',
  fontSize: 18,
},
textInput:{
  height: 40,
  margin: 10,
  borderWidth: 1,
  borderColor: 'black',
  backgroundColor: "white",
  borderRadius: 10,
  color: 'black',
  width: 240,
  padding: 10,
  fontSize: 20,
  alignSelf: 'center',
  textAlign: 'center',
},
textInputLabel: {
  color: 'black',
  fontSize: 14,
},
});