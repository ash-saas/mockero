/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import Image from "next/image";
import { redirect } from "next/navigation";

import Agent from "@/components/Agent";
import { getRandomInterviewCover } from "@/lib/utils";


import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { getCurrentUser } from "@/lib/actions/auth.action";
import DisplayTechIcons from "@/components/DisplayTechIcons";
import { dummyInterviews } from "@/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const InterviewDetails = async ({ params, searchParams }: RouteParams) => {

  const { id } = await params;
  const { isTemplate } = await searchParams;

  const user = await getCurrentUser();
  let interview = await getInterviewById(id);

  if (isTemplate != "true") {
    if (!interview) redirect("/dashboard");
  }
  else {
    const interviewId = id;
    interview = dummyInterviews.find((interview) => interview.id === interviewId)!;
  }

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  return (
    <>
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover size-[40px]"
            />
            <h3 className="capitalize">{interview?.role} Interview</h3>
          </div>

          <DisplayTechIcons techStack={interview?.techstack!} />
        </div>

        <div className="flex flex-center">
          <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize mr-2">
            {interview?.type}
          </p>
        </div>
      </div>

      <Accordion collapsible type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Read Instructions Before Attempting The Interview</AccordionTrigger>
          <AccordionContent>
            <h4 className="text-xl font-semibold">Interview Simulation</h4>
            This interview is an interview simulation between you and an AI agent. Please make sure your mic is set up properly and is not already in use by another application or screen.
          </AccordionContent>
          <AccordionContent>
            <h4 className="text-xl font-semibold">What to expect?</h4>
            <p>This interactive session simulates a real interview between you and an AI agent. The AI will present you with a series of questions related to the role you've selected. You can expect to answer between 5 to 7 questions.</p>
          </AccordionContent>
          <AccordionContent>
            <h4 className="text-xl font-semibold">Topics</h4>
            <div className="flex items-center flex-row mt-4">
              {
                interview.techstack.map((skill: string, index: number) => {
                  return (
                    <div key={index}>
                      <p className="mr-2 bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize w-max">
                        {skill}
                      </p>
                    </div>
                  )
                })
              }
            </div>
          </AccordionContent>
          <AccordionContent>
            <h4 className="text-xl font-semibold">Difficulty / Level</h4>
            <p className="bg-dark-200 px-4 py-2 mt-4 rounded-lg h-fit capitalize w-max">
              {interview?.level}
            </p>
          </AccordionContent>
          <AccordionContent>
            <p className="text-amber-300">The company logo shown is a placeholder and should not be interpreted as an indication that these questions originate from or are used by the depicted organization. These questions are presented independently.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Agent
        userName={user?.name!}
        userId={user?.id}
        interviewId={id}
        type="interview"
        questions={interview?.questions}
        feedbackId={feedback?.id}
        isTemplate={isTemplate}
      />
    </>
  );
};

export default InterviewDetails;
