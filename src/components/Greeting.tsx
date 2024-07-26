import { useState } from "preact/hooks";

interface GreetingProps {
  messages: string[];
}

export default function Greeting({ messages }: GreetingProps) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting} ! Merci de votre visite !</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        Nouvelle salutation
      </button>
    </div>
  );
}
