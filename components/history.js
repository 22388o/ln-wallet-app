import { View, Text, ScrollView, RefreshControl, ActivityIndicator  } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { getHistory } from "../hooks/getHistory"
import { useAuth } from "../context/auth"
import { Feather } from '@expo/vector-icons';



const History = () => {
    const [refreshing, setRefreshing] = useState(false)
    const [ transactions, setTransactions ] = useState([])
    const { user } = useAuth()

    const onRefresh = useCallback(() => {
      setRefreshing(true)
      useGetHistory()
      setTimeout(() => {
        setRefreshing(false)
      }, 2000)
    }, [])

    const useGetHistory = async () => {
        const transactionData = await getHistory(user)
        setTimeout(() => {
          setTransactions(transactionData)
        }, 2000)   
        
    }

    useEffect(()=>{
        useGetHistory()
      }, [])


      
  return (
<View style={{marginHorizontal: 25}}>
      <View style={{flexDirection: 'row', backgroundColor: '#DDDDDD', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
        <Text style={{padding: 10, flex: 1}}></Text>
        <Text style={{padding: 10, flex: 3, textAlign: "center"}}>Memo</Text>
        <Text style={{padding: 10, flex: 2}}>Date</Text>
        <Text style={{padding: 10, flex: 1}}>Sats</Text>
      </View>
          <View style={{height: 200}}>
          <ScrollView showsVerticalScrollIndicator={false} style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#fff'}}
          refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {transactions && transactions.map(row => (
        <View key={row.id} style={{flexDirection: 'row', backgroundColor: '#fff'}}>
          <Text style={{padding: 10, flex: 1}}>
            {row.type == "in"? <Feather name="arrow-down-left" size={24} color="black" />: <Feather name="arrow-up-right" size={24} color="black" />}
          </Text>
          <Text style={{padding: 10, flex: 3, textAlign: "center"}}>{row.memo}</Text>
          <Text style={{padding: 10, flex: 2}}>{row.time}</Text>
          <Text style={{padding: 10, flex: 2, textAlign: "center"}}>{row.amount}</Text>
        </View>
      ))}
    </ScrollView>
    </View>
    </View>
  )
}

export default History
