import { Sparkle } from "phosphor-react";
import "./TimelineHeader.scss";

interface TimelineHeaderProps {
  title: string;
}

export const TimelineHeader = (props: TimelineHeaderProps) => {
  return (
    <div className="timeline-header">
      {props.title}
      <Sparkle size={24} />
    </div>
  );
};
