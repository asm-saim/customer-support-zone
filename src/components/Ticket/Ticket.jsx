const Ticket = ({ tickets, customerTicket, setCustomerTicket }) => {

    //placing an event listener:
    const handleCustomerCard=()=>{
        setCustomerTicket([...customerTicket,tickets])

    } 

    return (
        <div onClick={()=>handleCustomerCard(tickets)} className="rounded-lg p-3 bg-gray-800 border border-gray-600 ">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-lg font-bold">{tickets.title}</h1>
                </div>
                {
                    (tickets.status === 'Open' ?
                        <div className="flex items-center bg-green-300 px-2 py-1 rounded-lg gap-1">
                            <p className="bg-green-700 w-3 h-3 rounded-full"></p>
                            <p className=" text-green-900 font-semibold text-sm">{tickets.status}</p>
                        </div>
                        :
                        <div className="flex items-center bg-yellow-200 px-2 py-1 rounded-lg gap-1">
                            <p className="bg-yellow-600 w-3 h-3 rounded-full"></p>
                            <p className=" text-yellow-800 font-semibold text-sm">{tickets.status}</p>
                        </div>

                    )
                }


            </div>
            <p className="text-sm mt-2 line-clamp-2">{tickets.description}</p>
            <div className="flex justify-between mt-2 text-sm">
                <div className="space-x-5">
                    <span>{tickets.id}</span>
                    <span
                        className={`font-bold ${tickets.priority === "High"
                                ? "text-red-500"
                                : tickets.priority === "Medium"
                                    ? "text-yellow-500"
                                    : "text-green-500"
                            }`}
                    >
                        {tickets.priority}
                    </span>

                </div>
                <div className="space-x-5">
                    <span>{tickets.customer}</span>
                    <span>{tickets.createdAt}</span>
                </div>
            </div>
        </div>
    );
};

export default Ticket;