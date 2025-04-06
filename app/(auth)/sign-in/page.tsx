import AuthForm from "@/components/AuthForm";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { Speech, Brain } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between h-full w-screen">
      <div className="hidden relative md:flex flex-row h-[full] w-full items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 -z-0 py-4 px-6">
          <Image src="/logo.png" height={24} width={24} alt="mockero-logo" />
          <h4 className="mt-2 font-semibold text-xl">Mockero AI</h4>
        </div>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
          )}
        />
        <div className=" relative z-10 self-end py-16 px-6 w-full">
          <div className="flex items-center mb-2">
            <Speech size={34} />
            <Brain size={34} className="ml-2" />
          </div>
          <h2 className="text-left text-4xl text-bold">Ready to Jump Back In?</h2>
          <p className="text-left mt-2">Log in to continue mastering your interviews</p>
        </div>
      </div>

      <div className="flex align-center justify-center h-full w-full md:w-1/2">
        <AuthForm type="sign-in" />
      </div>
    </div>
  )
};

export default Page;
