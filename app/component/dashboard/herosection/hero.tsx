import React from "react";
import Link from "next/link";


export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-screen-xl p-9 md:p-10">
      {/*Text Section */}
      <div className="flex-1 p-5 mb-10 md:mb-0 md:pr-12">
        <h1 className="text-4xl  md:text-5xl font-medium leading-tight">
          management system
        </h1>
        <h1 className="text-4xl mt-2 md:text-5xl font-medium text-blue-900 leading-tight">
          for your business
        </h1>
        <p className="text-gray-500 mt-11">
          Lorem ipsum dolor sit amet consectetur adipisicing elitt consectetur
          adipisicing. Eveniet, itaque accusant Lorem ipsum dolor sit ame elit.
          Eveniet, itaque accusantium odio. Lorem ipsum dolor sit amet
          consectetur adipisicing elit
        </p>
      </div>

      {/* Form Section */}
      <div className="flex-1 bg-white p-8 shadow-lg rounded-sm w-auto max-w-md">
        <div className="flex justify-center space-x-3 mb-6">
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="role"
              value="User"
              className="text-blue-600"
              defaultChecked
            />
            <span className="text-lg">User</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="role"
              value="admin"
              className="text-blue-600"
            />
            <span className="text-lg">Admin</span>
          </label>
        </div>

        <div className="mb-4">
          Username
          <input
            type="text"
            placeholder=""
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          Password
          <input
            type="password"
            placeholder=""
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6 flex items-center">
          <input type="checkbox" className="text-blue-600 focus:ring-0" />
          <label className="ml-2 text-gray-700">Remember me</label>
        </div>
        <Link href={'/dashboard'}>
        <button className=" bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700 transition">
         Sign in
        </button>
        </Link>

        <p className="mt-4 text-sm text-gray-500">
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
        </p>
        <p className="mt-6 text-sm text-gray-800">
          Do not have an account?{" "}
          <a href="#" className="text-cyan-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
