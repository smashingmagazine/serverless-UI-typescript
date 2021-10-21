import { useEffect, useState } from "react";
import { clearInterval } from "timers";

const Quote = () => {
  const [joke, setJoke] = useState<string>();
  useEffect(() => {
    const getRandomJoke = setInterval(async () => {
      const url = "https://dwh6k64yrlqcn.cloudfront.net/api/jokes";
      const jokeStream = await fetch(url);
      const res = await jokeStream.json();
      const joke = res.joke;
      setJoke(joke);
    }, 2000);

    return () => {
      clearInterval(getRandomJoke);
    };
  }, []);

  return (
    <div className="container">
      <p className="fade-in">{joke}</p>
    </div>
  );
};

export default Quote;
