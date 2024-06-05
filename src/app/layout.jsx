import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import ProfileForm from "@/components/ProfileForm";


export const metadata = {
  title: "StayActive",
  description:
    "Bringing you complete wellness. Access our free online videos in different health and fitness discplines and book a session with one of our specialist trainers",
};

export default async function RootLayout({ children }) {
  const { userId } = auth();

  const profiles = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = $1`,
    [userId]
  );
  const username = profiles.rows[0]?.username;

  if (profiles.rowCount === 0 && userId) {
    await db.query(`INSERT INTO profiles (clerk_id) VALUES ($1)`, [userId]);
  }

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="icon" href="/logo.webp" type="image/webp" />
        </head>
        <body>
          <header>
            <Image
              src="/logo1.webp"
              alt="Stay Active Logo"
              width={200}
              height={200}
            />
            <nav>
              <Link href="/" className="link">
                Home
              </Link>
              <Link href="/about" className="link">
                About Us
              </Link>
              <Link href="/trainers" className="link">
                Personal Trainers
              </Link>
              <Link href="/book" className="link">
                Book
              </Link>
              <Link href={`account/${username}`} className="link">
                Account
              </Link>
            </nav>
            <div className="user-actions">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main className="main-content">
          <SignedIn>
              {profiles.rows[0]?.username && children}
              {!profiles.rows[0]?.username && <ProfileForm />}
            </SignedIn>
            <SignedOut>{children}</SignedOut>
            </main>
          <footer className="footer">
            <p>Made by Precious, Hannah, Nik & Themba &copy; 2024</p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
