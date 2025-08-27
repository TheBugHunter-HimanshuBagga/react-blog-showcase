export default function SearchBar({ query, setQuery, type, setType }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title or tag..."
        className="flex-1 px-4 py-2 rounded-xl border border-gray-300/60 dark:border-gray-700/60 bg-white dark:bg-gray-900"
      />
      <select value={type} onChange={(e)=>setType(e.target.value)} className="px-4 py-2 rounded-xl border border-gray-300/60 dark:border-gray-700/60 bg-white dark:bg-gray-900">
        <option value="all">All</option>
        <option value="blog">Blog</option>
        <option value="project">Project</option>
      </select>
    </div>
  )
}
