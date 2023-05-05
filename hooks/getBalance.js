export const getBalance = async (user) => {
        console.log("getting wallet details")
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
            console.log("received wallet details")
            return [walletName, walletBalance]
        }catch(error){
            console.error(error)
        }
    }

