<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import { reveal, revealStagger, splitReveal, parallax, hoverLift } from '$lib/animations/actions';

	const productLinks = [
		'Practice Studio',
		'Live Coaching',
		'Storylines',
		'Interview Board',
		'For Teams'
	];
	const useCaseLinks = [
		'Sales Teams',
		'Customer Support',
		'Learning & Development',
		'Universities',
		'Executives'
	];
	const resourceLinks = ['Blog', 'Guides', 'Case Studies', 'Help Center', "What's New"];
	const companyLinks = ['About Us', 'Careers', 'Press', 'Partners', 'Contact'];
</script>

<section class="finale">
	<img
		src="/figma/finale-bg.jpg"
		alt=""
		class="section-bg"
		aria-hidden="true"
		use:parallax={{ amount: 50 }}
	/>
	<div class="fade" aria-hidden="true"></div>

	<div class="finale-top">
		<p class="eyebrow">FINALE</p>
		<h2 use:splitReveal>
			The next conversation<br />
			that matters<br />
			<span class="accent">is already on your</span><br />
			<span class="accent">calendar.</span>
		</h2>
		<div class="cta-row" use:revealStagger={{ selector: '.btn', y: 16, delay: 0.4 }}>
			<button class="btn btn-cta big" use:hoverLift={{ scale: 1.05, y: -2 }}>Book a demo →</button>
			<button class="btn btn-outline big" use:hoverLift={{ scale: 1.05, y: -2 }}>Start free →</button>
		</div>
		<div class="feature-row" use:revealStagger={{ selector: '.feature', y: 16, delay: 0.55, stagger: 0.1 }}>
			<div class="feature">
				<img src="/figma/icon-feature1.svg" alt="" />
				<p>AI roleplay<br />Practice without<br />schedule</p>
			</div>
			<div class="feature">
				<img src="/figma/icon-feature2.svg" alt="" />
				<p>Live-call coaching<br />Private guidance<br />in the moment.</p>
			</div>
			<div class="feature">
				<img src="/figma/icon-feature3.svg" alt="" />
				<p>Get discovered<br />Your Storylines.<br />Your moment.</p>
			</div>
		</div>
	</div>

	<footer class="footer" use:reveal={{ y: 30 }}>
		<div class="footer-grid">
			<div class="footer-brand">
				<Logo mark="/figma/footer-logo-mark.svg" text="/figma/footer-logo-text.svg" />
				<p class="tagline">Every pitch, perfected.</p>
				<p class="footer-desc">AI roleplay. Live coaching.<br />A profile that gets you discovered.</p>
			</div>

			<nav class="footer-col">
				<h4>Product</h4>
				{#each productLinks as link}
					<a href="#product" use:hoverLift={{ scale: 1, y: -1 }}>{link}</a>
				{/each}
			</nav>

			<nav class="footer-col">
				<h4>Use Cases</h4>
				{#each useCaseLinks as link}
					<a href="#use-cases" use:hoverLift={{ scale: 1, y: -1 }}>{link}</a>
				{/each}
			</nav>

			<nav class="footer-col">
				<h4>Resources</h4>
				{#each resourceLinks as link}
					<a href="#resources" use:hoverLift={{ scale: 1, y: -1 }}>{link}</a>
				{/each}
			</nav>

			<nav class="footer-col">
				<h4>Company</h4>
				{#each companyLinks as link}
					<a href="#company" use:hoverLift={{ scale: 1, y: -1 }}>{link}</a>
				{/each}
			</nav>

			<div class="footer-newsletter">
				<h4>Stay in the loop</h4>
				<p>Tips, updates, and stories on better conversations.</p>
				<form class="newsletter-form">
					<input type="email" placeholder="Enter your email" />
					<button type="submit" aria-label="Subscribe" use:hoverLift={{ scale: 1.08 }}>→</button>
				</form>
			</div>
		</div>

		<div class="footer-bottom">
			<span>© 2026 pitch.ai. All rights reserved.</span>
			<div class="footer-legal">
				<a href="#privacy">Privacy</a>
				<a href="#terms">Terms</a>
				<a href="#security">Security</a>
				<a href="#cookies">Cookies</a>
			</div>
		</div>
	</footer>
</section>

<style>
	.finale {
		position: relative;
		max-width: 1440px;
		margin: 0 auto;
		padding: 32px 64px 16px;
		overflow: hidden;
	}

	.section-bg {
		position: absolute;
		right: 0;
		top: 0;
		width: 72%;
		height: 69%;
		object-fit: cover;
		z-index: 0;
	}

	.fade {
		position: absolute;
		inset: 0;
		background: linear-gradient(90deg, #000 40%, rgba(0, 0, 0, 0) 60%);
		z-index: 0;
	}

	.finale-top {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		gap: 28px;
		max-width: 768px;
		padding: 80px 0;
	}

	h2 {
		margin: 8px 0 0;
		font-size: 72px;
		line-height: 1;
		font-weight: 500;
		letter-spacing: -1.8px;
	}

	.accent {
		color: var(--purple-400);
	}

	.cta-row {
		display: flex;
		gap: 12px;
		margin-top: 4px;
	}

	.btn.big {
		font-size: 14px;
		padding: 16.5px 28px;
	}

	.feature-row {
		display: flex;
		gap: 28px;
		flex-wrap: wrap;
	}

	.feature {
		display: flex;
		align-items: flex-start;
		gap: 8px;
	}

	.feature img {
		width: 16px;
		height: 16px;
		margin-top: 2px;
	}

	.feature p {
		margin: 0;
		font-size: 10px;
		line-height: 15px;
		color: var(--text-60);
	}

	.footer {
		position: relative;
		z-index: 1;
		background: rgba(8, 9, 17, 0.9);
		border: 1px solid var(--border-15);
		border-radius: 12px;
		padding: 29px;
		display: flex;
		flex-direction: column;
		gap: 28px;
		margin-top: 40px;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.5fr) repeat(4, minmax(0, 1fr)) minmax(0, 1.5fr);
		gap: 32px;
	}

	.footer-brand {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.tagline {
		margin: 4px 0 0;
		font-size: 14px;
		color: #fff;
	}

	.footer-desc {
		margin: 0;
		font-size: 12px;
		line-height: 19.5px;
		color: var(--text-55);
	}

	.footer-col {
		display: flex;
		flex-direction: column;
	}

	.footer-col h4 {
		margin: 0 0 0;
		font-size: 12px;
		font-weight: 500;
		color: #fff;
		line-height: 28px;
	}

	.footer-col a {
		font-size: 12px;
		line-height: 28px;
		color: var(--text-55);
		transition: color 0.25s ease;
	}

	.footer-col a:hover {
		color: #fff;
	}

	.footer-newsletter {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.footer-newsletter h4 {
		margin: 0;
		font-size: 12px;
		font-weight: 500;
		color: #fff;
	}

	.footer-newsletter p {
		margin: 0;
		font-size: 12px;
		color: var(--text-55);
	}

	.newsletter-form {
		display: flex;
		border: 1px solid var(--border-15);
		border-radius: 8px;
		overflow: hidden;
	}

	.newsletter-form input {
		flex: 1;
		min-width: 0;
		background: transparent;
		border: none;
		padding: 12px;
		color: #fff;
		font-size: 12px;
	}

	.newsletter-form input::placeholder {
		color: #9ca3af;
	}

	.newsletter-form button {
		background: var(--gradient-cta-btn);
		border: none;
		color: #fff;
		width: 40px;
		font-size: 14px;
	}

	.footer-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid var(--border-08);
		padding-top: 21px;
		font-size: 10px;
		color: var(--text-45);
		flex-wrap: wrap;
		gap: 12px;
	}

	.footer-legal {
		display: flex;
		gap: 24px;
	}

	@media (max-width: 1000px) {
		h2 {
			font-size: 44px;
		}
		.footer-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 600px) {
		.finale {
			padding: 32px 24px 16px;
		}
		.footer-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
