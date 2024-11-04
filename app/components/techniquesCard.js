import Image from "next/image";
import Link from "next/link";

export default function TechniquesCard({ technique }) {
  return(
    <div
      key={technique.title}
      className="flex flex-col md:grid md:grid-cols-3 gap-1 bg-colour4 rounded-md p-2"
    >
      <div className="md:pr-1 justify-self-stretch">
        <Image src={technique.image} alt={technique.imageAlt} width={1700} height={1020}
          className="object-cover h-full"/>
      </div>
      <div className="flex flex-col justify-items-stretch md:col-span-2">
        <h1 className="text-lg font-bold text-colour1">{technique.title}</h1>
        <p className="text-sm text-colour2 text-opacity-50">{technique.level}</p>
        <p className="text-colour2 mb-3">{technique.summary}</p>
        <Link href="" className="mt-auto p-1 text-center bg-colour3 rounded-md text-colour5 shadow-md">
          See Technique Details
        </Link>
      </div>
    </div>
  )
}