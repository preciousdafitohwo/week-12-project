import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import App from "@/components/Services";
export default function Home() {
  return (
    <div>
      <div className="main-div">
        <div className="section-1 justify-center home">
          <div>
            <h1 className="font-bold text-6xl">FITNESS ONLINE</h1>
            <p className="text-2xl">
              Achieve complete wellness through StayActive
            </p>
            <SignedIn>
              <Image className="mt-10"
              src="/assets/TheGym3.webp"
              alt="group yoga"
              width={1000}
              height={400}
              />
            </SignedIn>
            <SignedOut>
            <button className="p-3 bg-green-600 text-6xl rounded-lg	 ">
              <SignInButton className="sign-in-btn self-center" />
            </button>
            </SignedOut>
          </div>
        </div>
        <div className="section-1">
          <App />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-6xl text-center p-2">
          Health and Fitness Tips
        </h1>
        <ul>
          <li>
            <strong>Walking: </strong>
            The average adult will walk 65,000 in their lifetime which is the
            equivalent of walking 3 times around the world! Walking is a great
            way to improve your heart health, build stamina, burn calories, and
            is a form of aerobic activity!
          </li>
          <li>
            <strong>Swimming: </strong>
            Swimming burns almost 40% more calories than biking per hour. ’Fast
            pool’ is a kind of swimming pool with an effective gutter system
            that prevents the wave from creating.
          </li>
          <li>
            <strong>Yoga: </strong>Yoga refines and purifies 8 energy centres of
            the body called ‘chakras’. Yoga should be practiced while wearing
            loose clothes. (sorry yoga pants). Over 100 styles of yoga have
            evolved in the past couple of centuries. Yoga is over 5000-year-old.
            The word “yoga” comes from Sanskrit and it means “union” yoga.
          </li>
          <li>
            <strong>Personal Trainer: </strong>
            Personal Trainers are more than just the pillars of fitness and
            dedication many of us perceive them to be. To reach the state
            they’re at now, and to be able to teach others how to become better
            versions of themselves, requires more than just physical training..
          </li>
        </ul>
      </div>
    </div>
  );
}

//landing page - first page -prompts users to sign-up or sign in to get started/access services

// homepage - Logo, slogan...see what our specialists can offer and how to book- static nav, body(), footer

//about page - our goal/mission and how we started this journey
