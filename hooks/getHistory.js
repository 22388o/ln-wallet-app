export const getHistory = async (user) => {
    try{
        const res = await fetch('https://legend.lnbits.com/api/v1/payments', {
            method: 'GET',
            headers: {
                'X-Api-Key': user.adminKey,
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        const transactionData = data.length > 1 && data.map(transaction => ({
            memo: transaction.memo,
            time: transaction.time,
            amount: transaction.amount
        }))

        return transactionData
        
    }catch(error){
        console.error(error)
    }

}
