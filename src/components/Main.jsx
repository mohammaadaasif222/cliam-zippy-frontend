import React from "react";
// import {} from "@heroicons/react";
const Main = () => {
  return (
    <div className="" style={{ width: "100%" }}>
      <div
        className=" bg-white shadow-md mt-5 h-14 flex justify-between items-center px-5"
        style={{ width: "100%" }}
      >
        <h2 className="text-blue-900 font-bold">Package Executive Dashboard</h2>
        <div className="flex justify-between items-center gap-5">
          <p className="text-xs font-semibold text-slate-500"> Welcome User</p>
          <img
            src="https://res.cloudinary.com/mae-com-in/image/upload/v1699458800/images_bx6zzs.png"
            alt=""
            height="30"
            width="30"
            className="rounded-full"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="blue"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </div>
      </div>
      <div className="h-42 bg-white mt-1 shadow-md">
        <div className="flex  justify-between items-center px-10 pt-10">
          <h2 className="text-blue-900 font-bold">Empanelment Case Request</h2>
          <h2 className="font-bold italic text-blue-200 font-900">
            View Assigned Grade
          </h2>
        </div>

        <div className="relative overflow-x-auto p-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-500 captalize dark:text-gray-400">
              <tr className="p-10">
                <th scope="col" className="px-6 py-3">
                  THCP Code:
                </th>
                <th scope="col" className="px-6 py-3">
                  Case Id:
                </th>
                <th scope="col" className="px-6 py-3">
                  Case Date:
                </th>
                <th scope="col" className="px-6 py-3">
                  Zone:
                </th>
                <th scope="col" className="px-6 py-3">
                  Provider Name:
                </th>
                <th scope="col" className="px-6 py-3">
                  Status:
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Assigned:
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">312568</td>
                <td className="px-6 py-4">1-6968387</td>
                <td className="px-6 py-4">29 June 2023</td>
                <td className="px-6 py-4">North</td>
                <td className="px-6 py-4">12548- Appollo Hospital </td>
                <td className="px-6 py-4">Work Flow created</td>
                <td className="px-6 py-4">Amit Kumar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className=" bg-white mt-5 shadow-md">
        <div>
          <h2 className="text-blue text-xl text-center text-blue-900 font-bold py-5">
            Advance Tariff
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
