import { useState } from "react";

export default function Index(props) {
  const [Region, setRegion] = useState(""); // Set region to whole world / Asia / other regions
  const [Year, setYear] = useState(null);
  const [TopK, setTopK] = useState(6); // Top K factors to display in chord diagram

  return (
    <>
      <h1>COMP4462 Project Group 1</h1>
      <p>Home page</p>
      <p>This component will be replaced by a dashboard.</p>
      <p>
        <code>rm -rf C:\sys32</code>
      </p>
    </>
  );
}
