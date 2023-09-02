import Image from 'next/image'
import Link from 'next/link';

export default function MoodCalendar() {
    return (
        <main className="flex min-h-screen w-screen overflow-y-scroll flex-col items-center bg-[#5E51E9]">
            <div id="topic" className='w-4/5 mt-12'>
                <h3 className='text-xl text-white'>Mental Health</h3>
                <h1 className='mt-12 text-4xl text-white'>What is your <br />mood today ?</h1>
            </div>
            <Image
                src="/doctor.png"
                alt="doctor"
                width={250}
                height={35}
                className='mt-8 ml-20'
                priority
            />
            <div id="calendar" className='fixed bottom-0 bg-white w-full h-[50vh] rounded-t-[50px] p-9 flex flex-col items-center'>
                <div id="date" className='flex items-center w-full'>
                    <h3>September, 2023</h3>
                    <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="#5E51E9"/>
                    </svg>
                </div>
                <div id="yesterday" className='absolute left-[-4rem] top-40 z-10 w-[200px] h-[200px] bg-[#FF836D] rounded-[15px] origin-top-left rotate-[-10deg] shadow'></div>
                <div id="today" className='w-[200px] h-[200px] z-20 bg-white rounded-[15px] flex flex-col justify-center items-center shadow'>
                    <div className="w-[100px] h-[100px] relative">
                    <div className="w-[100px] h-[100px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-full border border-stone-900"></div>
                        <div className="w-[60px] h-[60px] left-[21px] top-[20px] absolute">
                            <div className="w-[60px] h-[0px] left-[29px] top-0 absolute origin-top-left rotate-90 border border-stone-900"></div>
                            <div className="w-[60px] h-[0px] left-0 top-[30px] absolute border border-stone-900"></div>
                        </div>
                    </div>
                    <h3 className='fixed mt-36'>Sunday</h3>
                </div>
                <div id="nav" className='flex justify-evenly mt-8 w-1/5 z-50'>
                    <div className="w-2.5 h-2.5 bg-zinc-300 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-zinc-300 rounded-full"></div>
                </div>
            </div>
            <div id="menuBar" className='fixed bottom-6 w-4/5 h-[50px] flex justify-evenly items-center bg-white rounded-full shadow'>
                <div id="home">
                    <Image
                        src="/home-2-outline.svg"
                        alt="User Icon"
                        width={35}
                        height={35}
                        priority
                    />
                </div>
                <div id="moodTracker">
                    <Image
                        src="/mood-laugh (1).svg"
                        alt="User Icon"
                        width={35}
                        height={35}
                        priority
                    />
                </div>
                <div id="user">
                    < Image
                        src="/person-outline.svg"
                        alt="User Icon"
                        width={35}
                        height={35}
                        priority
                    />
                </div>
            </div>
        </main>
    )
}