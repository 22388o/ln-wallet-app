import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from 'react';
import { useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as Clipboard from 'expo-clipboard';
import { Feather } from '@expo/vector-icons';
import { styles } from '../components/styles';
import useGetBalance from "../hooks/useGetBalance"
import { useAuth } from "../context/auth"


export default function Modal() {
    const [invoice, setInvoice] = useState();
    const [invoiceText, onChangeInvoiceText] = useState('');
    const navigation = useNavigation();
    const router = useRouter()
    const { user } = useAuth();

  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
    const isPresented = navigation.canGoBack();

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(invoice);
    alert('COPIED!')
  };

  const generateInvoice = async () => {
    try{
      const res = await fetch('https://legend.lnbits.com/api/v1/payments', {
        method: 'POST',
        headers: {
            'X-Api-Key': user.apiKey ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "out": false,
            "amount": invoiceText,
            "memo": "test"
        })
    })
      const data = await res.json()
      const invoiceHash = data.payment_request
      setInvoice(invoiceHash)
    }catch(error){
      console.error(error)
    }}


    return (
        <View style={styles.modal}>
        {isPresented && 
            <>
            <View>
              <Text style={styles.header}>RECEIVE SATS</Text>
            {invoice && invoice !== " " ? <>
              <Text style={styles.subheadline}>{invoiceText} Sat Invoice Created</Text>
              <Text style={styles.invoice}>
                {invoice}
              </Text>
              <View style={styles.container2}>
                <TouchableOpacity 
                style={styles.copyButton}
                onPress={copyToClipboard}>
                <Text style={styles.copyButtonText}>Copy
                </Text><Feather name="copy" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.Invoicebuttons}
                  onPress={() => {
                    router.push("../")
                    }}>
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </> : <>
              <Text style={styles.subheadline}>Enter Amount</Text>
              <TextInput
                style={styles.textInputAmount} 
                onChangeText={onChangeInvoiceText}
                value={invoiceText} 
              />
              <View style={styles.container2}>
                <TouchableOpacity
                  style={styles.Invoicebuttons}
                  onPress={generateInvoice}
                >
                <Text style={styles.sendButtonText}>Create Invoice</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.Invoicebuttons}
                  onPress={() => {
                  router.push("../")
                  }}
                >
                <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
                </View>
            </>
            }
            </View>
            </>
          }
          <StatusBar style="light" />
        </View>
  );
}