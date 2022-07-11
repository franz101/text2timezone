import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [timeInput, setTimeInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ time: timeInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setTimeInput("");
  }

  return (
    <div>
      <Head>
        <title>Text 2 Timezone</title>
        <link rel="icon" href="/clock.jpg" />
      </Head>

      <main className={styles.main}>
        <img src="/clock.jpg" className={styles.icon} />
        <h3>The timezoner</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="time"
            placeholder="Enter a text / place"
            value={timeInput}
            onChange={(e) => setTimeInput(e.target.value)}
          />
          <input type="submit" value="Get Timezone" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
