import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function ProfileForm() {
  const { userId } = auth();

  async function UpdateDb(formData) {
    "use server";
    const username = formData.get("username");
    const age = formData.get("age");
    const goals = formData.get("goals");

    await db.query(
      `UPDATE profiles SET username = $1, age = $2, goals = $3 WHERE clerk_id = $4`,
      [username, age, goals, userId]
    );
    // revalidatePath(`profile/${username}`);
    // redirect(`profile/${username}`);
    revalidatePath(`account/${username}`);
    redirect(`account/${username}`);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">Update your Details</h1>
      <form className="space-y-4" action={UpdateDb}>
        <div>
          <label className="block text-gray-700" htmlFor="username">Username:</label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="age">Age:</label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="number"
            name="age"
            placeholder="Enter your current age"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="goals">Fitness Goals:</label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            name="goals"
            placeholder="What are your fitness goals?"
            required
          />
        </div>
        <div className="text-center">
          <button
            className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
