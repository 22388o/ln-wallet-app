import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Image, TouchableOpacity, Modal, TextInput, SafeAreaView } from 'react-native';
import { styles } from '../components/styles';
import * as Clipboard from 'expo-clipboard';
import { Feather } from '@expo/vector-icons';
import { useAuth } from "../context/auth"

export default function Wallet() {
  const [invoice, setInvoice] = useState();
  const [balance, setBalance] = useState();
  const [name, setName] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [text, onChangeText] = useState('');
  const [invoiceText, onChangeInvoiceText] = useState('');
  const [message, setMessage] = useState('');
  const { user } = useAuth();

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

  const sendPayment = async () => {
    setModalVisible(true)
  }

  const openInvoiceModal = async () => {
    setModal2Visible(true)
  }

  const send = async () => {
    
    try {
      if(text !== ''){
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
      setMessage("Payment Sent!")
    }
    setMessage("Invoice Missing!")
  }catch (error) {
      setMessage("Error Sending Payment!")
      console.error(error);
  }
    
    getBalance()
  }

  const getBalance = async () => {
    try{
      const res = await fetch('https://legend.lnbits.com/api/v1/wallet', {
        method: 'GET',
        headers: {
            'X-Api-Key': user.apiKey,
            'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      const walletName = data.name
      const walletBalance = Math.floor(data.balance*0.001)
      setName(walletName)
      setBalance(walletBalance)
    } catch(error){
        console.error(error)
    }}

  const closeModal = () =>{
      setMessage('')
      setModalVisible(!modalVisible)
      getBalance()
    }
  const closeModal2 = () =>{
      setModal2Visible(!modal2Visible)
      onChangeInvoiceText('')
      getBalance()
    }

  useEffect(() =>{
      getBalance()
    }, [])


  return (
    <SafeAreaView style={styles.container}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.modal}>
                <SafeAreaView>
                  <Text style={styles.header}>SEND SATS</Text>
                  <Text style={styles.subheadline}>Enter Invoice</Text>
                  <TextInput 
                  style={styles.textInputAmount}
                  onChangeText={onChangeText}
                  value={text} />
                  <View style={styles.container2}>
                    <TouchableOpacity
                    style={styles.sendButton}
                    onPress={send}>
                    <Text style={styles.sendButtonText}>Send</Text>
                    <Feather name="send" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.Invoicebuttons}
                    onPress={closeModal}>
                    <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.balance}>
                    {message}
                    </Text>
                </SafeAreaView>
                </View>
              </Modal>
        <View style={styles.headerContainer}>
        <Text style={styles.header}>{name}</Text>
        <Text style={styles.balance}>{balance} sats</Text>
        <Image style={styles.logo} source={require('../assets/retriever-square.jpg')} />          
        <View style={styles.container2}>
                <TouchableOpacity
                  style={styles.sendButton}
                  onPress={openInvoiceModal}>
                  <Text style={styles.sendButtonText}>Recieve</Text>
                  <Feather name="arrow-down-left" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sendButton}
                  onPress={sendPayment}>
                  <Text style={styles.sendButtonText}>Send</Text>
                  <Feather name="send" size={24} color="black" />
                </TouchableOpacity>
          </View>
        </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modal2Visible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModal2Visible(!modal2Visible);
                }}>
                <View style={styles.modal}>
                <SafeAreaView>
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
                    onPress={closeModal2}>
                    <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                        
            </View>
            </> : <>
                  <Text style={styles.subheadline}>Enter Amount</Text>
                  <TextInput 
                  style={styles.textInputAmount}
                  onChangeText={onChangeInvoiceText}
                  value={invoiceText} />

                  <View style={styles.container2}>
                    <TouchableOpacity
                    style={styles.Invoicebuttons}
                    onPress={generateInvoice}>
                    <Text style={styles.buttonText}>Create Invoice</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.Invoicebuttons}
                    onPress={closeModal2}>
                    <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                    </View>         
                </>
              } 
              </SafeAreaView>
              </View> 
              </Modal>
    </SafeAreaView>
  );
}
