export function AmenitiesDetails({ amenities }) {
  if (!amenities) return <section>Loading...</section>
  return (
    <section className="amenities">
      <h1>What this place offers</h1>
      <div className="amenities-grid">
        <article>
          <div></div>
          <div>
            <h3>Mountain view</h3>
          </div>
        </article>
        <article>
          <div></div>
          <div>
            <h3>Waterfront</h3>
          </div>
        </article>
        <article>
          <div></div>
          <div>
            <h3>Wifi</h3>
          </div>
        </article>
        <article>
          <div></div>
          <div>
            <h3>Free parking on premises</h3>
          </div>
        </article>
        <article>
          <div></div>
          <div>
            <h3>Exterior security cameras on property</h3>
          </div>
        </article>
        <article>
          <div></div>
          <div>
            <h3>Garden view</h3>
          </div>
        </article>
        <article>
          <div></div>
          <div>
            <h3>Kitchen</h3>
          </div>
        </article>
        <article>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="display: block; height: 24px; width: 24px; fill: currentcolor;"
            >
              <path d="M26 2a1 1 0 0 1 .92.61l.04.12 2 7a1 1 0 0 1-.85 1.26L28 11h-3v5h6v2h-2v13h-2v-2.54a3.98 3.98 0 0 1-1.73.53L25 29H7a3.98 3.98 0 0 1-2-.54V31H3V18H1v-2h5v-4a1 1 0 0 1 .88-1h.36L6.09 8.4l1.82-.8L9.43 11H12a1 1 0 0 1 1 .88V16h10v-5h-3a1 1 0 0 1-.99-1.16l.03-.11 2-7a1 1 0 0 1 .84-.72L22 2h4zm1 16H5v7a2 2 0 0 0 1.7 1.98l.15.01L7 27h18a2 2 0 0 0 2-1.85V18zm-16-5H8v3h3v-3zm14.24-9h-2.49l-1.43 5h5.35l-1.43-5z"></path>
            </svg>
          </div>
          <div>
            <h3>Dedicated workspace</h3>
          </div>
        </article>
        <article>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: 'block',
                height: '24px',
                width: '24px',
                fill: 'currentcolor',
              }}
            >
              <path d="M24 26c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 28c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 26zm0-5c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 23c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 21zM20 3a4 4 0 0 1 4 3.8V9h4v2h-4v5a4 4 0 0 1 2.5.86l.17.15c.3.27.71.44 1.14.48l.19.01v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 18c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 16c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5a3.96 3.96 0 0 1 2.44-1H16v-5H4V9h12V7a2 2 0 0 0-4-.15V7h-2a4 4 0 0 1 7-2.65A3.98 3.98 0 0 1 20 3zm-2 13.52.46.31.21.18c.35.31.83.49 1.33.49a2 2 0 0 0 1.2-.38l.13-.11c.2-.19.43-.35.67-.49V11h-4zM20 5a2 2 0 0 0-2 1.85V9h4V7a2 2 0 0 0-2-2z"></path>
            </svg>
          </div>
          <div>
            <h3>Private indoor pool - available seasonally, open 24 hours</h3>
          </div>
        </article>

        <article>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: 'block',
                height: '24px',
                width: '24px',
                fill: 'currentcolor',
              }}
            >
              <path d="M2.05 6.3 4 8.23V25a3 3 0 0 0 2.82 3h16.94l1.95 1.95c-.16.02-.33.04-.5.04L25 30H7a5 5 0 0 1-5-4.78V7c0-.24.02-.48.05-.7zm1.66-4 26 26-1.42 1.4-26-26 1.42-1.4zM25 2a5 5 0 0 1 5 4.78V25a5 5 0 0 1-.05.7L28 23.77V7a3 3 0 0 0-2.82-3H8.24L6.3 2.05c.16-.02.33-.04.5-.04L7 2h18zM11.1 17a5 5 0 0 0 3.9 3.9v2.03A7 7 0 0 1 9.07 17h2.03zm5.9 4.24 1.35 1.36a6.95 6.95 0 0 1-1.35.33v-1.69zM21.24 17h1.69c-.07.47-.18.92-.34 1.35L21.24 17zM17 9.07A7 7 0 0 1 22.93 15H20.9a5 5 0 0 0-3.9-3.9V9.07zm-7.6 4.58L10.76 15H9.07c.07-.47.18-.92.33-1.35zM15 9.07v1.69L13.65 9.4A6.95 6.95 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
            </svg>
          </div>
          <div>
            <h3>Carbon monoxide alarm</h3>
          </div>
        </article>
      </div>
      <button>Show all amenities</button>
    </section>
  )
}
