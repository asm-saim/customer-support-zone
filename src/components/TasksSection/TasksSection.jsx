import CustomerStat from "../CustomerStat/CustomerStat";

const TasksSection = ({ customerTicket, handleResolved }) => {
    return (
        <div>
            {
                customerTicket.map(customerStat =>
                    <CustomerStat handleResolved={handleResolved}
                        customerStat={customerStat}></CustomerStat>)
            }

        </div>
    );
};

export default TasksSection;