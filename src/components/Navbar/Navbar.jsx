const Navbar = () => {
    return (
        <div className="bg-linear-to-r from-slate-800 via-gray-700 to-slate-800">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 sm:px-6 lg:px-0">

                {/* Left Side */}
                <div className="flex items-center gap-3">

                    {/* Hamburger (Mobile Only) */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-box bg-base-200 p-2 shadow">
                            <li><a href="">Home</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Change Log</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Download</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className="border-2 border-gray-500 px-4 py-1 rounded-tr-2xl text-lg font-bold">
                        <h1>
                            <span className="text-blue-500">CS</span> - Ticket System
                        </h1>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:block">
                    <ul className="flex items-center justify-between font-semibold gap-8">
                        <li><a href="">Home</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Change Log</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Download</a></li>
                        <li><a href="">Contact</a></li>
                        <button className="border-none btn bg-linear-to-br from-blue-500 to-blue-800 text-base">
                            + New Ticket
                        </button>
                    </ul>
                </div>

                {/* Mobile Button */}
                <div className="lg:hidden">
                    <button className="border-none btn btn-sm bg-linear-to-br from-blue-500 to-blue-800">
                        + Ticket
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;