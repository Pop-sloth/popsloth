import Image from 'next/image'
import Link from 'next/link';

export default function ShareSad() {
    return (
        <main className='w-screen h-screen bg-[#68A973] bg-opacity-50 flex flex-col justify-center items-center'>
            <Link href='/MoodTracker/moodRelaxPage'>
            <div id="close" className='z-50 opacity-80 flex items-center justify-center fixed top-16 left-12'>
                <Image
                    src="/close.svg"
                    alt="User Icon"
                    width={25}
                    height={25}
                    className='fixed'
                    priority
                />
                <div className='w-[50px] h-[50px] rounded-full bg-white'></div>
            </div>
            </Link>
            <h1 className='text-white mt-20'>MORDEE</h1>
            <div className='w-[300px] h-[500px] bg-white bg-opacity-70 mt-4s flex justify-center items-end rounded-[15px]'>
                <Image
                    src="/Relax.png"
                    alt='Relax mood'
                    width={1080}
                    height={1080}
                    className='w-full h-[100%] object-cover rounded-[15px]'
                    priority
                />
                <h1 className='fixed text-white text-4xl mb-24 text-center leading-[3rem]'>วันนี้เศร้าจัง <br />ปลอบเราหน่อย !</h1>
            </div>
            <div id="nav" className='flex justify-evenly mt-8 w-1/5 z-50'>
                <div className="w-2.5 h-2.5 bg-zinc-300 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-zinc-300 rounded-full"></div>
            </div>
            <div id="button" className='mt-8 w-[300px] flex justify-between'>
                <div id="save" className='w-[130px] h-[35px] rounded-[5px] bg-[#6C63FF] flex justify-center items-center'>
                    <h3 className='text-white'>Save</h3>
                </div>
                <div id="share" className='w-[130px] h-[35px] rounded-[5px] bg-[#6C63FF] flex justify-center items-center'>
                    <h3 className='text-white'>Share</h3>
                </div>
            </div>
        </main>
    )
}