import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function Question(){
    return (
        <main className="bg-[#F2F1E9] flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-[80vw] flex flex-col items-center h-screen p-12 pt-28 bg-white drop-shadow-xl border-[0.72px] border-black border-opacity-30 rounded-3xl text-left justify-start">
            <p className="text-lg text-black font-semibold">Mental Health test</p>
            <p className="text-sm text-black font-normal">แบบประเมินสุขภาพจิต โดยกรมสุขภาพจิต</p>
            <label htmlFor=""></label>
            {/* <div className='pt-14 bg-slate-100'>
                <progress className='w-64 h-1 bg-red-600' value={70} max={100}></progress>
            </div> */}
            <div className='pt-14 w-full'>
                <div className="w-full bg-[#E4E4E4] rounded h-2">
                    <div className="bg-[#6C63FF] h-2 rounded w-2/4"></div>
                </div>
            </div>
            
            <p className="text-base text-black font-semibold pt-6 pb-12">หงุดหงิด กระวนกระวาย ว้าวุ่นใจ
</p>
            <div>
                <form /*onSubmit={onSubmit}*/>
                    {/* <label htmlFor="name"/>ชื่อ<br/>
                    <input type="text" id="name" placeholder="กรุณากรอกชื่อจริง" name="name" /><br/>
                    <div>
                    <label htmlFor="gender"/>เพศ <br/>
                    <input type="radio" name="gender"/>เพศชาย<br/>
                    <input type="radio" name="gender"/>เพศหญิง<br/>
                    <input type="radio" name="gender"/>กำหนดเอง<br/>
                    </div>
                    <button type="submit">Submit</button> */}
                
                    {/* <div>
                    <input id='1' type="radio" name="frequency"/>
                    <label htmlFor="1">ไม่มี</label><br/>
                    <input id='2' type="radio"  name="frequency"/>
                    <label htmlFor="2">เป็นบางครั้ง</label><br/>
                    <input id='3' type="radio" name="frequency"/>
                    <label htmlFor="3">บ่อยครั้ง</label><br/>
                    <input id='4' type="radio" name="frequency"/>
                    <label htmlFor="4">เป็นประจำ</label><br/>
                    </div> */}
                    <Link href={"form4"}>
                    
                        <div className="w-80 h-12 absolute bg-white rounded-[10px] border border-black"/>
                        <div className="w-80 h-12 absolute text-justify flex items-center justify-center text-black text-[15px] font-medium">ไม่มี</div>
                        <div className="w-80 h-12 relative top-[68px] bg-white rounded-[10px] border border-black"/>
                        <div className="w-80 h-12 absolute text-justify flex items-center justify-center text-black text-[15px] font-medium pt-[40px]">เป็นบางครั้ง</div>
                        <div className="w-80 h-12 relative top-[88px] bg-white rounded-[10px] border border-black"/>
                        <div className="w-80 h-12 absolute text-justify flex items-center justify-center text-black text-[15px] font-medium pt-[63.5px]">บ่อยครั้ง</div>
                        <div className="w-80 h-12 relative top-[107px] bg-white rounded-[10px] border border-black"/>
                        <div className="w-80 h-12 absolute text-justify flex items-center justify-center text-black text-[15px] font-medium pt-[83.5px]">เป็นประจำ</div>
                    </Link>
                    
                    {/* <button type="submit">Submit</button> */}
                </form>
                
                <div className='pt-[150px]'>
                <Link href='form2' className=''>
                    <img className='' src="/backward.svg" alt="backward"/>
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