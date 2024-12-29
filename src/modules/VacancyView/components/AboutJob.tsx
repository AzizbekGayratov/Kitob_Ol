export default function AboutJob() {
  return (
    <section className='flex-grow mt-4'>

    <div>
    <div className=' flex justify-between bg-white h-[60px] px-[31px] py-[18px]'>
        <h3 className='font-semibold text-[15px]'>Ish haqida</h3>
        <h3 className='text-[16px] font-normal'>Ko'rilgan: 101</h3>
    </div>
    <div className=' h-[300px] p-10 bg-white'>
        <div>
            <h3 className='text-[13px] font-normal'>Maosh</h3>
            <h2 className='font-bold text-xl mt-[14px]'>700$ - 1200$</h2>
        </div>
        <div className='grid mt-[35px]  sm:grid-cols-3 md:gap-x-[30px] lg:gap-x-[60px]'>
            <div>
                <h4 className='text-[11px] font-normal'>Ish turi</h4>
                <h3 className='font-semibold text-[15px]'>Doimiy</h3>
            </div>
            <div>
                <h4 className='text-[11px] font-normal'>Mashg'ulot turi</h4>
                <h3 className='font-semibold text-[15px]'>Ma'lum soatlarda</h3>
            </div>
            <div>
                <h4 className='text-[11px] font-normal'>Ish tarzi</h4>
                <h3 className='font-semibold text-[15px]'>Online</h3>
            </div>
        </div>
    </div>
    </div>
    </section>
  )
}
