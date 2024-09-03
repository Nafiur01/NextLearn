import Link from "next/link";
import React from "react";

export default function Products() {
  const productsID = 100;

  return (
    <div>
      <Link href="/">Home</Link>
      <h2>Product Page</h2>
      <h3>Product List:</h3>
      <ul>
        <Link href='/products/1' replace>
          <li>Product 1</li>
        </Link>
        <li>Product 2</li>
        <li>Product 3</li>
        <Link href={`products/${productsID}`}>
          <li>Product 100</li>
        </Link>
      </ul>
    </div>
  );
}
