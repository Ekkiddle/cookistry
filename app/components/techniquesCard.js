import Image from "next/image";
import Link from "next/link";

export default function TechniquesCard({image, imageAlt, title, summary, nav}) {
  return(
    <div className="flex flex-col md:grid md:grid-cols-3 gap-1 bg-colour4 rounded-md p-2">
      <div className="md:pr-1 justify-self-stretch">
        <Image src={image} alt={imageAlt} width={1700} height={1020}
          className="object-cover h-full"/>
      </div>
      <div className="flex flex-col justify-items-stretch md:col-span-2">
        <h1 className="text-lg font-bold text-colour1">{title}</h1>
        <p className="text-colour2 mb-3">{summary}</p>
        <button className="mt-auto p-1 text-center bg-colour3 rounded-md text-colour5">
          See Technique Details
        </button>
      </div>
    </div>
  )
}