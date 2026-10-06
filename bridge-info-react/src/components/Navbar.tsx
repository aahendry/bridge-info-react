function Navbar() {
  return (
    <>
	<nav className="navbar sticky-top border-bottom">
		<div className="container py-2">
			<a className="navbar-brand d-flex align-items-center gap-2"
				href="index.html" aria-label="Practical help for living at The Bridge">
				<span className="brand-mark">350</span>
				<span className="lh-sm">
					<strong className="d-block">THE BRIDGE APARTMENTS</strong>
					<small className="brand-location text-secondary">
						Argyle Street, Glasgow
					</small>
				</span>
			</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
				data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="mainNav">
				<ul className="navbar-nav ms-auto gap-lg-3">
					<li className="nav-item">
						<a className="nav-link" href="water.html">Water & leaks</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="concierge.html">Concierge</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="access.html">Access & security</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="waste.html">Bins & recycling</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="contacts.html">Contacts</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
    </>
  )
}

export default Navbar
