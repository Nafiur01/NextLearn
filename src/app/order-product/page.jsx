"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const HandleClick = () => {
    console.log("Your order has been placed");
    router.push("/");
  };

  return (
    <>
      <h2>Order Product</h2>
      <button onClick={HandleClick}>Place Order</button>
    </>
  );
}
