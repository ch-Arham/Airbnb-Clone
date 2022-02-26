import Image from "next/image";

const handleClick = ()=>{
    window.scrollTo({
        top: 600,
        left: 0,
        behavior: 'smooth'
      });
}

const Banner = () => {
  return (
    <section>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[589px]  2xl:h-[700px]">
            <Image 
                src="https://links.papareact.com/0fm"
                alt="Banner Image"
                layout="fill"
                objectFit="cover"
                
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg font-medium">Not sure where to go? Perfect.</p>
                <button 
                    className="
                        text-purple-500 
                        bg-white 
                        px-10 py-4 
                        shadow-md 
                        rounded-full 
                        font-bold 
                        my-3
                        hover:shadow-xl active:scale-90 transition duration-150 ease-linear"
                        onClick={handleClick}
                    >
                    I&apos;m flexible
                </button>
            </div>
        </div>
    </section>
  )
}

export default Banner

//relative --- relative to the size of that container