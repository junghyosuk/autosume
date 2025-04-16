// src/pages/Home.tsx

const Home = () => {
    return (
        <section className="max-w-screen-md mx-auto mt-10 px-4 text-center">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">
                AutoSume에 오신 걸 환영합니다!
            </h1>
            <p className="text-gray-600 text-lg mb-8">
                자기소개서를 쉽고 빠르게 작성하고<br />
                체계적으로 관리하세요.
            </p>

            <div className="flex justify-center space-x-4">
                <a
                    href="/write"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
                >
                    글쓰기 시작하기
                </a>
                <a
                    href="/list"
                    className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-medium transition"
                >
                    게시글 목록 보기
                </a>
            </div>
        </section>
    );
};

export default Home;
