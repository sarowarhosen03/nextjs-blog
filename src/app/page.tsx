import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="container px-4">
      <section>
        <div className=" flex gap-2 items-center justify-center lg:gap-4 flex-wrap  ">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="my-3 mt-3  flow-root">
          <a href="javascript:void(0)" className="btn-secondary btn float-left">
            Previous
          </a>
          <Link href="/page/2/" className="btn-primary btn float-right ">
            Next
          </Link>
        </div>
      </section>
      <section className="mt-5 ">
        <h1 className="text-xl font-bold">Categories</h1>
        <ul>
          <li className="text-lg hover:font-bold">catafory 2</li>
          <li className="text-lg hover:font-bold">catafory 2 </li>
          <li className="text-lg hover:font-bold">catafory 23</li>
        </ul>
      </section>
    </main>
  );
}
