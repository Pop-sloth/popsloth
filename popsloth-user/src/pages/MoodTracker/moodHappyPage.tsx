import Image from 'next/image'
import Link from 'next/link';

export default function HappyMoodPage() {
    return (
        <main className='w-screen h-screen bg-yellow-400 bg-opacity-50 flex justify-center items-end'>
            <Image
                src="/Happy1.png"
                alt='Happy mood'
                width={1080}
                height={1080}
                className='fixed h-screen object-cover z-10'
                priority
            />
            <Link href='/MoodTracker/moodCalendar'>
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
            <Link href='/MoodTracker/moodHappyShare'>
            <div id="share" className='z-50 opacity-80 flex items-center justify-center fixed top-16 right-8'>
                <Image
                    src="/share.svg"
                    alt="User Icon"
                    width={25}
                    height={25}
                    className='fixed'
                    priority
                />
                <div className='w-[50px] h-[50px] rounded-full bg-white'></div>
            </div>
            </Link>
            <div id="text" className='text-center text-white h-[45vh] z-50'>
                <h1 className='text-5xl leading-[4rem]'>WHAT IS <br />YOUR MOOD <br />TODAY ?</h1>
                <h3 className='text-xl mt-6'>3 Sep</h3>
                <div id="moodTag" className='h-[10vh] flex flex-col justify-evenly mt-6'>
                    <div id="upRow" className='flex justify-evenly'>
                        <Link href='/MoodTracker/moodRelaxPage'>
                        <div id="Relax" className='h-[30px] w-[80px] bg-white bg-opacity-25 rounded-[50px] flex items-center justify-center'>Relax</div>
                        </Link>
                        <Link href='/MoodTracker/moodAngryPage'>
                        <div id="Angry" className='h-[30px] w-[80px] bg-white bg-opacity-25 rounded-[50px] flex items-center justify-center'>Angry</div>
                        </Link>
                        <Link href='/MoodTracker/moodSadPage'>
                        <div id="Sad" className='h-[30px] w-[80px] bg-white bg-opacity-25 rounded-[50px] flex items-center justify-center'>Sad</div>
                        </Link>
                    </div>
                    <div id="buttomRow" className='flex justify-evenly px-[15px]'>
                        <Link href='/MoodTracker/moodHappyPage'>
                        <div id="Happy" className='h-[30px] w-[80px] bg-black rounded-[50px] flex items-center justify-center'>Happy</div>
                        </Link>
                        <Link href='/MoodTracker/moodFunPage'>
                        <div id="Fun" className='h-[30px] w-[80px] bg-white bg-opacity-25 rounded-[50px] flex items-center justify-center'>Fun</div>
                        </Link>
                        <div id="More" className='h-[30px] w-[50px] bg-white bg-opacity-25 rounded-[50px] flex items-center justify-center'>+</div>
                    </div>
                </div>
            </div>
        </main>
    )
}