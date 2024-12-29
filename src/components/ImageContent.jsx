import qr_code from '../images/qr-code.svg';

export default function ImageContent() {
  return (
    <div className="size-[288px] rounded-[10px] bg-[#2c7dfa] relative overflow-hidden mb-6">
        <div className='size-[328px] opacity-10 bg-white absolute -top-[164px] -left-[131px] rounded-full z-0'></div>
        <img src={qr_code} alt='qr code' className='size-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10' />
        <div className='size-[270px] opacity-10 bg-white absolute -bottom-[186px] -right-[116px] rounded-full z-0'></div>
    </div>
  )
}
