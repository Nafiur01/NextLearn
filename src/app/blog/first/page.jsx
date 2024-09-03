import React from "react";
import { Metadata } from 'next';
import { title } from "process";

export const metadata = {
  title: 'Blogu'
}

export default function First() {
  return <h2>This is First Blog</h2>;
}
