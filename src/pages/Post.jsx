import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import data from '../data/posts.json'

export default function Post() {
  const { slug } = useParams()
  const item = data.find(p => p.slug === slug)

  if (!item) {
    return (
      <div>
        <p>Not found.</p>
        <Link to="/" className="text-sky-500">Go Home</Link>
      </div>
    )
  }

  return (
    <article className="max-w-3xl mx-auto">
      <div className="text-sm opacity-80 flex items-center gap-3 mb-3">
        <Link to="/" className="text-sky-500">← Back</Link>
        <span>{new Date(item.date).toLocaleDateString()}</span>
        <span className="px-2 py-1 rounded-full border border-gray-300/60 dark:border-gray-700/60">{item.type}</span>
      </div>
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <p className="opacity-80 mt-1">{item.excerpt}</p>
      <img src={item.cover || '/placeholder.png'} alt="" className="rounded-2xl my-6" />
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown>{item.content}</ReactMarkdown>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags?.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">{t}</span>
        ))}
      </div>
    </article>
  )
}
