// src/pages/Login.tsx
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authState } from "../recoil/authState";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 실제로는 API 호출이 들어가야 함 (지금은 테스트용 하드코딩)
    if (userId === "test" && password === "1234") {
      setAuth({
        isLoggedIn: true,
        user: {
          id: userId,
          name: "테스트 유저",
        },
      });
      navigate("/"); // 또는 /mypage 등 원하는 위치로
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">로그인</h2>
      <input
        type="text"
        placeholder="아이디"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        로그인
      </button>
    </div>
  );
};

export default Login;
