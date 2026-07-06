import { use } from "react";
import Ticket from "../Ticket/Ticket";
import TasksSection from "../tasksSection/TasksSection";

const AllTickets = ({ fetchData, customerTicket, setCustomerTicket,
    handleResolved, resolvedTicket }) => {
    const promiseHandled = use(fetchData);

    // remove tickets that are already resolved
    const visibleTickets = promiseHandled.filter(
        ticket => !resolvedTicket.some(resolved => resolved.id === ticket.id)
    )

    return (
        <div className="max-w-7xl mx-auto mb-10 grid grid-cols-11 gap-5 ">
            <div className=" col-span-8 grid grid-cols-2 gap-5">
                {
                    visibleTickets.map(tickets => <Ticket
                        key={tickets.id}
                        customerTicket={customerTicket}
                        setCustomerTicket={setCustomerTicket}
                        tickets={tickets}
                    ></Ticket>)
                }
            </div>
            <div className=" col-span-3">
                <TasksSection handleResolved={handleResolved}
                    customerTicket={customerTicket}
                ></TasksSection>
            </div>

        </div>
    );
};

export default AllTickets;