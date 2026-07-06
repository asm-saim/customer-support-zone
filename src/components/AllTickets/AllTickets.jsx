import { use } from "react";
import Ticket from "../Ticket/Ticket";

const AllTickets = ({ fetchData }) => {
    const promiseHandled = use(fetchData);

    return (
        <div className="max-w-7xl mx-auto border border-amber-300 grid grid-cols-11 gap-5 ">
            <div className=" col-span-8 border grid grid-cols-2 gap-5  border-amber-300">
                {
                    promiseHandled.map(tickets => <Ticket tickets={tickets}></Ticket>)
                }
            </div>
            <div className=" col-span-3 border border-amber-300">task status</div>

        </div>
    );
};

export default AllTickets;