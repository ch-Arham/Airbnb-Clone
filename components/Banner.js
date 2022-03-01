import Image from "next/image";
import Typewriter from "typewriter-effect";

const handleClick = () => {
  window.scrollTo({
    top: 600,
    left: 0,
    behavior: "smooth",
  });
};

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
          <div className="flex justify-center">
          <p className="text-lg">Not sure where to go? </p>
          <div style={{width:'5px'}}></div>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(50)
                .typeString('<strong><span style="color: #FD5B61;font-size: 1.1em"> Perfect.</span></strong>')
                .start();
            }}
          />
          </div>
          <button
            className="text-purple-500 bg-white px-8 py-3 shadow-md rounded-full font-bold my-2
                        hover:shadow-xl active:scale-90 transition duration-150 ease-linear"
            onClick={handleClick}
          >
            I&apos;m flexible
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;

//relative --- relative to the size of that container
