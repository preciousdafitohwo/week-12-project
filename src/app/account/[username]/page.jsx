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

  const currentUser = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = $1`, [userId]
  );
  const isCurrentUser = currentUser.rows[0]?.username === params.username;
  const currentProfileId = profiles.rows[0]?.id;

  if (profiles.rows.length === 0) {
    
    return <NotFound />;
  }
  return (
    <div>
      <SignedIn>
      <h1>This is the user account/profile page</h1>
      <p><strong>Username:</strong> {profiles.rows[0]?.username}</p>
      <p><strong>Age:</strong> {profiles.rows[0]?.age}</p>
      <p><strong>Goals:</strong> {profiles.rows[0]?.goals}</p>
      <p><strong>Bookings:</strong> jkahkdjcank</p>
      <p>we can render some information about each specific user her</p>
      <Link href="/edit-profile">Edit Profile/Account details</Link>
      </SignedIn>
      <SignedOut>
        <NotFound />
      </SignedOut>
    </div>
  );
}
