import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  async function getAllposts() {
    const data = await axios.get("https://tripong.tk/admin/users", {
      headers: {
        Authorization: localStorage.getItem("Authorization") as string,
      },
      withCredentials: true,
    });
    console.log(data);
  }
  useEffect(() => {
    getAllposts();
  }, []);

  return <div className={styles.container}>인덱스 페이지입니다.</div>;
};

export default Home;
