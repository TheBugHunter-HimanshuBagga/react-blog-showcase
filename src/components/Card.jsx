import { Link } from 'react-router-dom'

export default function Card({ item }) {
  return (
    <Link to={`/post/${item.slug}`} className="block group rounded-2xl border border-gray-200/70 dark:border-gray-800/70 overflow-hidden hover:shadow-lg transition">
      <img src={item.cover || '/placeholder.png'} alt="" className="h-44 w-full object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="px-2 py-1 rounded-full border border-gray-300/60 dark:border-gray-700/60">{item.type}</span>
          <span className="opacity-70">{new Date(item.date).toLocaleDateString()}</span>
        </div>
        <h3 className="text-lg font-semibold group-hover:text-sky-500">{item.title}</h3>
        <p className="opacity-80 line-clamp-2 mt-1">{item.excerpt}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags?.map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}
