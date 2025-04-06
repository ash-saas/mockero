import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
function Pricing() {
    return (
        <div className="flex w-full md:w-full mx-auto flex-col justify-around my-8 md:flex-row lg:flex-row gap-4 md:gap-8">
            <div className="rounded-2xl border-2 border-gray-200 p-4 shadow-xs sm:order-last sm:px-8 lg:p-8">
                <h2 className="text-lg font-bold text-white">Basic</h2>
                <h1 className="text-xl md:text-2xl mt-4 font-bold text-white">Free</h1>
                <p className="text-white mt-2">Perfect for exploring and occasional use</p>

                <ul>
                    <li className="flex items-center gap-2 mt-4">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-white">3 Interviews</span>
                    </li>
                    <li className="flex items-center gap-2 mt-4">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-white">Unlimited Retakes</span>
                    </li>
                    <li className="flex items-center gap-2 mt-4">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-white">Access to Templates</span>
                    </li>
                    <li className="flex items-center gap-2 mt-4">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-white">AI-Provided Feedback</span>
                    </li>
                </ul>

                <a href="/sign-in">
                    <Button className="mt-8 cursor-pointer bg-transparent border-2 border-white text-white hover:bg-white hover:text-black">Get started for free</Button>
                </a>
            </div>

            <div className="rounded-2xl p-4 border-2 border-gray-200 shadow-xs sm:order-last sm:px-8 lg:p-8">
                <h2 className="text-lg font-bold text-white">Mockero AI Pro</h2>
                <h1 className="text-xl md:text-2xl mt-4 font-bold text-white">$6.49 <span className="text-white/50 text-sm font-normal">/ week</span></h1>
                <p className="text-white mt-2">Perfect for last minute interview preprations</p>

                <ul>
                    <li className="flex items-center gap-2 mt-4">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="bg-gradient-to-r font-semibold from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Unlimited Interviews</span>
                    </li>
                    <li className="flex items-center gap-2 mt-4">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-white">Unlimited Retakes</span>
                    </li>
                    <li className="flex items-center gap-2 mt-4">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-white">Access to Templates</span>
                    </li>
                    <li className="flex items-center gap-2 mt-4">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-white">AI-Provided Feedback</span>
                    </li>
                </ul>

                <a href="/sign-in">
                    <Button className="mt-8 bg-gradient-to-r cursor-pointer from-purple-500 via-pink-500 to-red-500 text-white">Get Started
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </a>
            </div>

            <div className="rounded-2xl border-2 border-purple-400 p-4 shadow-xs sm:order-last sm:px-8 lg:p-8">
                <h2 className="text-lg font-bold text-white">Mockero AI Pro</h2>
                <h1 className="text-xl md:text-2xl mt-4 font-bold text-white">$11.99 <span className="text-white/50 text-sm font-normal">/ month</span> <span className="text-emerald-500 text-sm font-normal">Better value</span></h1>
                <p className="text-white mt-2">Perfect for road to glory (that dream job!)</p>

                <ul>
                    <li className="flex items-center gap-2 mt-4">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="bg-gradient-to-r font-semibold from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Unlimited Interviews</span>
                    </li>
                    <li className="flex items-center gap-2 mt-4">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-white">Unlimited Retakes</span>
                    </li>
                    <li className="flex items-center gap-2 mt-4">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-white">Access to Templates</span>
                    </li>
                    <li className="flex items-center gap-2 mt-4">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-white">AI-Provided Feedback</span>
                    </li>
                </ul>

                <a href="/sign-in">
                    <Button className="mt-8 cursor-pointer">Yes! I like saving money</Button>
                </a>
            </div>

        </div>
    );
}

export default Pricing;