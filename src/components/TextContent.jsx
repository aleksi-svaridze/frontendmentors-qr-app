

export default function TextContent(props) {
    const {title, desc} = props.data;
  return (
    <section className='text-center px-[10px]'>
        <h2 className='text-[#1F314F] text-[22px] leading-[120%] font-bold mb-4'>{title}</h2>
        <p className='text-[#68778D] text-[15px] leading-[140%]'>{desc}</p>
    </section>
  )
}
