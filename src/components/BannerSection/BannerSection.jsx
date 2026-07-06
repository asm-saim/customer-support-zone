import bg from '../../assets/vector1.png'

const BannerSection = ({ customerTicket }) => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10 my-16">
            <div className="relative overflow-hidden text-center py-20 rounded-lg font-bold text-3xl bg-linear-to-r from-blue-400 to-blue-900">
                <div className="absolute inset-0 opacity-50 pointer-events-none"
                    style={{ backgroundImage: `url(${bg})`, backgroundSize: '100% 100%' }} />
                <div className="relative z-10">
                    <h2 className="text-3xl">In-Progress</h2>
                    <p className="text-4xl">{customerTicket.length}</p>
                </div>
            </div>


            <div className="relative overflow-hidden text-center py-20 rounded-lg
bg-linear-to-r from-teal-500 to-green-800 font-bold">
                <div
                    className="absolute inset-0 opacity-50 pointer-events-none"
                    style={{ backgroundImage: `url(${bg})`, backgroundSize: '100% 100%' }}
                />
                <div className="relative z-10">
                    <h2 className="text-3xl">Resolved</h2>
                    <p className="text-4xl">0</p>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;