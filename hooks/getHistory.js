export const getHistory = async (user) => {
    console.log("getting transactions")
    try {
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
            time: new Date(transaction.time * 1000).toLocaleString(),
            amount: transaction.amount* 0.001,
            type: transaction.amount < 0 ? "out" : "in"
        }))

        return transactionData

    } catch (error) {
        console.error(error)
    }
}

