"use client";

import Button from "@/components/Button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HomePageImage from "@/assets/brainburst.jpg";
import Typewriter from "typewriter-effect";

const Home = () => {
  const router = useRouter();
  const handleButtonClick = () => router.push("/quiz");

  return (
    <div className="text-center">
      <h3 className="text-white pt-9 font font-semibold font-quicksand ">
        <Typewriter
          options={{
            strings: [
              "Unleash Your Mind: Where Knowledge Sparks and Brains Burst!",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h3>
      <p className="text-white font-quicksand font-medium pt-7">
        Welcome to our exciting quiz app! We are thrilled to have you on board
        for a journey filled with knowledge, fun, and a dash of friendly
        competition. Get ready to test your wits, challenge your friends, and
        discover new facts. Let the quizzing begin, and may the best minds
        prevail!
      </p>
      <Image
        className="max-w-[250px] w-full max-h-[350px] pt-8 mx-auto "
        src={HomePageImage}
        alt="home-page-image"
      />

      <Button text="Let's Begin" onClick={handleButtonClick} />
    </div>
  );
};

export default Home;
