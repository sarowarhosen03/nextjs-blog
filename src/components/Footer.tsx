import React from "react";
import Link from "next/link";

function Footer() {
    return (
        <footer className="mt-20 text-lg font-bold bg-base-300 px-10 py-8">
            <div className="mx-auto max-w-5xl text-center space-x-2">
                © 2020{" "}
                <Link className='hover:text-blue-400 font-bold' href={'/about'}>About</Link>
                <Link className='hover:text-blue-400 font-bold' href={'/privacy'}>Privacy policy</Link>
                <Link className='hover:text-blue-400 font-bold' href={'/contact-us'}>contact us</Link>

            </div>
        </footer>
    );
}

export default Footer;
