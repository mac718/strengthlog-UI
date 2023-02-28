import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@component/styles/Home.module.css";
import SignUpForm from "@component/components/SignUpForm";
import Link from "next/link";
import Calender from "@component/components/Calender";

export default function Home() {
  return (
    <>
      <Head>
        <title>Strengthlog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Strengthlog</h1>
      <Calender />
      <Link href="/signup">sign up</Link>
    </>
  );
}
