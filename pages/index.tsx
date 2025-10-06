import { useState } from "react";
import QueryProcessor from "../utils/QueryProcessor";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [query, setQuery] = useState<string>("");

  return (
    <div className={styles.pageCenter}>
      <div>
        <h1>Welcome!!</h1>
        <p>Please enter your query in the box below:</p>
        <div className={styles.inputColumn}>
          <input
            className={styles.largeInput}
            type="text"
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
          />
          <div className={styles.resultBox}>
            {QueryProcessor(query) == "" ?  "No Match" : QueryProcessor(query)}
          </div>
        </div>
      </div>
    </div>
  );
}
