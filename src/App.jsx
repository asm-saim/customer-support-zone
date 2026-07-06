import { useState } from 'react'
import './App.css'
import AllTickets from './components/AllTickets/AllTickets'
import BannerSection from './components/BannerSection/BannerSection'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer'

// fetch data from the api:
const fetchData = fetch('/tickets.json').then(res => res.json())

function App() {

  // state for extract data from card:
  const [customerTicket, setCustomerTicket] = useState([])
  const [resolvedTicket, setResolvedTicket] = useState([])

  // for inProgress section
  // console.log(customerTicket.length)

  //function for resolved section:
  const handleResolved = (r) => {
    // console.log("hae", r)
    const filteredData = customerTicket.filter(ticket => ticket.id !== r.id)
    setCustomerTicket(filteredData)
    setResolvedTicket((prev) => [...prev, r])
  }

  return (
    <>
      <Navbar></Navbar>
      <BannerSection resolvedTicket={resolvedTicket} customerTicket={customerTicket}></BannerSection>
      <div className='max-w-7xl mx-auto grid grid-cols-11 gap-5 my-2 font-bold text-2xl'>
        <h1 className='col-span-8'>Customer Tickets</h1>
        <h1 className='col-span-3'>Tasks Status</h1>


      </div>
      <AllTickets customerTicket={customerTicket}
        setCustomerTicket={setCustomerTicket} fetchData={fetchData}
        handleResolved={handleResolved}
        resolvedTicket={resolvedTicket}
      ></AllTickets>

      <Footer></Footer>

      <ToastContainer position="top-center" autoClose={3000} />

    </>
  )
}

export default App
