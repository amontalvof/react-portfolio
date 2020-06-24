import React from "react";
import { useCountUp } from "react-countup";
import { ProgressBar } from "react-rainbow-components";

export default function Progress({ prog }) {
  const { countUp } = useCountUp({
    duration: 3,
    end: prog,
    startOnMount: true,
  });
  return (
    <div>
      <ProgressBar value={Number(countUp)} variant="success" />
    </div>
  );
}
