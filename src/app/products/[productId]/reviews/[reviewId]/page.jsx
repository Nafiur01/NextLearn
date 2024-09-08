import React from "react";
import { notFound } from "next/navigation";


function getRandomInt(count){
  return Math.floor(Math.random()*count);
}

export default function ReviewDetails({ params }) {
  const random = getRandomInt(5)
  if (random === 1){
    throw new Error("Error Loading Review")
  }
  if(parseInt(params.reviewId) > 1000){
    notFound();
  }
  return (
    <h1>
      review {params.reviewId} for product {params.productId}
    </h1>
  );
}
