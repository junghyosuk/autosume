import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="text-white shadow bg-blue-600">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">AutoSume</Link>
        </h1>

        {/* 왼쪽 메뉴 */}
        <nav className="space-x-4">
          <Link to="/list" className="hover:underline">게시글 목록</Link>
          <Link to="/write" className="hover:underline">글쓰기</Link>
          <Link to="/mypage" className="hover:underline">마이페이지</Link>
          <Link to="/settings" className="hover:underline">설정</Link>
          <Link to="/export" className="hover:underline">내보내기</Link>
        </nav>

        {/* 로그인/회원가입 버튼 */}
        <div className="space-x-2">
          <Link
            to="/login"
            className="px-3 py-1 border border-white rounded hover:bg-white hover:text-blue-600 transition"
          >
            로그인
          </Link>
          <Link
            to="/signup"
            className="px-3 py-1 border border-white rounded hover:bg-white hover:text-blue-600 transition"
          >
            회원가입
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
