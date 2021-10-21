// serverless/index].ts
exports.handler = async (event, context) => {
  const url = "https://icanhazdadjoke.com/";
  try {
    const jokeStream = await fetch(url, {
      "headers": {
        "Accept": "application/json"
      }
    });
    const jsonJoke = await jokeStream.json();
    console.log(jsonJoke);
    return {
      statusCode: 200,
      body: JSON.stringify(jsonJoke)
    };
  } catch (err) {
    return { statusCode: 422, body: err.stack };
  }
};
//# sourceMappingURL=index].js.map
