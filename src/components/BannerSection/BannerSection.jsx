import bg from '../../assets/vector1.png';

const BannerSection = ({ customerTicket, resolvedTicket }) => {
    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 my-10 lg:my-16">

            {/* In Progress */}
            <div className="relative overflow-hidden text-center py-12 md:py-16 lg:py-20 rounded-lg font-bold bg-linear-to-r from-blue-400 to-blue-900">
                <div
                    className="absolute inset-0 opacity-50 pointer-events-none"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: '100% 100%',
                    }}
                />

                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl">In-Progress</h2>
                    <p className="text-3xl md:text-4xl">
                        {customerTicket.length}
                    </p>
                </div>
            </div>

            {/* Resolved */}
            <div className="relative overflow-hidden text-center py-12 md:py-16 lg:py-20 rounded-lg font-bold bg-linear-to-r from-teal-500 to-green-800">
                <div
                    className="absolute inset-0 opacity-50 pointer-events-none"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: '100% 100%',
                    }}
                />

                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl">Resolved</h2>
                    <p className="text-3xl md:text-4xl">
                        {resolvedTicket.length}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default BannerSection;