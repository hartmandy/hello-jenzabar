import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <Link to="/get">GET</Link>
      <Link to="/post">POST</Link>
      <Link to="/put">PUT</Link>
      <Link to="/delete">DELETE</Link>
    </div>
  );
}
