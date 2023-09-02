import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function Question(){
    return (
        <main className="bg-[#F2F1E9] flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-4/12 h-screen p-12 bg-white drop-shadow-xl border-[0.72px] border-black border-opacity-30 rounded-3xl text-left items-stretch  justify-start">
            <p className="text-lg text-black font-semibold">Mental Health test</p>
            <p className="text-sm text-black font-normal">แบบประเมินสุขภาพจิต โดยกรมสุขภาพจิต</p>
            <div className='pt-14 bg-slate-100'>
                <progress className='w-64 h-1 bg-red-600' value={70} max={100}></progress>
            </div>
            <p className="text-base text-black font-semibold pt-6">มีปัญหาการนอนไม่หลับหรือหลับยาก</p>
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