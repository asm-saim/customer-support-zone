import { toast } from "react-toastify";

const CustomerStat = ({ customerStat, handleResolved }) => {

    const handleComplete = () => {
        handleResolved(customerStat)
        toast.success("Task Completed", { theme: 'dark' })
    }

    return (
        <div className=" bg-gray-800 border border-gray-600  p-3 rounded-xl mb-4 space-y-3">
            <h2 className="font-bold text-lg">{customerStat.title}</h2>
            <button onClick={handleComplete} className="btn bg-green-700 rounded-lg w-full">Complete</button>
        </div>
    );
};

export default CustomerStat;