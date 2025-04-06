import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <div>
        <h3>Create a custom interview to match your requirements</h3>
        <p className="mt-2 text-gray-400">Tell AI the role, level, and skills you want to cover in this mock interview</p>
        <p className="text-gray-400">Allow time for AI to process your response between questions</p>
      </div>

      <Agent
        userName={user?.name!}
        userId={user?.id}
        profileImage={user?.profileURL}
        type="generate"
      />
    </>
  );
};

export default Page;
