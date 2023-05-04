import React, { useState, useEffect } from "react"
import { useAuth } from "../context/auth"

export default function useGetBalance(refreshing){
    const [balance, setBalance] = useState();
    const [name, setName] = useState();
    const { user } = useAuth();

useEffect(() =>{
    const getBalance = async () => {
        console.log("getBalance called")
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
            console.log("getting wallet details")
        }catch(error){
            console.error(error)
        }}

        getBalance()
}, [refreshing])

    return [ name, balance ]
}