import Image from "next/image";
import Link from "next/link";

export default function TechniquesCard({image, imageAlt, title, desc, nav}) {
  return(
    // <div className="grid grid-cols-3 gap-4 bg-colour4 rounded-md p-1.5">
    //   <div className="relative w-full h-auto my-auto">
    //     <Image src={image} alt={imageAlt} width={500} height={400} />
    //   </div>
    //   <div className="flex flex-col flex-initial my-auto gap-3 col-span-2">
    //     <div>
    //       <h1 className="text-lg font-bold text-colour1">{title}</h1>
    //       <p className="text-colour2">{desc}</p>
    //     </div>
    //     <Link href={nav} className="bg-colour3 rounded-md text-colour5 max-w-max px-1.5">
    //       See Technique Details
    //     </Link>
    //   </div>
    // </div>
    <div className="grid grid-cols-3 gap-1 bg-colour4 rounded-md p-1.5">
      <div className="relative w-full h-auto my-auto pr-1">
        <Image src={image} alt={imageAlt} width={500} height={400} />
      </div>
      <div className="col-span-2">
        <h1 className="text-lg font-bold text-colour1">{title}</h1>
        <p className="text-colour2">{desc}</p>
      </div>
      <Link href={nav} className="my-auto text-center bg-colour3 rounded-md text-colour5 col-span-3 ">
        See Technique Details
      </Link>
    </div>
  )
}