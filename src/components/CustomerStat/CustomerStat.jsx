const CustomerStat = ({customerStat}) => {
    return (
        <div className="border border-amber-300 p-2 rounded-xl mb-3 space-y-2">
            <h2 className="font-bold text-lg">{customerStat.title}</h2>
            <button className="btn bg-green-700 text-base w-full">Complete</button>
        </div>
    );
};

export default CustomerStat;