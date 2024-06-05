import Image from "next/image";
export default function About() {
  return (
    <div className="about-container">
      <h1 className="font-bold text-6xl text-center p-3">
        StayActive Community
      </h1>
      <div className="main-about">
        <div className="sec1">
          <Image
            src="/assets/about.webp"
            alt="outdoor session"
            width={1000}
            height={1500}
          />
        </div>

        <div className="sec2">
          <h2 className="font-bold text-4xl text-center p-3">
            Welcome to StayActive!
          </h2>
          <p className="p-4">
            At StayActive, we are here to guide and support you as you
            complete your wellness journey. Our mission is to empower individuals
            to take control of their health and well-being through active living.
            We aim to promote holistic wellness, provide expert
            guidance, foster a supportive community, and encourage lifelong
            fitness. What We Offer Swimming: Dive into our comprehensive swimming
            guides. Strength Training: Discover dynamic workouts and personalized
            coaching. Wellness Articles: Stay informed with articles on nutrition,
            mental health, and more. Community Support: Connect with others on
            their wellness journey through our forums and social media groups.
            Join Us! Your wellness journey is unique, and we are here to support
            you every step of the way. Let&apos;s complete your wellness journey
            together with strength, resilience, and a sense of community at
            StayActive.com.
          </p>
        </div>
      </div>
    </div>
  );
}
