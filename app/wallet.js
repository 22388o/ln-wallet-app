import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Image, TouchableOpacity, Modal, TextInput, SafeAreaView } from 'react-native';
import retriever from "../assets/retriever.svg"
import { styles } from '../components/styles';
import Constants from 'expo-constants';
import * as Clipboard from 'expo-clipboard';
import { Link, Stack, useRouter } from "expo-router";


const apiKey = Constants.manifest.extra.apiKey;
const adminKey = Constants.manifest.extra.adminKey;

export default function Wallet() {
  const [invoice, setInvoice] = useState();
  const [balance, setBalance] = useState();
  const [name, setName] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [text, onChangeText] = useState('');
  const [invoiceText, onChangeInvoiceText] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(invoice);
    alert('COPIED!')
  };

  const generateInvoice = async () => {
    try{
      const res = await fetch('https://legend.lnbits.com/api/v1/payments', {
        method: 'POST',
        headers: {
            'X-Api-Key': apiKey,
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
      const response = await fetch('https://legend.lnbits.com/api/v1/payments', {
        method: 'POST',
        headers: {
          'X-Api-Key': adminKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          out: true,
          bolt11: text,
        })
      });
    } catch (error) {
      console.error(error);
  }
    setMessage("Payment Sent!")
    getBalance()
  }

  const getBalance = async () => {
    try{
      const res = await fetch('https://legend.lnbits.com/api/v1/wallet', {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
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
      setModalVisible(!modalVisible)
      getBalance()
    }
  const closeModal2 = () =>{
      setModal2Visible(!modal2Visible)
      setInvoice(!invoice)
      getBalance()
    }

  useEffect(() =>{
      getBalance()
    }, [])


  return (
    <SafeAreaView style={styles.container}>
            <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTitle: "",
          headerShadowVisible: false, 
        }} 
      />
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
                  style={styles.textInput}
                  onChangeText={onChangeText}
                  value={text} />
                  <View style={styles.container2}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={send}>
                    <Text style={styles.buttonText}>Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
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
                  style={styles.button}
                  onPress={openInvoiceModal}>
                  <Text style={styles.buttonText}>Recieve</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={sendPayment}>
                  <Text style={styles.buttonText}>Send</Text>
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
                  {invoice ? <>
                  <Text style={styles.subheadline}>{invoiceText} Sat Invoice Created</Text>
                    <Text style={styles.invoice}>
                    {invoice}
                    </Text>
                    <View style={styles.container2}>
            <TouchableOpacity 
              style={styles.Invoicebuttons}
              onPress={copyToClipboard}>
              <Text style={styles.buttonText}>Copy</Text>
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
