import Image from 'next/image'
import Navbar from '@/components/navbar/navbar'
import PersonalCard from '@/components/card/personal-information-card'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import PersonalInput from '@/components/search/personal-information-input'
import BMICard from '@/components/card/bmi-card'
import GraphCard from '@/components/card/graph-card'
export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#5E51E9]">
      <div className='flex flex-col p-[5rem]'>
        <h1 className='flex items-start justify-start font-bold text-2xl'>รายงานข้อมูลผู้ใช้</h1>
        <PersonalInput/>
        <div className='flex flex-col md:flex-row lg:flex-row gap-4'>
        <PersonalCard/>
        <BMICard/>
        </div>
        <GraphCard/>
      </div>
    </main>
  )
}
