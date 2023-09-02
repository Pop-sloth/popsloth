import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen overflow-y-scroll flex-col items-center bg-[#F2F1E9]">
      <div id='Head' className="fixed w-full h-[8rem] flex flex-row justify-between items-center bg-[#F2F1E9] px-[10%]">
        <div>
          <h1>Get Started</h1>
          <h3>Mental Health Analyze</h3>
        </div>
        <div>
          <Image
            src="/user-circle.svg"
            alt="User Icon"
            width={40}
            height={40}
            priority
          />
        </div>
      </div>
      <div id='content' className='mt-[8rem]'>
        <div id='form' className="w-[320px] h-[260px] bg-white rounded-2xl mt-8">
          <Image
            src="/formPreImage.avif"
            alt="Form Preview Image"
            width={1080}
            height={1080}
            className="object-cover h-[70%] w-full rounded-2xl rounded-b-none"
            priority
          />
          <div id='text' className='p-3'>
            <h1>Mental Health Screening Form</h1>
            <p>แบบประเมินคัดกรองโดยกรมสุขภาพจิต</p>
          </div>
        </div>
        <div id='TalkAI' className="w-[320px] h-[260px] bg-white rounded-2xl mt-8">
          <Image
            src="/talkPreImage.webp"
            alt="Form Preview Image"
            width={1080}
            height={1080}
            className="object-cover h-[70%] w-full rounded-2xl rounded-b-none"
            priority
          />
          <div id='text' className='p-3'>
            <h1>Talk with the sloth</h1>
            <p>พูดคุยกับเพื่อนสลอธได้ทุกเรื่อง</p>
          </div>
        </div>
      </div>
      <div id="menuBar" className='fixed bottom-6 w-4/5 h-[50px] flex justify-evenly items-center bg-white rounded-full'>
        <div id="home">
          <Image
            src="/home-2.svg"
            alt="User Icon"
            width={35}
            height={35}
            priority
          />
        </div>
        <div id="moodTracker">
          <Image
            src="/mood-laugh.svg"
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
