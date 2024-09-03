import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome Home</h1>
      <Link href="/blog">
        <h3>Blog</h3>
      </Link>
      <Link href="products">
        <h3>Products</h3>
      </Link>
    </div>
  );
};

export default Home;
