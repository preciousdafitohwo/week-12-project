"use client";
import {handleBooking} from "@/lib/actions"
import { useRef, useState } from "react";

export default function BookingForm () {
const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);
    
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Book a Session</h2>
        <form className="space-y-4" 
        ref={formRef}
        action={(formData) => {
          handleBooking(formData);
          formRef.current.reset();
          setShowSuccess(true);

        }}>
          
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your Name" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your Email Address"/>
          </div>
          <div>
            <label className="block text-gray-700">Date</label>
            <input type="date" name="date" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div>
            <label className="block text-gray-700">Time</label>
            <input type="time" name="time" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Booking time"/>
          </div>
          <div>
            <label className="block text-gray-700">Trainer</label>
            <select name="trainer" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="">Select a Trainer</option>  
              <option value="Yoga Trainer - Maya Patel">Yoga Trainer - Maya Patel</option>
              <option value="Strength Trainer - Jack Thompson">Strength Trainer - Jack Thompson</option>
              <option value="Swimming Trainer - Sarah Johnson">Swimming Trainer - Sarah Johnson</option>
              <option value="Cardio/Fitness Trainer - David Nguyen">Cardio/Fitness Trainer - David Nguyen</option>
            </select>
          </div>
          <div className="text-center">
          { !showSuccess &&<button type="submit" className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
              Book Now
            </button>}
            {showSuccess && <p className="bg-green-500 p-2 rounded-md font-bold">Booking Successful!</p>}
          </div>
          
        </form>
      </div>
    );
  };
  
  
  