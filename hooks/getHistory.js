import * as SecureStore from 'expo-secure-store'

export const getHistory = async () => {
    console.log("getting transactions")
    async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key);
        return result
    }
    try {
        const adminKey = await getValueFor("adminKey")
        const res = await fetch('https://legend.lnbits.com/api/v1/payments', {
            method: 'GET',
            headers: {
                'X-Api-Key': adminKey,
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        const transactionData = data.length > 1 && data.sort((a, b) => new Date(b.time) - new Date(a.time)).map(transaction => ({
            id: transaction.checking_id,
            memo: transaction.memo,
            time: new Date(transaction.time * 1000).toLocaleDateString(),
            amount: transaction.amount* 0.001,
            type: transaction.amount < 0 ? "out" : "in"
        }))

        return transactionData

    } catch (error) {
        console.error(error)
    }
}

