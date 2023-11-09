import Image from "next/image";
import React from "react";
import Link from "next/link";

function Card() {
    return (
        <div className="min-w-96 max-w-sm">
            <div className="rounded-lg shadow-md shadow-accent bg-base-200 hover:border-secondary hover:border-2   ">
                <Link href="/typography/">
                    <Image
                        className="lazy rounded-t"
                        src="https://plus.unsplash.com/premium_photo-1669819813174-ebba575c8810?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={960}
                        height={500}
                        alt="This post thumbnail"
                    />
                </Link>
                <div className="px-6 py-5">
                    <div className="mb-2 text-lg font-semibold">
                        <Link href="/typography/" className='hover:text-blue-400 font-bold'>Typography</Link>
                    </div>
                    <p className="mb-1" title="Published date">
                        21 June 2020 08:04 AM
                    </p>
                    <Link href='/post-url' className='hover:text-blue-400 font-bold'>
                        Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est et expeditasi distincti...
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
