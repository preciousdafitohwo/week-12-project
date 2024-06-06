"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
    
export async function handleBooking(formData) {
    const { userId } = auth();

const profiles = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = $1`,
    [userId]);

const name = formData.get("name");
const email = formData.get("email");
const date = formData.get("date");
const time = formData.get("time");
const trainer = formData.get("trainer");

await db.query(`INSERT INTO bookings (profile_id, name, email, date, time, trainer) VALUES ($1, $2, $3, $4, $5, $6)`,[profiles.rows[0].id, name, email, date, time, trainer]);

  revalidatePath("/book");
  redirect("/book");
}