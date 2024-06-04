import Image from "next/image";
export default function About() {
  return (
    <div className="about-main">
      <h1 className="font-bold text-6xl text-center p-3">
        StayActive Community
      </h1>
      <div>
        <Image
          src="https://media.discordapp.net/attachments/1246091709662761078/1247117297089380362/cardio.webp?ex=665edbfd&is=665d8a7d&hm=95a1bd4a8dbe7fba53ac385377a2c00e0a6f3d01d57b68d9bf4bb6ca7ab8c0ed&=&format=webp&width=1286&height=857"
          alt="man exercising"
          width={1000}
          height={1000}
        />
      </div>
      <div>
        <h2>Welcome to StayActive!</h2>
        <p>
          About Us At StayActive, we are here to guide and support you as you
          complete your wellness journey. Our mission is to empower individuals
          to take control of their health and well-being through active living.
          Our Mission We aim to promote holistic wellness, provide expert
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
  );
}
