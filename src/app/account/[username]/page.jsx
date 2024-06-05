import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import NotFound from "./not-found";
import Link from "next/link";

export default async function Account({ params }) {
  const { userId } = auth();

  const profiles = await db.query(
    `SELECT * FROM profiles WHERE username = $1`, [params.username]
  );

  if (profiles.rows.length === 0) {
    return <NotFound />;
  }

  const currentUser = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = $1`, [userId]
  );

  const isCurrentUser = currentUser.rows[0]?.username === params.username;
  const currentProfileId = profiles.rows[0]?.id;

  const bookings = await db.query(`SELECT * FROM bookings WHERE profile_id = $1`, [currentProfileId]);

  return (
    <div className="bg-gray-100 p-6">
      <SignedIn>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-bold text-4xl text-center text-blue-700 mb-6">
            Welcome to your Profile: {profiles.rows[0]?.username}
          </h1>
          <div className="mb-6">
            <p className="text-lg"><strong>Age:</strong> {profiles.rows[0]?.age}</p>
            <p className="text-lg"><strong>Goals:</strong> {profiles.rows[0]?.goals}</p>
            <p className="text-lg"><strong>Bookings:</strong></p>
            {bookings.rows.length > 0 ? (
              bookings.rows.map((booking) => (
                <div key={booking.id} className="text-lg mb-2">
                  <p>You have an appointment on {new Date(booking.date).toLocaleDateString()} at {booking.time} with {booking.trainer}</p>
                </div>
              ))
            ) : (
              <p className="text-lg">No upcoming sessions</p>
            )}
            <p className="text-lg"><strong>You currently have:</strong> {bookings.rows.length} upcoming {bookings.rows.length === 1 ? "session" : "sessions"}</p>
          </div>
          <div className="text-center">
            <Link href="/edit-profile" className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out">
              Edit Profile/Account details
            </Link>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <NotFound />
      </SignedOut>
    </div>
  );
}
