function Home() {
  return (
    <>
	<main id="home">
		<header className="resident-header">
			<div className="container py-5">
				<div className="resident-header-inner">
					<div className="resident-copy">
						<h1 className="page-title mb-3">Practical help for living at The Bridge</h1>
						<p className="page-intro mb-0">
							Choose a guide for common questions about your flat and the building.
						</p>
					</div>
					<figure className="facade-sketch">
						<img className="facade-watercolor" src="src/assets/watercolor.jpg"
							alt="Watercolor illustration of The Bridge's red-tiled apartment facade in Glasgow."/>
					</figure>
				</div>
			</div>
		</header>

		<div className="container">
			<section className="urgent-note my-4" aria-label="Emergency guidance">
				<strong>Immediate danger or fire?</strong>
				Call 999. For a water leak, open the Contacts guide and contact the factor's
				emergency line.
			</section>

			<section className="topic-directory py-3" aria-label="Resident help topics">
				<div className="row g-3 g-lg-4">
					<div className="col-md-6">
						<a className="topic-panel" href="water.html"
							aria-label="Water & leaks">
							<h2>Water & leaks</h2>
							<p>
								Find your flat's stopcock and what to do if a leak starts.
							</p>
							<span className="topic-action">
								Open guide <span aria-hidden="true">→</span>
							</span>
						</a>
					</div>
					<div className="col-md-6">
						<a className="topic-panel" href="concierge.html"
							aria-label="Concierge">
							<h2>Concierge</h2>
							<p>
								Get help with access, deliveries, and shared-area issues.
							</p>
							<span className="topic-action">
								Open guide <span aria-hidden="true">→</span>
							</span>
						</a>
					</div>
					<div className="col-md-6">
						<a className="topic-panel" href="access.html"
							aria-label="Access & security">
							<h2>Access & security</h2>
							<p>Intercoms, entry fobs and garage access</p>
							<span className="topic-action">
								Open guide <span aria-hidden="true">→</span>
							</span>
						</a>
					</div>
					<div className="col-md-6">
						<a className="topic-panel" href="waste.html"
							aria-label="Bins & recycling">
							<h2>Bins & recycling</h2>
							<p>
								Sort household waste and find guidance for bulky items.
							</p>
							<span className="topic-action">
								Open guide <span aria-hidden="true">→</span>
							</span>
						</a>
					</div>
					<div className="col-md-6">
						<a className="topic-panel" href="contacts.html"
							aria-label="Contacts">
							<h2>Contacts</h2>
							<p>
								What to include when reporting a repair and where to find contacts.
							</p>
							<span className="topic-action">
								Open guide <span aria-hidden="true">→</span>
							</span>
						</a>
					</div>
				</div>
			</section>
		</div>
	</main>
    </>
  )
}

export default Home