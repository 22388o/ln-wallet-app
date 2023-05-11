import * as SecureStore from 'expo-secure-store'

export const getBalance = async () => {
    async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key);
        return result
    }

        try{
            const apiKey = await getValueFor("apiKey")
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
            console.log("received wallet details")
            return [walletName, walletBalance]
        }catch(error){
            console.error(error)
        }


    }

