import CustomerStat from "../CustomerStat/CustomerStat";

const TasksSection = ({ customerTicket, handleResolved }) => {
    console.log(customerTicket);
    return (
        <div>
            {
                customerTicket.length === 0 ? (
                    <div className="border-2 border-dashed border-gray-500 rounded-xl p-8 text-center">
                        <h2 className="text-lg font-bold text-gray-400">
                            Select cards to view tasks
                        </h2>
                    </div>
                ) :

                    (customerTicket.map(customerStat =>
                        <CustomerStat handleResolved={handleResolved}
                            customerStat={customerStat}></CustomerStat>))
            }

        </div>
    );
};

export default TasksSection;