import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default function BookingForm() {
  const { userId } = auth();
  async function handleUpdatesBooking(formData) {
    "use server";
    const username = formData.get("username");
    const date = formData.get("date");
    const duration = formData("duration");

    await db.query(
      `UPDATE bookings SET username = '${username}', date='${date}', duration='${duration}'`
    );
    revalidatePath("/");
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 align-middle">Your Enquiries</h2>
      <form action={handleUpdatesBooking} className="space-y-4">
        <input
          name="trainer"
          placeholder="Trainer's Name"
          className="w-full py-2 px-4 border border-gray-300 rounded-md 
        focus:outline-none focus:border-blue-500"
        />
        <input
          name="specilaty"
          placeholder="Trainer Speciality"
          className="w-full py-2 px-4 border border-gray-300 rounded-md 
        focus:outline-none focus:border-blue-500"
        />
        <input
          date="number"
          placeholder="Session Date"
          className="w-full py-2 px-4 border border-gray-300 rounded-md 
        focus:outline-none focus:border-blue-500"
        />
        <input
          duration="time"
          placeholder="Session Time"
          className="w-full py-2 px-4 border border-gray-300 rounded-md 
        focus:outline-none focus:border-blue-500"
        />
        <textarea
          message="content"
          content="Message"
          className="w-full py-2 px-4 border border-gray-300 rounded-md 
        focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          class="w-full py-2 px-4 border border-gray-300 rounded-md 
        focus:outline-none focus:border-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
