const Footer = () => {
    return (
        <footer class="footer bg-gray-800 justify-items-center text-center  sm:footer-horizontal text-base-content p-10">
            <aside>
                <h1 className='font-extrabold text-5xl'>CS-<span className='text-blue-600'>Tech</span></h1>

                <p>
                    Customer Support Zone
                    <br />
                    Providing reliable tech since 2010
                </p>
            </aside>
            <nav>
                <h6 class="footer-title">Services</h6>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 class="footer-title">Company</h6>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 class="footer-title">Legal</h6>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;