import { useState } from 'react'
import './App.css'
import AllTickets from './components/AllTickets/AllTickets'
import BannerSection from './components/BannerSection/BannerSection'
import Navbar from './components/Navbar/Navbar'

// fetch data from the api:
const fetchData = fetch('/public/tickets.json').then(res => res.json())

function App() {

  // take data from card:
  const [customerTicket, setCustomerTicket] = useState([])
  console.log(customerTicket)

  return (
    <>
      <Navbar></Navbar>
      <BannerSection></BannerSection>
      <div className='max-w-7xl mx-auto  flex justify-between font-bold text-xl my-2'>
        <h1>Customer Tickets</h1>
        <h1>Tasks Status</h1>
      </div>
      <AllTickets customerTicket={customerTicket}
        setCustomerTicket={setCustomerTicket} fetchData={fetchData}></AllTickets>


    </>
  )
}

export default App
