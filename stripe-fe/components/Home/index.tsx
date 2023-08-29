import React from "react";
import { Cart } from "@/utils/constants/items";
const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      {Cart?.map((ele: any) => (
        <div
          key={ele?.id}
          className="border-[2px] border-gray-300 min-h-[200px] p-4 rounded-lg"
        >
          <div className="flex gap-4 justify-between items-center mb-4">
            <p className="text-[20px] font-medium">{ele?.name}</p>
            <p className="bg-purple-500 py-[4px] px-[15px] text-white rounded-3xl text-[14px] font-medium">
              {ele?.amount}
            </p>
          </div>
          <p className="text-[18px]">{ele?.description}</p>
          <button className="bg-red-500 text-white px-6 py-2 w-full rounded-lg mt-4">
            Buy
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
