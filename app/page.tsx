"use client";

import { useAuth } from "@pangeacyber/react-auth";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const { authenticated } = useAuth();

  return (
    <main className={styles.main}>
      <div>
        <div className={styles.card}>
          
          <h3>
            WELCOME TO SECURE 🤓 N3RD_CHAT STARTER APP POWERED BY{" "}
            <a href="https://pangea.cloud/"> <p style={{ color: 'orange' }}> PANGEA </p> </a>
          </h3>
          
          {authenticated && <p>Please navigate to the  <Link href={"/chat"}>🤓 n3rd_chat</Link></p>}
          {!authenticated && <p style={{ color: 'yellow' }}>Please sign in to start the chat page</p>}
        </div>
      </div>
    </main>
  );
}
