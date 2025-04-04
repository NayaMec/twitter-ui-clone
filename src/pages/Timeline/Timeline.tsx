import "./Timeline.scss";
import { Tweets } from "../../App";
import { Separator } from "../../components/Separator/Separator";
import { TimelineHeader } from "../../components/TimelineHeader/TimelineHeader";
import { Tweet } from "../../components/Tweet/Tweet";
import { FormEvent, useState } from "react";

export const Timeline = () => {
  const [tweets, setTweets] = useState(Tweets);
  const [tweetForm, setTweetForm] = useState("");

  const handleSubimit = (event: FormEvent) => {
    event.preventDefault();
    const newTweet = [
      {
        id: Math.floor(Math.random()).toString(),
        content: tweetForm,
      },
      ...tweets,
    ];
    setTweets(newTweet);
    setTweetForm("");
  };
  return (
    <main className="timeline">
      <TimelineHeader title="Home" />
      <form onSubmit={handleSubimit} className="new-timeline-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/Nayamec.png"
            alt="Perfil imagem"
          />
          <textarea
            onChange={(e) => {
              setTweetForm(e.target.value);
            }}
            value={tweetForm}
            required
            id="tweet"
            placeholder="O que você está pensando?"
          ></textarea>
        </label>
        <button className="new-tweet" type="submit">
          Tweet
        </button>
      </form>
      <Separator />
      {tweets.map((tweet) => {
        return <Tweet content={tweet.content} key={tweet.id} />;
      })}
    </main>
  );
};
