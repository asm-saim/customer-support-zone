import { use } from "react";
import Ticket from "../Ticket/Ticket";
import TasksSection from "../tasksSection/TasksSection";

const AllTickets = ({
    fetchData,
    customerTicket,
    setCustomerTicket,
    handleResolved,
    resolvedTicket,
}) => {
    const promiseHandled = use(fetchData);

    // Remove tickets that are already resolved
    const visibleTickets = promiseHandled.filter(
        ticket => !resolvedTicket.some(resolved => resolved.id === ticket.id)
    );

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-0 mb-10 grid grid-cols-1 lg:grid-cols-11 gap-6">

            {/* Tickets */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                {visibleTickets.map(tickets => (
                    <Ticket
                        key={tickets.id}
                        customerTicket={customerTicket}
                        setCustomerTicket={setCustomerTicket}
                        tickets={tickets}
                    />
                ))}
            </div>

            {/* Tasks */}
            <div className="lg:col-span-3">
                <TasksSection
                    handleResolved={handleResolved}
                    customerTicket={customerTicket}
                />
            </div>

        </div>
    );
};

export default AllTickets;