import { View, Text, TouchableOpacity, TextInput, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from "react-native";
import { useState } from 'react';
import { useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';
import { styles } from '../components/styles';
// import useGetBalance from "../hooks/useGetBalance"
import { useAuth } from "../context/auth"



export default function Modal() {
    const [text, onChangeText] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation();
    const router = useRouter()
    const { user } = useAuth();

  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
    const isPresented = navigation.canGoBack();

    const send = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://legend.lnbits.com/api/v1/payments', {
        method: 'POST',
        headers: {
          'X-Api-Key': user.adminKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          out: true,
          bolt11: text,
        })
      });
      setTimeout(() => {
        console.log(response)
        setLoading(false)
        setMessage("Payment Sent!")
      }, 2000)   
  }catch (error) {
      setTimeout(() => {
        setLoading(false)
        setMessage("Error Sending Payment!")
        console.error(error);
      }, 2000)  
  }
  }


    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.modalContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modal}>
        {isPresented && 
            <>
            <View>
                <Text style={styles.header}>SEND SATS</Text>
                  <Text style={styles.subheadline}>Enter Invoice</Text>
                  <TextInput
                    style={styles.textInputAmount} 
                    onChangeText={onChangeText}
                    value={text} />
                    <View style={styles.container2}>
                        {loading? (
                        <View>
                        <TouchableOpacity
                          style={styles.sendButton}
                          onPress={send}
                        >
                            <Text style={styles.sendButtonText}>Sending</Text>
                            <ActivityIndicator size="small" color="black"/>
                        </TouchableOpacity>
                        </View>):(<View>
                        <TouchableOpacity
                          style={styles.sendButton}
                          onPress={send}
                        >
                            <Text style={styles.sendButtonText}>Send</Text>
                            <Feather name="send" size={24} color="black" />
                        </TouchableOpacity>
                          </View>)}
                        <TouchableOpacity
                            style={styles.Invoicebuttons}
                            onPress={() => {
                            router.push("../")
                            }}
                        >
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                  <Text style={styles.balance}>
                      {message}
                </Text>
            </View>
            </>
          }
          <StatusBar style="light" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}