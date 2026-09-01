<script lang="ts">
	import { onMount } from 'svelte';
	import { ensureGsap, gsap, prefersReducedMotion } from '$lib/animations/gsap';
	import { reveal, revealStagger, splitReveal, hoverLift } from '$lib/animations/actions';

	const tiles = [
		'/figma/call-tile-1.jpg',
		'/figma/call-tile-2.jpg',
		'/figma/call-tile-3.jpg',
		'/figma/call-tile-4.jpg',
		'/figma/call-tile-5.jpg',
		'/figma/call-tile-6.jpg'
	];

	let donutValueEl: HTMLSpanElement;
	let donutProgressEl: HTMLImageElement;
	let readinessCardEl: HTMLElement;

	onMount(() => {
		if (prefersReducedMotion()) {
			donutValueEl.textContent = '78';
			return;
		}
		ensureGsap();

		gsap.set(donutProgressEl, { opacity: 0, scale: 0.85, transformOrigin: '50% 50%' });
		const counter = { value: 0 };
		const tween = gsap.to(counter, {
			value: 78,
			duration: 1.4,
			ease: 'power2.out',
			scrollTrigger: { trigger: readinessCardEl, start: 'top 85%', once: true },
			onStart: () => gsap.to(donutProgressEl, { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }),
			onUpdate: () => {
				donutValueEl.textContent = String(Math.round(counter.value));
			}
		});

		return () => {
			tween.scrollTrigger?.kill();
			tween.kill();
		};
	});
</script>

