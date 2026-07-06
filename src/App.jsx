import { useState } from 'react'
import './App.css'
import AllTickets from './components/AllTickets/AllTickets'
import BannerSection from './components/BannerSection/BannerSection'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';

// fetch data from the api:
const fetchData = fetch('/tickets.json').then(res => res.json())

function App() {

  // state for extract data from card:
  const [customerTicket, setCustomerTicket] = useState([])
  console.log(customerTicket)

  // state for inprogress section
  // const [inProgress, setInProgress] = useState(0)
  console.log(customerTicket.length)

  return (
    <>
      <Navbar></Navbar>
      <BannerSection customerTicket={customerTicket}></BannerSection>
      <div className='max-w-7xl mx-auto  flex justify-between font-bold text-2xl my-2'>
        <h1>Customer Tickets</h1>
        <h1>Tasks Status</h1>
      </div>
      <AllTickets customerTicket={customerTicket}
        setCustomerTicket={setCustomerTicket} fetchData={fetchData}
      ></AllTickets>

      <ToastContainer position="top-center" autoClose={3000} />

    </>
  )
}

export default App
