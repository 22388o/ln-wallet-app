import { View, Text, TouchableOpacity, TextInput, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from "react-native";
import { useState } from 'react';
import { useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';
import { styles } from '../components/styles';
import { payInvoice } from "../hooks/payInvoice"

export default function Modal() {
    const [invoice, setInvoice] = useState('');
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('');
    const navigation = useNavigation();

  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
    const isPresented = navigation.canGoBack();

    const onPressPayInvoice = async () => {
      setLoading(true)
      const message = await payInvoice(invoice)
      setTimeout(() => {
      setMessage(message)
      setLoading(false)
    }, 2000)  
    };

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
                    onChangeText={setInvoice}
                    value={invoice} />
                    <View style={styles.container2}>
                        {loading? (
                        <View>
                        <TouchableOpacity
                          style={styles.sendButton}
                          
                        >
                            <Text style={styles.sendButtonText}>Sending</Text>
                            <ActivityIndicator size="small" color="black"/>
                        </TouchableOpacity>
                        </View>):(<View>
                        <TouchableOpacity
                          style={styles.sendButton}
                          onPress={onPressPayInvoice}
                        >
                            <Text style={styles.sendButtonText}>Send</Text>
                            <Feather name="send" size={24} color="black" />
                        </TouchableOpacity>
                          </View>)}
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