import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <section className="cursor-pointer hover:scale-105 transition duration-300 transform ease-out">
        <div className="relative h-80 w-80">
            <Image 
                src={img}
                alt="Location Images"
                layout="fill"
                className="rounded-xl"
            />
            
        </div>
        <h3 className="text-2xl mt-3 font-medium">{title}</h3>
    </section>
  )
}

export default MediumCard