import { getValueFor } from "./getKeys"

export const payInvoice = async (invoice) => {
    try {
      console.log("sending payment")
      const adminKey = await getValueFor("adminKey")
      const response = await fetch('https://legend.lnbits.com/api/v1/payments', {
        method: 'POST',
        headers: {
          'X-Api-Key': adminKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          out: true,
          bolt11: invoice,
        })
      });
      const data = await response.json()
      console.log(data)
        const message = "Payment Sent!"
        return message
  }catch (error) {
        const message = "Error sending payment"
        return message
  }
  }