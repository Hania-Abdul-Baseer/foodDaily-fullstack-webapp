import Head from "next/head";
import { useState } from "react";
import { FormHome } from "./forms/FormHome";
import styles from "./index.module.css";
import Navbar from "./navbar/Navbar";

export default function Home() {
  const [dietaryRequirementsInput, setDietaryRequirementsInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dietary_requirements: dietaryRequirementsInput,
        }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setDietaryRequirementsInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className={styles.index}>
      {/* <Head>
        <title>FoodDaily</title>
      </Head>

      <main className={styles.main}>
        <h3>Generate Meal Plan</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="dietary_requirements"
            placeholder="Enter dietary requirement"
            value={dietaryRequirementsInput}
            onChange={(e) => setDietaryRequirementsInput(e.target.value)}
          />
          <input type="submit" value="Generate Meal Plan" />
        </form>
        <div className={styles.result}>{result}</div>
      </main> 
      */}
    </div>
  );
}
