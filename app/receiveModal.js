import { View, Text, TouchableOpacity, TextInput, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native"
import { useState } from 'react'
import { useNavigation, useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"
import * as Clipboard from 'expo-clipboard'
import { Feather } from '@expo/vector-icons'
import { styles } from '../components/styles'
import { generateInvoice } from "../hooks/generateInvoice"

export default function Modal() {
    const [invoice, setInvoice] = useState()
    const [invoiceAmount, setInvoiceAmount] = useState('')
    const [invoiceMemo, setInvoiceMemo] = useState('')
    const navigation = useNavigation()
    const [copied, setCopied] = useState(false)

  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = navigation.canGoBack()

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(invoice)
    setCopied(true)
    
  };

  const onPressGenerateInvoice = async () => {
    const invoiceHash = await generateInvoice(invoiceAmount, invoiceMemo)
    setInvoice(invoiceHash)
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
              <Text style={styles.header}>RECEIVE SATS</Text>
            {invoice && invoice !== " " ? <>
              <Text style={styles.subheadline}>{invoiceAmount} Sat Invoice Created for {invoiceMemo}</Text>
              <Text style={styles.invoice}>
                {invoice}
              </Text>
              <View style={styles.container2}>
                {copied?
                <>
                <TouchableOpacity 
                style={styles.copyButton}
                >
                <Text style={styles.copyButtonText}>Copied!
                </Text><Feather name="copy" size={24} color="black" />
                </TouchableOpacity>
                </>
                :
                <>
                <TouchableOpacity 
                style={styles.copyButton}
                onPress={copyToClipboard}>
                <Text style={styles.copyButtonText}>Copy
                </Text><Feather name="copy" size={24} color="black" />
                </TouchableOpacity>
                </>}
              </View>
            </> : <>
              <Text style={styles.subheadline}>Amount</Text>
              <TextInput
                style={styles.textInputAmount} 
                onChangeText={setInvoiceAmount}
                value={invoiceAmount} 
              />
              <Text style={styles.subheadline}>Memo</Text>
              <TextInput
                style={styles.textInputAmount} 
                onChangeText={setInvoiceMemo}
                value={invoiceMemo} 
              />
              <View style={styles.container2}>
                <TouchableOpacity
                  style={styles.Invoicebuttons}
                  onPress={onPressGenerateInvoice}
                >
                <Text style={styles.sendButtonText}>Create Invoice</Text>
                </TouchableOpacity>
                </View>
            </>
            }
            </View>
            </>
          }
          <StatusBar style="light" />
        </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}