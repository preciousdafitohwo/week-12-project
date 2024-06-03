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
          image="https://images.unsplash.com/photo-1627483298606-cf54c61779a9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="The Great Gurn-Off: Ultimate Grimace Battle"
          paragraph=""
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Gurning Gala: Faces Gone Wild"
          paragraph=""
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image="https://images.unsplash.com/photo-1541953453395-3a1b1ff8f935"
          title="The Chronicles of Chins: Gurner's Quest"
          paragraph=""
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image="https://images.unsplash.com/photo-1569363363196-11df019e7cea"
          title="Gurnapalooza: Face-Off Extravaganza"
          paragraph=""
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          image="https://images.unsplash.com/photo-1526045612212-70caf35c14df"
          title="Tim is very handsome."
          paragraph=""
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
