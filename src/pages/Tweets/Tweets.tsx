import { FormEvent, useState } from "react";
import { Separator } from "../../components/Separator/Separator";
import { TimelineHeader } from "../../components/TimelineHeader/TimelineHeader";
import { Tweet } from "../../components/Tweet/Tweet";
import "./Tweets.scss";

const Answers = [
  "This project was developed using React and Vite, providing a fast and efficient development environment. Vite is a modern build tool that optimizes the build process and improves application performance.",
  "Technologies Used!",
  "React – A library for building dynamic and reusable interfaces Vite – A lightning-fast build tool for modern projects. JavaScript/TypeScript – Clean coding with optional static typing. CSS/Tailwind (or another applicable technology) – Efficient and responsive styling.",
];
export const Tweets = () => {
  const [answers, setAnswers] = useState(Answers);
  const [answersForm, setAnswersForm] = useState("");

  const handleSubimit = (event: FormEvent) => {
    event.preventDefault();
    const newAnswers = [answersForm, ...answers];
    setAnswers(newAnswers);
    setAnswersForm("");
  };

  console.log(answersForm);
  return (
    <main className="tweets">
      <TimelineHeader title="Tweet" />
      <Tweet
        content={
          "Project: React Application with Vite: "
        }
      />
      <Separator />
      <form onSubmit={handleSubimit} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/nayamec.png"
            alt="Perfil imagem"
          />
          <textarea
            onChange={(e) => setAnswersForm(e.target.value)}
            value={answersForm}
            id="tweet"
            required
            placeholder="Tweet your answer"
          ></textarea>
        </label>
        <button className="answer-tweet" type="submit">
          Tweet
        </button>
      </form>

      {answers.map((tweet) => {
        return <Tweet content={tweet} key={tweet} />;
      })}
    </main>
  );
};
