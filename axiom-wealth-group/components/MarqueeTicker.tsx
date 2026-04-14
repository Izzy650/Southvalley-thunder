const items = [
  'Investment Management',
  'Risk & Insurance',
  'Tax Strategy',
  'Retirement Planning',
  'Estate & Legacy Planning',
  'Business Owner Services',
  'Alternative Investments',
  'Family Office Services',
  'Clarity in Every Decision',
]

export default function MarqueeTicker() {
  const content = [...items, ...items]

  return (
    <div className="bg-gold overflow-hidden py-4 select-none">
      <div className="marquee-track flex items-center whitespace-nowrap">
        {content.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="font-cinzel font-medium tracking-[0.22em] uppercase text-rich-black px-6"
              style={{ fontSize: '0.72rem' }}
            >
              {item}
            </span>
            <span className="text-rich-black opacity-60 text-[0.6rem]">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
