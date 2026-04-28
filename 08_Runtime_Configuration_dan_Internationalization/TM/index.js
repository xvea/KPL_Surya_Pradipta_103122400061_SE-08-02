import 'dotenv/config'

const BASE_API = process.env.BASE_API

async function getRates() {
  const res = await fetch(BASE_API)
  if (!res.ok) {
    throw new Error('Gagal mengambil data API')
  }
  return res.json()
}

const formatIDR = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR'
})

const formatCNH = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'CNY'
})

const formatEUR = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
})

const formatDate = new Intl.DateTimeFormat('id-ID', {
  dateStyle: 'long'
})

function convert(amount, rate) {
  return amount * rate
}

async function main() {
  try {
    const data = await getRates()

    const cnhRate = data.idr.cnh
    const eurRate = data.idr.eur
    const date = formatDate.format(new Date(data.date))

    const amounts = [25000, 50000, 100000]

    for (const amt of amounts) {
      const cnh = convert(amt, cnhRate)
      const eur = convert(amt, eurRate)

      console.log(
        `Kurs ${formatIDR.format(amt)} pada ${date} adalah ${formatCNH.format(cnh)} dan ${formatEUR.format(eur)}`
      )
    }

  } catch (err) {
    console.error('Error:', err.message)
  }
}

main()