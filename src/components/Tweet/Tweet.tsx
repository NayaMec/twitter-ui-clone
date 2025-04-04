import { ArrowsCounterClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.scss";

interface TweetProps {
  content: string;
}
import { Link } from "react-router-dom";

export const Tweet = ({ content }: TweetProps) => {
  return (
    <Link className="tweet" to={"/tweet"}>
      <img src="http://github.com/nayamec.png" alt="Avatar" />

      <div className="tweet-content">
        <div className="tweet-header">
          <strong>Nayamec</strong>
          <span>@Nayamec</span>
        </div>

        <p>{content}</p>

        <div className="tweet-content-footer">
          <button>
            <ChatCircle size={24} />
            {12}
          </button>
          <button>
            <ArrowsCounterClockwise size={24} />
            {43}
          </button>
          <button>
            <Heart size={24} />
            {111}
          </button>
        </div>
      </div>
    </Link>
  );
};
