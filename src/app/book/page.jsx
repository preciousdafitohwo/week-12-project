import BookingForm from "@/components/Booking"
import { SignedIn,SignedOut,SignInButton } from "@clerk/nextjs"

export default function Book () {
    return (
        <div>
            <SignedIn>
            <div>
                <h1 className="font-bold text-4xl text-center">Make a Booking with one of our Personal Trainers</h1>
                <p className="text-center p-3"><strong>Please note: </strong>Our Personal Trainnig Sessions are for a duration of 1 Hour. </p>
            </div>
            <BookingForm/>
            </SignedIn>
            <SignedOut>
                <p>You need to be Signed-in to book a Personal Trainning session</p>
                <SignInButton/>
            </SignedOut>
        </div>
    )
}
   