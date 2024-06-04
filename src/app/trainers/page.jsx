import Styles from "@/app/trainers/trainers.module.css";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";

export default function Trainers() {
  return (
    <div>
      <h1 className="text-center font-bold text-6xl p-3">Personal trainers</h1>
      <div className={Styles.trainers}>
        <div className="text-center p-3 mt-5">
          <Image
            src="https://media.discordapp.net/attachments/1246091709662761078/1247202578119397437/MayaPatel2.png?ex=665f2b6a&is=665dd9ea&hm=106d4a670033c4ff9a018989e7ceef2e3184352ea0dedb7443670a552ca3ce9f&=&format=webp&quality=lossless"
            alt="pics"
            width={550}
            height={500}
          />
          <h2>Specialty: Yoga Trainer</h2>
          <p>Name: Maya Patel</p>
          <p>
            Skills:Experienced yoga teacher specializing in Hatha, Vinyasa, and
            Yin styles. Focused on alignment, breathwork, and mindfulness for
            balance and strength.
          </p>
        </div>
        <div className="text-center p-3 mt-5">
          <Image
            src="https://media.discordapp.net/attachments/1246091709662761078/1247202987265228880/strength-training.png?ex=665f2bcc&is=665dda4c&hm=ba36a02b096c33037e7c4cdbc716d69ecb7716e570860c213b177ba88fcb4e9c&=&format=webp&quality=lossless&width=478&height=350"
            alt="pics"
            width={550}
            height={500}
          />
          <h2>Specialty: Strength Trainer</h2>
          <p>Name: Jack Thompson</p>
          <p>
            Skills: Certified personal trainer with a background in sports
            science and strength and conditioning. Offers dynamic workouts and
            personalised coaching for all fitness Level.
          </p>
        </div>
        <div className="text-center p-3 mt-5">
          <Image
            src="https://media.discordapp.net/attachments/1246091709662761078/1247204316897345606/swimming.png?ex=665f2d09&is=665ddb89&hm=bd68c8985b95c68e446f8673f502e3329ef24948393d7c2d3de6d92942a18d0d&=&format=webp&quality=lossless"
            alt="pics"
            width={550}
            height={500}
          />
          <h2>Specialty: Swimming Trainer</h2>
          <p>Name: Sarah Johnson</p>
          <p>
            Skills: Competitive swimmer turned coach. Expert in stroke
            mechanics, breathing techniques and endurance trainning for swimmers
            of all levels.
          </p>
        </div>
        <div className="text-center p-3 mt-5">
          <Image
            src="https://media.discordapp.net/attachments/1246091709662761078/1247202220693393438/9k.png?ex=665f2b15&is=665dd995&hm=5effeab42ab15bb27c7ab5c3c4e5b2d8f8adf42282824fdcf50860b6073f5b35&=&format=webp&quality=lossless"
            alt="pics"
            width={550}
            height={500}
          />
          <h2>Specialty: Cardio/Fitness Trainers</h2>
          <p>Name: David Nguyen</p>
          <p>
            Skills:Experienced personal trainer specialising in HIIT, circuit
            trainning and cardiovascular conditioning. Energetic workouts
            designed to boost metabloism and improve overall fitness
          </p>
        </div>
      </div>
      <BookingForm />
    </div>
  );
}
