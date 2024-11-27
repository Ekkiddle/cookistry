import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function TechniquesCard({ technique }) {
  return(
    <div
      key={technique.name}
      className="flex flex-col sm:grid sm:grid-cols-3 gap-1 bg-colour4 rounded-md p-2"
    >
      <div className="md:pr-1 justify-self-stretch">
        <Image src={technique.image} alt={technique.imageAlt} width={1700} height={1020}
          className="object-cover h-full"/>
      </div>
      <div className="flex flex-col justify-items-stretch sm:col-span-2">
        <h1 className="text-lg font-bold text-colour1">{technique.name}</h1>
        <p className="text-sm text-colour2 text-opacity-50">{technique.level}</p>
        <p className="text-colour2 mb-3">{technique.summary}</p>
        <Link 
          href={`/techniques/${technique.slug}`}
          className="
            mt-auto p-1 
            bg-colour3 rounded-md shadow-md shadow-black/25
            text-center text-sm text-colour1"
        >
          SEE TECHNIQUE DETAILS
        </Link>
        {/* <Button variant="contained" className="mt-auto rounded-md text-colour1 bg-colour3" size="small">
          See Technique Details
        </Button> */}
      </div>
    </div>
  )
}