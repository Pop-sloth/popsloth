import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function Question(){
    return (
        <main className="bg-[#F2F1E9] flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-[80vw] flex-col items-center h-screen p-12 pt-28 bg-white drop-shadow-xl border-[0.72px] border-black border-opacity-30 rounded-3xl text-left justify-start">
            <p className="text-lg text-black font-semibold">Mental Health test</p>
            <p className="text-sm text-black font-normal">แบบประเมินสุขภาพจิต โดยกรมสุขภาพจิต</p>
            <label htmlFor=""></label>

            <div className='pt-[18vh] flex justify-center'>
                <img className='items-center ' src="/question.svg" alt="question" />
            </div>
            
            <p className="text-base text-black font-semibold pt-28 pb-6 text-lg">วัตถุประสงค์ของการทำแบบฟอร์ม</p>
            <p className="text-sm text-black font-normal">แบบฟอร์มนี้ทำเพื่อประเมินสุขภาพจิตเบื้องต้นของท่าน และแสดงผลลัพธ์จากคำถามที่ท่านตอบ รวมถึงเพื่อส่งข้อมูลเบื้องต้นเหล่านี้ให้แพทย์ต่อในอนาคต</p>

            <div>    
                
                <div className='flex items-center pt-[60px] justify-between'>
                <Link href='/' className=''>
                    <img className='fix' src="/backward.svg" alt="backward"/>
                </Link>
                <Link href='form' className='rotate-180 left-[0px]'>
                    <img className='fix' src="/backward.svg" alt="backward"/>
                </Link>
                </div>

            </div>
            
                {/* <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                    <div className="h-1 bg-primary width: 45%"></div>
                </div> */}
                {/* <div className="w-64 h-64 bg-red-300 shadow-xl rounded-md">
                    <title>Question</title>

                    <h1>แบบฟอร์ม</h1>

                    <h1>
                    Contact us at our <a href="https://facebook.com">Facebook</a>
                    </h1>

                    

                    <h2>
                        <Link href="/">Back to home</Link>
                    </h2>
                </div> */}
            </div>
        </main>
    )
}