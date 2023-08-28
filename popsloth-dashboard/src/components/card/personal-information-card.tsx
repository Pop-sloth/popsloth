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

export default function PersonalCard() {
  const users = Dummypersonal.users
  return (
    <div className="w-full pt-10">
      <div className="flex flex-col">
        <h1 className="text-m font-bold">Personal Information</h1>
        <div className="flex justify-start items-start">
          <div className="md:w-[15rem] max-w-md rounded-2xl bg-white p-4 border-gray-950 border-1  ">
            <p className="text-gray-700 text-base">ชื่อ : {users[0]?.name}</p>
            <p className="text-gray-700 text-base">วันเกิด : {users[0]?.date}</p>
            <p className="text-gray-700 text-base">อายุ : {users[0]?.age}</p>
            <p className="text-gray-700 text-base">เพศ : {users[0]?.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
