import { useParams } from 'react-router-dom'

const dummyEssays = [
  {
    id: '1',
    title: '버전 1 - 성장 경험 중심',
    content: `저는 어릴 적부터 문제를 해결하는 데 흥미를 느꼈습니다...`,
    createdAt: '2025-04-18',
  },
  {
    id: '2',
    title: '버전 2 - 협업 사례 중심',
    content: `대학교 프로젝트에서 팀장을 맡아 협업의 중요성을 체감했습니다...`,
    createdAt: '2025-04-17',
  },
]

export default function View() {
  const { id } = useParams()
  const essay = dummyEssays.find((e) => e.id === id)

  if (!essay) {
    return <p className="p-8 text-red-500">존재하지 않는 자소서입니다.</p>
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">{essay.title}</h2>
      <p className="text-sm text-gray-500 mb-6">{essay.createdAt}</p>
      <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
        {essay.content}
      </div>
    </div>
  )
}
