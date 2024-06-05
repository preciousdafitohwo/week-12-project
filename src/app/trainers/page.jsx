import Styles from "@/app/trainers/trainers.module.css";
import Image from "next/image";
import EnquiriesForm from "@/components/EnquiriesForm";

export default function Trainers() {
  return (
    <div className="bg-gray-100">
      <h1 className="text-center font-bold text-6xl p-3 text-blue-800">Personal Trainers</h1>
      <div className={Styles.trainers}>
        <div className="text-center p-3 mt-5 bg-white shadow-lg rounded-lg">
          <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
            <Image
              src="/assets/MayaPatel2.webp"
              alt="personal trainer"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="font-bold text-2xl text-blue-700 mt-4">Specialty: Yoga Trainer</h2>
          <p className="font-semibold text-gray-700">Name: Maya Patel</p>
          <p className="text-gray-600 p-2">
            Experienced yoga teacher specializing in Hatha, Vinyasa, and Yin styles. Focused on alignment, breathwork, and mindfulness for balance and strength.
          </p>
        </div>
        <div className="text-center p-3 mt-5 bg-white shadow-lg rounded-lg">
          <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
            <Image
              src="/assets/strength-training.webp"
              alt="personal trainer"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="font-bold text-2xl text-blue-700 mt-4">Specialty: Strength Trainer</h2>
          <p className="font-semibold text-gray-700">Name: Jack Thompson</p>
          <p className="text-gray-600 p-2">
            Certified personal trainer with a background in sports science and strength and conditioning. Offers dynamic workouts and personalised coaching for all fitness levels.
          </p>
        </div>
        <div className="text-center p-3 mt-5 bg-white shadow-lg rounded-lg">
          <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
            <Image
              src="/assets/swimming.webp"
              alt="personal trainer"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="font-bold text-2xl text-blue-700 mt-4">Specialty: Swimming Instructor</h2>
          <p className="font-semibold text-gray-700">Name: Sarah Johnson</p>
          <p className="text-gray-600 p-2">
            Competitive swimmer turned coach. Expert in stroke mechanics, breathing techniques, and endurance training for swimmers of all levels.
          </p>
        </div>
        <div className="text-center p-3 mt-5 bg-white shadow-lg rounded-lg">
          <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
            <Image
              src="/assets/david.webp"
              alt="personal trainer"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="font-bold text-2xl text-blue-700 mt-4">Specialty: Cardio/Fitness Trainer</h2>
          <p className="font-semibold text-gray-700">Name: David Nguyen</p>
          <p className="text-gray-600 p-2">
            Experienced personal trainer specialising in HIIT, circuit training, and cardiovascular conditioning. Energetic workouts designed to boost metabolism and improve overall fitness.
          </p>
        </div>
      </div>
      <div className="p-6">
        <EnquiriesForm />
      </div>
    </div>
  );
}
