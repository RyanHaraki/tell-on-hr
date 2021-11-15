import React from "react";
import Link from "next/link";

const Dashboard = ({ issues }) => {
  return (
    <div>
      {/* HEADER */}
      <div className="flex align-center justify-center items-center p-3 bg-headerColor bg-opacity-50">
        <img src="/LOGO1.svg" width={100} height={50} />
        <Link href="/">
          <p className="font-bold px-5 text-white text-xl">TELLONHR</p>
        </Link>
        <Link href="/issues">
          <p className="text-white text-xl font-bold hover:text-gray-300 cursor-pointer px-5">
            View Issues
          </p>
        </Link>
      </div>

      <div className="flex h-screen flex-col">
        <h1 className="text-xl py-10 font-bold">Active</h1>
        <h1 className="text-xl py-10 font-bold">Resolved</h1>
      </div>
    </div>
  );
};

export default Dashboard;
