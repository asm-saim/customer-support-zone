import { use } from "react";
import Ticket from "../Ticket/Ticket";
import TasksSection from "../tasksSection/TasksSection";

const AllTickets = ({ fetchData, customerTicket, setCustomerTicket }) => {
    const promiseHandled = use(fetchData);



    return (
        <div className="max-w-7xl mx-auto border border-amber-300 grid grid-cols-11 gap-5 ">
            <div className=" col-span-8 border grid grid-cols-2 gap-5  border-amber-300">
                {
                    promiseHandled.map(tickets => <Ticket
                        customerTicket={customerTicket}
                        setCustomerTicket={setCustomerTicket}
                        tickets={tickets}></Ticket>)
                }
            </div>
            <div className=" col-span-3 border border-amber-300">
                <TasksSection customerTicket={customerTicket}></TasksSection>
            </div>

        </div>
    );
};

export default AllTickets;