import { useEffect, useState } from "react";

const Quote = () => {
  const [joke, setJoke] = useState<string>();
  useEffect(() => {
    const getRandomJokeEveryTwoSeconds = setInterval(async () => {
      const url = process.env.API_LINK || "https://dwh6k64yrlqcn.cloudfront.net/api/jokes";
      const jokeStream = await fetch(url);
      const res = await jokeStream.json();
      const joke = res.joke;
      setJoke(joke);
    }, 2000);

    return () => {
      clearInterval(getRandomJokeEveryTwoSeconds);
    };
  }, []);

  return (
    <div className="container">
      <p className="fade-in">{joke}</p>
    </div>
  );
};

export default Quote;
