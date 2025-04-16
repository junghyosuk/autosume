// src/components/layout/Header.tsx

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="text-white shadow">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">AutoSume</Link>
        </h1>
        <nav className="space-x-4">
          <Link to="/list" className="hover:underline">게시글 목록</Link>
          <Link to="/write" className="hover:underline">글쓰기</Link>
          <Link to="/mypage" className="hover:underline">마이페이지</Link>
          <Link to="/settings" className="hover:underline">설정</Link>
          <Link to="/export" className="hover:underline">내보내기</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
