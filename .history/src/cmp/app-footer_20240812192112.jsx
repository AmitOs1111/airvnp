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
      <section className="categoric-footer flex justify-center">
        <div>
          {a.map((item) => (
            <article key={item}>{item}</article>
          ))}
        </div>
        <div>
          {b.map((item) => (
            <article key={item}>{item}</article>
          ))}
        </div>
        <div>
          {c.map((item) => (
            <article key={item}>{item}</article>
          ))}
        </div>
      </section>
      <section className="copyright-footer flex space-between">
        <ul className="flex">
          <li>© 2023 Airbnb, Inc.</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Sitemap</li>
          <li>UK Modern Slavery Act</li>
          <li>Company details</li>
        </ul>
        <ul className="flex">
          <li>English (GB)</li>
          <li>GBP</li>
          <li>facebook</li>
          <li>twiter</li>
          <li>instagram</li>
        </ul>
      </section>
    </footer>
  )
}
