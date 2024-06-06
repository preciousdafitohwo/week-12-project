"use client";
import { v4 as uuidv4 } from "uuid";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";

function App() {
  const cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          image="/assets/YellowWorkout.webp"
          title="30 day Outdoor program"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image="/assets/OutdoorWork.webp"
          title="Our Group Outdoor Classes"
      
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image="/assets/PersonalTrainer.webp"
          title="One to One PT Session"
    
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image="/assets/Strength.webp"
          title="A happy Customer"
      
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image="/assets/Yogawoman.webp"
          title="Outdoor Yoga Session."
      
        />
      ),
    },
  ];

  return (
    <div>
      <Carousel
        cards={cards}
        height="600px"
        width="50%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default App;
