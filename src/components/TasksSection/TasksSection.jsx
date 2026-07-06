import CustomerStat from "../CustomerStat/CustomerStat";

const TasksSection = ({customerTicket}) => {

    return (
        <div>
            {
                customerTicket.map(customerStat=>
                <CustomerStat customerStat={customerStat}></CustomerStat>)
            }
            
        </div>
    );
};

export default TasksSection;