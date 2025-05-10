import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "../ui/badge"




const ProfileCard = () => {
  return (
    <Card className="bg-black border-none">
      <CardHeader>
        <div className="flex space-x-2">
          <Image src="/yo.jpg" width={80} height={80} alt="yo-profile" className="w-auto h-auto border-2 border-white" />
          <div className="flex flex-col space-y-1">
            <CardTitle className="text-xl font-black text-white">Chanivet, Dan</CardTitle>
            <CardDescription className="text-muted-foreground">
              Fullstack MERN developer | AI first-app py
            </CardDescription>
            <p className="text-sm text-muted-foreground">Location: Buenos Aires, Argentina</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-white">This agent is capable of gathering n summarizing web content autonomously. It integrates LLMs with tool use and planning to streamline knowledge extraction.
          A practical step in my shift toward building intelligent, autonomous systems as an AI-first dev.
        </p>
      </CardContent>

      <CardFooter className="flex flex-col items-start space-y-2">
        <p className="font-black text-white">Research agent tech stack</p>
        <div className="flex flex-wrap space-x-1 space-y-1">
          <Badge className="bg-[#3776AB]">Python</Badge>
          <Badge className="bg-[#009688]">FastAPI</Badge>
          <Badge className="bg-[#00B27F]">Langchain</Badge>
          <Badge className="bg-[#61DAFB]">React</Badge>
          <Badge className="bg-black border border-white">Next</Badge>
          <Badge className="bg-[#38BDF8]">Tailwindcss</Badge>
          <Badge className="bg-[#EC4899]">Framer Motion</Badge>
        </div>
      </CardFooter>
    </Card>
  )
}

export default ProfileCard