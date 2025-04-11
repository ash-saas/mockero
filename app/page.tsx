import React from 'react'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import AnimationContainer from '@/components/AnimationContainer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import SparkleButton from '@/components/SparkleButton'
import { Speech, MessageSquareHeart } from 'lucide-react'
import GradientText from '@/components/GradientText'
import { MagicCard } from '@/components/magicui/magic-card'
import Pricing from '@/components/Pricing'
import NavBar from '@/components/NavBar'

const Page = () => {
    return (
        <MaxWidthWrapper>
            <NavBar />
            <Image src="/purple-gradient-background.svg" alt="Hero Background" width={1920} height={1080} className="absolute inset-0 -z-1 h-[500px] w-[500px] md:h-auto md:w-auto lg:h-auto lg:w-auto xl:h-auto xl:w-auto" />
            <div className="flex flex-col items-center justify-center w-full bg-gradient-to-t mt-20 from-background">
                <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
                    <SparkleButton text="Ace every interview  🚀" />
                    <h1 className="text-foreground text-center py-4 text-4xl font-semibold tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-7xl !leading-[1.15] w-full font-heading">
                        Ace Interviews With <br /> <GradientText text="AI-Powered" />
                        <> </>Mock Sessions
                    </h1>
                    <p className="mb-6 text-md tracking-tight text-muted-foreground md:text-xl text-balance">
                        Practice with real-time AI Voice Agents to experience the closest thing to a real interview.
                        <br className="hidden md:block" />
                    </p>
                    <a href='/sign-in'>
                        <Button className="cursor-pointer">
                            Start For Free
                        </Button>
                    </a>
                </AnimationContainer>

                <AnimationContainer delay={0.2} className="relative pt-20 md:py-32 px-2 bg-transparent w-full">
                    <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                        <HeroVideoDialog videoSrc="/assets/hero-video.mp4" thumbnailAlt="Mockero AI Demo Video" thumbnailSrc="/assets/hero-video-thumbnail.png" />
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.2} className="relative pt-16 pb-20 md:py-8 bg-transparent w-full">
                    <div id='features' className="flex flex-col items-center justify-center w-full">
                        <SparkleButton text="Features" />
                        <p className="py-6 text-md tracking-tight text-muted-foreground md:text-xl text-balance text-center">
                            Never be unprepared for your next interview again
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-between w-full">
                            <MagicCard className="px-6 py-10 border-2 w-full md:w-[500px] border-foreground/20 rounded-xl mt-4">
                                <Speech size={32} />

                                <div className="flex items-center justify-center my-8">
                                    <Image src="/diagram.png" height={250} width={250} alt='soundwave' />
                                </div>

                                <h1 className="text-2xl mt-4 text-white font-semibold text-left">
                                    Prepare with our <GradientText text="AI Voice Agent" />
                                </h1>
                                <p className="text-md mt-2 text-white">
                                    Our AI Voice Agents will imitate a real interviewer and ask you questions based on your requirements.
                                </p>

                            </MagicCard>

                            <MagicCard className="px-6 py-10 border-2 w-full md:w-[500px] border-foreground/20 rounded-lg mt-4">

                                <MessageSquareHeart size={32} />

                                <div className="flex items-center justify-center my-8">
                                    <Image src="/sparkle.png" height={240} width={240} alt='soundwave' />
                                </div>

                                <h5 className="text-2xl mt-4 text-white font-semibold text-left">
                                    Get Instant <GradientText text="Feedback" /> On Your Attempt
                                </h5>
                                <p className="text-md mt-2 text-white">
                                    Detailed breakdown of your performance. Iterate on your responses and get better at interviews.
                                </p>

                            </MagicCard>

                        </div>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.2} className="relative md:pt-16 pt-16 pb-20 md:py-8 bg-transparent w-full">
                    <SparkleButton text='Pricing' />
                    <p id='pricing' className="text-md py-6 mt-2 text-center text-white">
                        Simple Pricing. No hidden charges.
                    </p>
                    <div className='h-full m-auto flex item-center justify-center flex-col'>
                        <Pricing isPricingPage={false} />
                    </div>
                </AnimationContainer>
            </div>
        </MaxWidthWrapper>
    )
}

export default Page