<section class="teams">
	<img src="/figma/teams-bg.jpg" alt="" class="section-bg" aria-hidden="true" />
	<div class="fade" aria-hidden="true"></div>

	<div class="grid">
		<div class="copy" use:revealStagger={{ y: 24, selector: '.eyebrow, .desc, .tag-row, .btn' }}>
			<p class="eyebrow">FOR TEAMS</p>
			<h2 use:splitReveal>
				Your best coach<br />
				can't sit in every<br />
				call. <span class="accent">pitch.ai can.</span>
			</h2>
			<p class="desc">
				Certify every rep on the new messaging. Onboard agents on your hardest call types. See
				who's ready — and who needs one more rep.
			</p>
			<div class="tag-row">
				<span class="tag" use:hoverLift={{ scale: 1.05, y: -1 }}
					><img src="/figma/icon-sales.svg" alt="" /> Sales</span
				>
				<span class="tag" use:hoverLift={{ scale: 1.05, y: -1 }}
					><img src="/figma/icon-headset.svg" alt="" /> Customer Support</span
				>
				<span class="tag" use:hoverLift={{ scale: 1.05, y: -1 }}
					><img src="/figma/icon-grad.svg" alt="" /> L&amp;D</span
				>
				<span class="tag" use:hoverLift={{ scale: 1.05, y: -1 }}
					><img src="/figma/icon-university.svg" alt="" /> Universities</span
				>
			</div>
			<button class="btn btn-cta" use:hoverLift={{ scale: 1.05, y: -2 }}>Book a demo →</button>
		</div>

		<div class="dashboard">
			<div class="tile-grid" use:revealStagger={{ y: 16, scale: 0.95, stagger: 0.08 }}>
				{#each tiles as tile}
					<div class="tile">
						<img src={tile} alt="Team member on a live call" />
						<span class="tile-badge">● Live practice</span>
					</div>
				{/each}
			</div>

			<div class="readiness-card" bind:this={readinessCardEl} use:reveal={{ y: 40, delay: 0.15 }}>
				<div class="readiness-top">
					<span class="readiness-title">
						<img src="/figma/icon-teamreadiness.svg" alt="" />
						Team Readiness
					</span>
					<span class="readiness-period">▣ This week ⌄</span>
				</div>

				<div class="readiness-body">
					<div class="donut">
						<img src="/figma/donut-track.svg" alt="" class="donut-track" />
						<img src="/figma/donut-progress.svg" alt="" class="donut-progress" bind:this={donutProgressEl} />
						<div class="donut-label">
							<span class="donut-value" bind:this={donutValueEl}>0</span>
							<span class="donut-sub">Team Readiness<br />+14 pts<br />vs last week</span>
						</div>
					</div>

					<div class="stats-and-chart">
						<div class="mini-stats">
							<div class="mini-stat">
								<span class="mini-label">Certified reps</span>
								<span class="mini-value">128</span>
							</div>
							<div class="mini-stat">
								<span class="mini-label">Avg. Score</span>
								<span class="mini-value">82</span>
							</div>
							<div class="mini-stat">
								<span class="mini-label">Calls practiced</span>
								<span class="mini-value">642</span>
							</div>
						</div>
						<div class="chart-wrap">
							<img src="/figma/readiness-chart.png" alt="Readiness over time chart" />
						</div>
					</div>
				</div>

				<div class="readiness-footer">
					<span>♢ Consistent messaging</span>
					<span>◎ Real readiness</span>
					<span>♕ Win more deals</span>
					<span>🔒 Enterprise grade</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.teams {
		position: relative;
		max-width: 1440px;
		margin: 0 auto;
		padding: 112px 64px;
		overflow: hidden;
	}

	.section-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 0;
	}

	.fade {
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
		z-index: 0;
	}

	.grid {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
		gap: 48px;
		align-items: center;
	}

	.copy {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	h2 {
		margin: 16px 0 0;
		font-size: 60px;
		line-height: 1;
		font-weight: 500;
		letter-spacing: -1.5px;
	}

	.accent {
		color: var(--purple-400);
	}

	.desc {
		margin: 0;
		font-size: 16px;
		line-height: 26px;
		color: var(--text-65);
		max-width: 384px;
	}

	.tag-row {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
		margin-bottom: 8px;
	}

	.tag {
		display: flex;
		align-items: center;
		gap: 5px;
		border: 1px solid var(--border-15);
		border-radius: 8px;
		padding: 9px 13px;
		font-size: 10px;
		color: #fff;
	}

	.tag img {
		width: 16px;
		height: 16px;
	}

	.dashboard {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.tile-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 8px;
	}

	.tile {
		position: relative;
		border: 1px solid var(--border-15);
		border-radius: 8px;
		overflow: hidden;
		aspect-ratio: 16 / 10;
	}

	.tile img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.tile-badge {
		position: absolute;
		top: 9px;
		left: 9px;
		font-size: 9px;
		color: #fff;
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
	}

	.tile-badge::before {
		content: '';
	}

	.readiness-card {
		background: #0b0d16;
		border: 1px solid rgba(196, 181, 253, 0.25);
		border-radius: 12px;
		padding: 31px 21px;
		display: flex;
		flex-direction: column;
		gap: 19px;
	}

	.readiness-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.readiness-title {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 12px;
		color: #fff;
	}

	.readiness-title img {
		width: 16px;
		height: 16px;
	}

	.readiness-period {
		font-size: 12px;
		color: #fff;
	}

	.readiness-body {
		display: grid;
		grid-template-columns: 220px minmax(0, 1fr);
		gap: 16px;
		align-items: center;
	}

	.donut {
		position: relative;
		width: 189px;
		height: 189px;
		margin: 0 auto;
	}

	.donut-track,
	.donut-progress {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
	}

	.donut-label {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.donut-value {
		font-size: 30px;
		color: #fff;
	}

	.donut-sub {
		margin-top: 8px;
		font-size: 12px;
		line-height: 16px;
		color: var(--text-55);
	}

	.stats-and-chart {
		display: flex;
		flex-direction: column;
		gap: 8px;
		min-width: 0;
	}

	.mini-stats {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 8px;
	}

	.mini-stat {
		background: rgba(255, 255, 255, 0.03);
		border-radius: 4px;
		padding: 11.5px 12px;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.mini-label {
		font-size: 12px;
		color: #fff;
	}

	.mini-value {
		font-size: 20px;
		font-weight: 500;
		color: #fff;
	}

	.chart-wrap {
		background: #060e1c;
		border-radius: 4px;
		overflow: hidden;
	}

	.chart-wrap img {
		width: 100%;
		height: auto;
		display: block;
	}

	.readiness-footer {
		display: flex;
		justify-content: space-between;
		border-top: 1px solid var(--border-10);
		padding-top: 13px;
		font-size: 9px;
		color: var(--text-55);
		flex-wrap: wrap;
		gap: 8px;
	}

	@media (max-width: 1000px) {
		.grid {
			grid-template-columns: 1fr;
		}
		h2 {
			font-size: 40px;
		}
		.readiness-body {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 640px) {
		.tile-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.mini-stats {
			grid-template-columns: 1fr;
		}
	}
</style>
