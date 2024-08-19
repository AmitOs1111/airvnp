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
          <div></div>
          <div>
            <h3>Dedicated workspace</h3>
          </div>
        </article>
        <article>
          <div></div>
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
              style="display: block; height: 24px; width: 24px; fill: currentcolor;"
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
