"use client";
import React from "react";

export default function ErrorB({ error, reset }) {
  return (
    <div>
      <h2>{error.message}</h2>
      <button onClick={reset}>try again</button>
    </div>
  );
}
