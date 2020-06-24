import React from "react";
import { TitleWrapper } from "./TitleStyle";

export default function index({ title, white }) {
  return (
    <TitleWrapper white={white}>
      <h2 className="titleResume">{title}</h2>
    </TitleWrapper>
  );
}
