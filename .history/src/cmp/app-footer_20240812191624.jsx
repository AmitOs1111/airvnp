export function AppFooter() {
  const a = [
    'Support',
    'Help',
    'AirCover',
    'Anti-discrimination',
    'Disability support',
    'Cancellation options',
    'Report neighbourhood concern',
  ]
  const b = [
    'Hosting',
    'Airbnb your home',
    'AirCover for hosts',
    'Hosting resources',
    'Community forum',
    'Hosting responsibly',
  ]
  const c = [
    'Airbnb',
    'New features',
    'Careers',
    'Investors',
    'Gift cards',
    'Airbnb.org emergency stays',
  ]
  return (
    <footer className="app-footer full">
      <section className="categoric-footer flex">
        {a.map((item) => (
          <article key={item}>{item}</article>
        ))}
        {b.map((item) => (
          <article key={item}>{item}</article>
        ))}
        {c.map((item) => (
          <article key={item}>{item}</article>
        ))}
      </section>
      <section className="copyright-footer"></section>
    </footer>
  )
}
