import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
export default function PersonalInput() {
  return (
    <div className="sm:w-[20rem] lg:w-[30rem] md:inline-block lg:w-full pt-[1rem]">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          id="search"
          name="search"
          className="block w-full rounded-full border-0 bg-white py-1.5 pl-10 pr-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 border-gray-950 border-1 sm:leading-6 "
          placeholder="ค้นหาข้อมูลผู้ใช้"
          type="search"
        />
      </div>
    </div>
  );
}
