// React의 기능 중 하나인 useState를 가져옴
// useState는 상태(데이터)를 관리할 수 있는 훅(hook).
import { useState } from 'react'

// 이 컴포넌트는 사용자가 자소서 생성 기능을 사용할 수 있는 페이지
export default function WritePage() {
  // useState 훅을 통해 세 가지 상태(state)를 관리
  const [userInfo, setUserInfo] = useState('') // 사용자가 입력한 내용을 저장
  const [isLoading, setIsLoading] = useState(false) // API 요청 중 로딩 상태
  const [generatedEssay, setGeneratedEssay] = useState('') // 생성된 자소서 결과 저장

  // 버튼 클릭 시 실행될 함수
  const handleGenerateEssay = async () => {
    if (!userInfo.trim()) return alert('입력 정보를 작성해주세요.')

    // 로딩 상태 true로 설정
    setIsLoading(true)

    // 실제 ChatGPT API 연동 전, 임시로 mock 데이터 사용
    setTimeout(() => {
      const mockResponse = `
        [자소서 질문1] 지원동기
        ${userInfo} 내용을 바탕으로 이 회사에 지원한 이유는...

        [자소서 질문2] 본인의 강점
        ${userInfo} 에서 확인할 수 있는 강점은...
      `
      // 생성된 자소서 결과 저장
      setGeneratedEssay(mockResponse)
      // 로딩 상태 해제
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">자기소개서 생성기</h1>

      {/* 사용자 입력 안내문구 */}
      <label className="block mb-2 font-medium text-gray-700">
        당신의 이력, 경험, 역량, 강점 등을 자유롭게 적어보세요.
      </label>

      {/* 사용자 입력창 */}
      <textarea
        rows={10}
        value={userInfo}
        onChange={(e) => setUserInfo(e.target.value)}
        placeholder="예: 저는 Java와 Spring Boot를 활용한 백엔드 개발 경험이 있으며..."
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* 버튼 - 클릭 시 자소서 생성 실행 */}
      <button
        onClick={handleGenerateEssay}
        className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        disabled={isLoading}
      >
        {isLoading ? '생성 중...' : '자소서 생성하기'}
      </button>

      {/* 자소서 생성 결과 표시 영역 */}
      {generatedEssay && (
        <div className="mt-8 bg-gray-50 p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">✨ 생성된 자소서</h2>
          <pre className="whitespace-pre-wrap text-gray-800">{generatedEssay}</pre>
        </div>
      )}
    </div>
  )
}
