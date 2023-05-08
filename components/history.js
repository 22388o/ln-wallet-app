import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getHistory } from "../hooks/getHistory"
import { useAuth } from "../context/auth"
import { Feather } from '@expo/vector-icons';


const History = () => {
    const [ transactions, setTransactions ] = useState([])
    const { user } = useAuth()

    const useGetHistory = async () => {
        const transactionData = await getHistory(user)
        console.log("wallet page TransactionData: ", transactionData)
        setTransactions(transactionData)
    }

    useEffect(()=>{
        useGetHistory()
        console.log("transactions", transactions)
      }, [])

  return (
<View style={{marginHorizontal: 25}}>
      <View style={{flexDirection: 'row', backgroundColor: '#DDDDDD', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
        <Text style={{padding: 10, flex: 1}}></Text>
        <Text style={{padding: 10, flex: 2}}>Memo</Text>
        <Text style={{padding: 10, flex: 2}}>Date</Text>
        <Text style={{padding: 10, flex: 1}}>Sats</Text>
      </View>
          <View style={{height: 180}}>
          <ScrollView showsVerticalScrollIndicator={false} style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#fff'}}>
      {transactions && transactions.map(row => (
        <View key={row.memo} style={{flexDirection: 'row', backgroundColor: '#fff'}}>
          <Text style={{padding: 10, flex: 1}}>
            {row.type == "in"? <Feather name="arrow-down-left" size={24} color="black" />: <Feather name="arrow-up-right" size={24} color="black" />}
          </Text>
          <Text style={{padding: 10, flex: 2, textAlign: "center"}}>{row.memo}</Text>
          <Text style={{padding: 10, flex: 2}}>{row.time}</Text>
          <Text style={{padding: 10, flex: 1, textAlign: "center"}}>{row.amount}</Text>
        </View>
      ))}
    </ScrollView>
    </View>
    </View>
  )
}

export default History
