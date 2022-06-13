const Twitter = require("twitter-lite");
const creds = {
  app_id: "20819556",
  name: "Un1Feed",
  consumer_api_key: "XNfomafRge6o2GnAUhAhoszoZ",
  consumer_api_secret_key: "q0iIRsuZmcP1uMcul8GDizhAz4g4EzcEI4fCU5tSU4Ys3TEeAx",
  bearer_token:
    "AAAAAAAAAAAAAAAAAAAAAGSuPQEAAAAAFqXUycgpS0wZyY41vPwO7cSZr6w%3Dq3pfYZGAnBlpKX4gxMSQCiEltnx1fdhlktP6GpViN2ZDnqoazZ",
  access_token: "1089947697748992000-GeUtJglZGjhoIb4iUTqiKVk8Xr2cWP",
  access_token_secret: "wPYBIWxfqKmNuBNKvZR7mNV5wDUdG4HxZS7ftI4Ft1yHg"
};

const client = new Twitter({
  subdomain: "api", // "api" is the default (change for other subdomains)
  version: "1.1", // version "1.1" is the default (change for other subdomains)
  consumer_key: creds.consumer_api_key, // from Twitter.
  consumer_secret: creds.consumer_api_secret_key, // from Twitter.
  access_token_key: creds.access_token, // from your User (oauth_token)
  access_token_secret: creds.access_token_secret // from your User (oauth_token_secret)
});

client
  .get("account/verify_credentials")
  .then((results) => {
    console.log("results", results);
  })
  .catch(console.error);
