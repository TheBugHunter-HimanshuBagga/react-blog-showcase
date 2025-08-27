import { useEffect, useMemo, useState } from 'react'
import Card from '../components/Card.jsx'
import SearchBar from '../components/SearchBar.jsx'
import data from '../data/posts.json'

export default function Home() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [type, setType] = useState('all')

  useEffect(() => {
    // mimic fetch
    setItems(data)
  }, [])

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return items.filter(it => {
      const matchQ = it.title.toLowerCase().includes(q) || it.tags.join(' ').toLowerCase().includes(q)
      const matchType = type === 'all' ? true : it.type === type
      return matchQ && matchType
    })
  }, [items, query, type])

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Blog / Project Showcase</h1>
        <p className="opacity-80">Search & filter, then click a card to view details.</p>
      </header>

      <SearchBar query={query} setQuery={setQuery} type={type} setType={setType} />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2">
        {filtered.map(item => <Card key={item.slug} item={item} />)}
      </div>
    </section>
  )
}
