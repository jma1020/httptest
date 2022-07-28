import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();
  async function login() {
    try {
      const data = await axios.post(
        "https://tripong.tk/auth/login",
        {
          loginId: "user1",
          password: 1234,
        },
        {
          withCredentials: true,
        }
      );
      console.log(data);
      const access_token = data.headers["authorization"];
      localStorage.setItem("Authorization", access_token);
    } catch (err) {
      const errors = err as Error;
      if (axios.isAxiosError(errors)) {
        console.log("axios err");
        console.log(err);
      } else {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    login();
  }, []);
  return (
    <div>
      로그인 페이지입니다.
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => router.push("/")}>post 페이지로</button>
    </div>
  );
};

export default LoginPage;
