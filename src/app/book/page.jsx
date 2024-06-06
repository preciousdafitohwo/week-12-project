import BookingForm from "@/components/Booking"
import { SignedIn,SignedOut,SignInButton } from "@clerk/nextjs"
import styles from '@/app/book/book.module.css'

export default function Book () {
    return (
        <div className={styles.bookingSection}>
            <SignedIn>
            <div className="p-5">
                <h1 className="font-bold text-4xl text-center booking">Make a Booking with one of our Personal Trainers</h1>
                <p className="text-center text-2xl p-3 booking"><strong>Please note: </strong>Our Personal Training Sessions are for a duration of 1 Hour. </p>
            </div>
            <BookingForm/>
            </SignedIn>
            <SignedOut>
                <div className="p-10">
                <h1 className="font-bold">You need to be Signed-in to book a Personal Trainning session with StayActive</h1>
                <SignInButton/>
                </div>
            </SignedOut>
        </div>
    )
}
   