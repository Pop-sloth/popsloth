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

export default function GraphCard() {
  const users = Dummypersonal.users
  return (
    <div className="w-full pt-10">
      <div className="flex flex-col">
        <h1 className="text-m font-bold">BMI</h1>
        <div className="flex justify-start items-start">
          <div className="w-[50rem] max-w-md rounded-2xl bg-white p-4 border-gray-950 border-1  ">
          </div>
        </div>
      </div>
    </div>
  );
}
