import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
};

export default function Typewriter({ text, speed = 100 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let currentText = "";
    for (let i = 0; i < text.length; i++) {
      const delay = Math.random();
      setTimeout(
        () => {
          currentText += text[i];
          setDisplayed(currentText);
        },
        i * speed + delay * speed
      );
    }
  }, [text, speed]);

  return (
    <h1 className="text-center text-3xl font-light tracking-tighter md:text-5xl">
      {displayed}
      <span className="animate-blink">|</span>
    </h1>
  );
}
