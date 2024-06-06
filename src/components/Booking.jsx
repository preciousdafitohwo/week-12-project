import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export default async function BookingForm () {
    const { userId } = auth();

    const profiles = await db.query(
        `SELECT * FROM profiles WHERE clerk_id = $1`,
        [userId]);
        
    async function handleBooking(formData) {
        "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const date = formData.get("date");
    const time = formData.get("time");
    const trainer = formData.get("trainer");

    await db.query(`INSERT INTO bookings (profile_id, name, email, date, time, trainer) VALUES ($1, $2, $3, $4, $5, $6)`,[profiles.rows[0].id, name, email, date, time, trainer]);
      revalidatePath("/book");
      redirect("/book");
    }

    return (
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Book a Session</h2>
        <form className="space-y-4" action={handleBooking}>
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div>
            <label className="block text-gray-700">Date</label>
            <input type="date" name="date" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div>
            <label className="block text-gray-700">Time</label>
            <input type="time" name="time" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div>
            <label className="block text-gray-700">Trainer</label>
            <select name="trainer" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="">Select a Trainer</option>  
              <option value="Yoga Trainer - Maya Patel">Yoga Trainer - Maya Patel</option>
              <option value="Strength Trainer - Jack Thompson">Strength Trainer - Jack Thompson</option>
              <option value="Swimming Trainer - Sarah Johnson">Swimming Trainer - Sarah Johnson</option>
              <option value="Cardio/Fitness Trainer - David Nguyen">Cardio/Fitness Trainer - David Nguyen</option>
            </select>
          </div>
          <div className="text-center">
            <button type="submit" className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
              Book Now
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  
  