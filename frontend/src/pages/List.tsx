// src/pages/List.tsx
import { Link } from 'react-router-dom'

const dummyEssays = [
  {
    id: 1,
    title: '버전 1 - 성장 경험 중심',
    createdAt: '2025-04-18',
  },
  {
    id: 2,
    title: '버전 2 - 협업 사례 중심',
    createdAt: '2025-04-17',
  },
]

export default function List() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">내 자기소개서</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {dummyEssays.map((essay) => (
          <Link
            to={`/view/${essay.id}`}
            key={essay.id}
            className="block p-4 rounded-xl shadow hover:bg-gray-50 border border-gray-200 transition"
          >
            <h3 className="text-lg font-semibold">{essay.title}</h3>
            <p className="text-sm text-gray-500">{essay.createdAt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
