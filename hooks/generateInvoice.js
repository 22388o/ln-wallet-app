export const generateInvoice = async (user, invoiceText) => {
  try {
    const res = await fetch(
      "https://legend.lnbits.com/api/v1/payments", {
      method: "POST",
      headers: {
        "X-Api-Key": user.apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        out: false,
        amount: invoiceText,
        memo: "test",
      })
    }
    )
    const data = await res.json()
    const invoiceHash = data.payment_request
    return invoiceHash
  } catch (error) {
    console.error(error)
  }
}