const nodefetch = require("node-fetch");

exports.handler = async (event, context) => {
  const url = "https://icanhazdadjoke.com/";
  try {
    const jokeStream = await nodefetch(url, {
      headers: {
        Accept: "application/json"
      }
    });
    const jsonJoke = await jokeStream.json();
    return {
      statusCode: 200,
      body: JSON.stringify(jsonJoke)
    };
  } catch (err) {
    return { statusCode: 422, body: err.stack };
  }
};
