import { use } from "react";
import Tickets from "../Tickets/Tickets";

const AllTickets = ({ fetchData }) => {
    const promiseHandled = use(fetchData);

    return (
        <div className="max-w-7xl mx-auto border border-amber-300 grid grid-cols-12 gap-10 ">
            <div className=" col-span-8 border grid grid-cols-2  border-amber-300">
                {
                    promiseHandled.map(tickets => <Tickets tickets={tickets}></Tickets>)
                }
            </div>
            <div className=" col-span-4 border border-amber-300">h2</div>

        </div>
    );
};

export default AllTickets;