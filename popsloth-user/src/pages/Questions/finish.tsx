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
                    <img className='items-center ' src="/correct.svg" alt="check" />
                </div>
                
                <p className="text-base text-black font-semibold pt-28 pb-6 text-lg flex items-center justify-center">คุณทำ Part 1 เสร็จแล้ว</p>
                <p className="text-sm text-black font-normal flex items-center justify-center">ขอให้เป็นวันที่ดีนะ :)</p>

                <div>    
                    
                    <div className='flex justify-end pt-[60px] '>
                    <Link href='result' className='rotate-180 left-[0px]'>
                        <img className='fix' src="/backward.svg" alt="backward"/>
                    </Link>
                    </div>

                </div>
            </div>
        </main>
    )
}