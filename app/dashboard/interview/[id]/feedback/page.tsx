import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { dummyInterviews } from "@/constants";
import { ArrowBigUpDash, Gavel, NotepadText, ShieldPlus } from "lucide-react";

const Feedback = async ({ params, searchParams }: RouteParams) => {
  const { id } = await params;
  const { isTemplate } = await searchParams;

  const user = await getCurrentUser();
  let interview

  if (isTemplate != "true") {
    interview = await getInterviewById(id);
    if (!interview) redirect("/dashboard");
  } else {
    const interviewId = id;
    interview = dummyInterviews.find((interview) => interview.id === interviewId)!;
  }

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  return (
    <section className="section-feedback">
      <div className="flex flex-row justify-center">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Feedback on the interview -{" "}
          <span className="capitalize">{interview.role}</span> Interview
        </h1>
      </div>

      <div className="flex flex-row justify-center ">
        <div className="flex flex-row gap-5">
          {/* Overall Impression */}
          <div className="flex flex-row gap-2 items-center">
            <Image src="/star.svg" width={22} height={22} alt="star" />
            <p>
              Overall Impression:{" "}
              <span className="text-purple-400 font-bold">
                {feedback?.totalScore}
              </span>
              /100
            </p>
          </div>

          {/* Date */}
          <div className="flex flex-row gap-2">
            <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
            <p>
              {feedback?.createdAt
                ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex flex-col gap-4">
        <NotepadText size={34} color="#875ab0" />
        <h3>Overview</h3>
        <p>{feedback?.finalAssessment}</p>
      </div>

      {/* Interview Breakdown */}
      <div className="flex flex-col gap-4">
        <Gavel size={34} color="#875ab0" />
        <h3>Breakdown of the Interview:</h3>
        {feedback?.categoryScores?.map((category, index) => (
          <div key={index}>
            <p className="font-bold">
              {index + 1}. {category.name} ({category.score}/100)
            </p>
            <p>{category.comment}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <ShieldPlus size={34} className="mb-4" color="#875ab0" />
          <h3>Strengths</h3>
        </div>
        <ul>
          {
            feedback?.strengths.length === 0 ? <p>No strengths reported by AI</p> :
              feedback?.strengths?.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))
          }
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <ArrowBigUpDash size={34} color="#875ab0" />
        <h3>Areas for Improvement</h3>
        <ul>
          {
            feedback?.areasForImprovement.length === 0 ? <p>No areas for improvement reported by AI</p> :
              feedback?.areasForImprovement?.map((area, index) => (
                <li key={index}>{area}</li>
              ))
          }
        </ul>
      </div>

      <div className="buttons mt-8">
        <Button className="flex-1 bg-black p-4">
          <Link href="/dashboard" className="flex w-full justify-center">
            <p className="text-sm capitalize font-semibold text-white text-center">
              Back to dashboard
            </p>
          </Link>
        </Button>

        <Button className="bg-white flex-1 p-4">
          <Link
            href={`/dashboard/interview/${id}?isTemplate=${isTemplate}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black text-center">
              Retake Interview
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Feedback;
