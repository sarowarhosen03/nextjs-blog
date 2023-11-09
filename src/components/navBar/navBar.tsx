import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const NoSSR = dynamic(() => import("../navBar/themeSwitcher"), { ssr: false });

function NavBar() {
  return (
    <div  className="navbar w-screen bg-base-300 px-3">
      <div className="flex-1">
        <Link href='/' className="dark:text-whitet btn-ghost btn text-xl normal-case">
          daisyUI
        </Link>
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input-bordered input w-30 md:w-auto"
        />
      </div>

      <div className="flex-row gap-2 ">
        <button className="btn-ghost btn-circle btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <NoSSR />

        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
