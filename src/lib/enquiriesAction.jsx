"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export async function UpdateEnquiries(formData) {

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

  
  await db.query(`INSERT INTO enquiries (name, email, subject, message) VALUES ($1, $2, $3, $4)`, [name, email, subject, message]);

  revalidatePath("/trainers");
    redirect("/trainers");
  };