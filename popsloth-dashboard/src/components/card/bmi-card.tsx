import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Dummypersonal from "./personal-info.json";

interface Props {
  id: number,
  name: string;
  date: string;
  age: string;
  gender: string;
  weight: string;
  height: string;
  bmi: string;
}

export default function BMICard() {
  const users = Dummypersonal.users
  return (
    <div className="w-full pt-10">
      <div className="flex flex-col">
        <h1 className="text-m font-bold">BMI</h1>
        <div className="flex justify-start items-start">
          <div className="w-full max-w-md rounded-2xl bg-white p-4 border-gray-950 border-1  ">
            <p className="text-gray-700 text-base">น้ำหนัก : {users[0]?.weight}</p>
            <p className="text-gray-700 text-base">ส่วนสูง : {users[0]?.height}</p>
            <p className="text-gray-700 text-base">BMI : {users[0]?.bmi}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
