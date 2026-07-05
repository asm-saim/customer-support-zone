const Navbar = () => {
    return (
        <div className="bg-gray-700 ">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-5 ">
                <div className="border-2 border-gray-500 px-5 py-1 rounded-md text-lg font-bold">
                    <h2>Customer Support - TS</h2>
                </div>

                <div className="flex items-center justify-between">
                    <ul className="flex items-center justify-between font-semibold gap-8">
                        <li><a href="">Home</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Change Log</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Download</a></li>
                        <li><a href="">Contact</a></li>
                        <button className="btn bg-blue-800 text-base">+ New Ticket</button>
                    </ul>


                </div>
            </div>
        </div>

    );
};

export default Navbar;