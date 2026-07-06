const CustomerStat = ({customerStat}) => {
    return (
        <div className=" bg-gray-800 border border-gray-600  p-3 rounded-xl mb-4 space-y-3">
            <h2 className="font-bold text-lg">{customerStat.title}</h2>
            <button className="btn bg-green-700 rounded-lg w-full">Complete</button>
        </div>
    );
};

export default CustomerStat;