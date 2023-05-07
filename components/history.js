import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getHistory } from "../hooks/getHistory"
import { useAuth } from "../context/auth"


const History = () => {
    const [ transactions, setTransactions ] = useState([])
    const { user } = useAuth()

    const useGetHistory = async () => {
        const transactionData = await getHistory(user)
        setTransactions(transactionData)
    }

    useEffect(()=>{
        useGetHistory()
        console.log(transactions)
      }, [])

  return (
    <ScrollView>
      <View style={{flexDirection: 'row', backgroundColor: '#eee'}}>
        <Text style={{padding: 10, flex: 1}}></Text>
        <Text style={{padding: 10, flex: 3}}>Memo</Text>
        <Text style={{padding: 10, flex: 1}}>Date</Text>
        <Text style={{padding: 10, flex: 1}}>Amount</Text>
      </View>
      {transactions.length > 1 && transactions.map(row => (
        <View key={row.memo} style={{flexDirection: 'row', backgroundColor: '#fff'}}>
          <Text style={{padding: 10, flex: 1}}></Text>
          <Text style={{padding: 10, flex: 2}}>{row.memo}</Text>
          <Text style={{padding: 10, flex: 2}}>{row.time}</Text>
          <Text style={{padding: 10, flex: 1}}>{row.amount}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default History
