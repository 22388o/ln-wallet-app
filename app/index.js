// import copy from 'copy-to-clipboard';
import { useState, useEffect } from 'react';
import { Text, View, Button, Image } from 'react-native';
import { styles } from '../components/styles';
import Constants from 'expo-constants';

const apiKey = Constants.manifest.extra.apiKey;

// Use the apiKey variable in your fetch requests


export default function Home() {
  const [invoice, setInvoice] = useState();
  const [balance, setBalance] = useState();

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
        "amount": "50",
        "memo": "test"
    })
  })
  const data = await res.json()
  const invoiceHash = data.payment_request
  setInvoice(invoiceHash)
  }catch(error){
    console.error(error)
  }}

  useEffect(() =>{
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
        console.log(data)
        const walletBalance = Math.floor(data.balance*0.001)
        setBalance(walletBalance)
        }catch(error){
          console.error(error)
        }}

    getBalance()
  }, [])

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/retriever.png')} />
      <Text style={styles.paragraph}>@btcretriever</Text>
      <Text style={styles.subheadline}></Text>
      <Text style={styles.balance}>⚡{balance}</Text>
      <Text style={styles.invoice}>
      {invoice}
      </Text>
      <View style={styles.container2}>
      <Button
        onPress={generateInvoice}
        title="BOLT11 INVOICE"
        color="blue"
      />
      </View>
    </View>
  );
}
