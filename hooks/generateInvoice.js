import { getValueFor } from "./getKeys"

export const generateInvoice = async (invoiceAmount, invoiceMemo) => {
  try {
    console.log("generating invoice")
    const apiKey = await getValueFor("apiKey")
    const res = await fetch(
      "https://legend.lnbits.com/api/v1/payments", {
      method: "POST",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        out: false,
        amount: invoiceAmount,
        memo: invoiceMemo,
      })
    }
    )
    const data = await res.json()
    console.log(data)
    const invoiceHash = data.payment_request
    return invoiceHash
  } catch (error) {
    console.error(error)
  }
}