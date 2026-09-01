<script lang="ts">
	import { reveal, revealStagger, splitReveal, hoverLift } from '$lib/animations/actions';
</script>

<section class="practice">
	<img src="/figma/practice-bg.jpg" alt="" class="section-bg" aria-hidden="true" />
	<div class="fade" aria-hidden="true"></div>
	<div class="glow" aria-hidden="true"></div>

	<div class="grid">
		<div class="studio-card" use:reveal={{ y: 40, scale: 0.97 }}>
			<div class="studio">
				<aside class="rail">
					<img src="/figma/sidebar-audiolines.svg" alt="" class="rail-icon" />
					<div class="rail-item active">
						<span>▶</span>
						<span>Practice</span>
					</div>
					<div class="rail-item">
						<img src="/figma/sidebar-feedback.svg" alt="" />
						<span>Feedback</span>
					</div>
					<div class="rail-item">
						<img src="/figma/sidebar-insights.svg" alt="" />
						<span>Insights</span>
					</div>
					<div class="rail-item">
						<img src="/figma/sidebar-profile.svg" alt="" />
						<span>Profile</span>
					</div>
				</aside>

				<div class="main">
					<div class="main-top">
						<div class="title-row">
							<span class="studio-title">Practice Studio</span>
							<span class="live-badge">● Live roleplay</span>
						</div>
						<div class="end-session">
							<img src="/figma/end-session-arrow.svg" alt="" />
							<span>End session</span>
						</div>
					</div>

					<div class="video-frame">
						<img src="/figma/practice-video-photo.jpg" alt="Practice roleplay partner" />
						<div class="ai-note">
							<div class="ai-note-top">
								<span>AI - CFO</span>
								<img src="/figma/audiolines-card.svg" alt="" />
							</div>
							<p>We already<br />have a vendor.</p>
						</div>
					</div>

					<div class="speaking-bar">
						<div class="speaking-top">
							<span class="speaking-you">● You are speaking</span>
							<span class="speaking-time">01:24 / 02:30</span>
						</div>
						<img src="/figma/waveform-big.svg" alt="" class="big-waveform" />
					</div>
				</div>
			</div>

			<div class="stats-row" use:revealStagger={{ y: 20, delay: 0.15, stagger: 0.1 }}>
				<div class="stat-card" use:hoverLift={{ scale: 1.03, y: -4 }}>
					<p class="stat-title">Pacing <span class="up">▲</span></p>
					<p class="stat-sub">Good pace!</p>
					<img src="/figma/sparkline-pacing.svg" alt="" />
				</div>
				<div class="stat-card" use:hoverLift={{ scale: 1.03, y: -4 }}>
					<p class="stat-title">Filler words</p>
					<p class="stat-value purple">6</p>
					<img src="/figma/sparkline-filler.svg" alt="" />
					<p class="stat-sub">Keep it crisp.</p>
				</div>
				<div class="stat-card" use:hoverLift={{ scale: 1.03, y: -4 }}>
					<p class="stat-title">Eye contact</p>
					<p class="stat-value blue">82%</p>
					<div class="progress-track">
						<div class="progress-fill" style="width: 82%"></div>
					</div>
					<p class="stat-sub">Great engagement.</p>
				</div>
			</div>
		</div>

		<div class="copy" use:revealStagger={{ y: 24, selector: '.eyebrow, .desc, .link' }}>
			<p class="eyebrow">PRACTICE</p>
			<h2 use:splitReveal>
				Rehearse against<br />
				AI that argues<br />
				<span class="accent">back.</span>
			</h2>
			<p class="desc">
				Adaptive buyers, interviewers, panels and angry customers. Scored on what you said and how
				you said it.
			</p>
			<a href="#practice-studio" class="link" use:hoverLift={{ scale: 1.04, y: 0 }}>
				Explore the Practice Studio
				<img src="/figma/link-arrow.svg" alt="" />
			</a>
		</div>
	</div>
</section>

<style>
	.practice {
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
		opacity: 0.3;
		z-index: 0;
	}

	.fade {
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
		z-index: 0;
	}

	.glow {
		position: absolute;
		inset: 15% 27% 28% 38%;
		background: rgba(124, 58, 237, 0.09);
		filter: blur(65px);
		z-index: 0;
	}

	.grid {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: minmax(0, 1.22fr) minmax(0, 0.78fr);
		gap: 48px;
		align-items: center;
	}

	.studio-card {
		grid-column: 1;
		display: flex;
		flex-direction: column;
		gap: 12px;
		background: #0b0c14;
		border: 1px solid var(--purple-border);
		border-radius: 16px;
		padding: 17px;
		box-shadow: 0 20px 40px rgba(76, 49, 205, 0.4);
	}

	.studio {
		display: flex;
		gap: 16px;
	}

	.rail {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		width: 48px;
		padding: 8px 1px 0 0;
		border-right: 1px solid var(--border-10);
		flex-shrink: 0;
	}

	.rail-icon {
		width: 20px;
		height: 20px;
	}

	.rail-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
		font-size: 10px;
		color: var(--text-50);
		width: 100%;
	}

	.rail-item img {
		width: 16px;
		height: 16px;
	}

	.rail-item.active {
		background: #7c3aed;
		border-radius: 8px;
		color: #fff;
		padding: 8px 0;
		font-size: 10px;
	}

	.main {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.main-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.title-row {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.studio-title {
		font-size: 12px;
		color: #fff;
	}

	.live-badge {
		background: rgba(34, 197, 94, 0.15);
		color: var(--green-pale);
		font-size: 12px;
		border-radius: 9999px;
		padding: 3.5px 8px;
	}

	.end-session {
		display: flex;
		align-items: center;
		gap: 6px;
		color: var(--red-light);
		font-size: 12px;
	}

	.end-session img {
		width: 14px;
		height: 14px;
	}

	.video-frame {
		position: relative;
		border-radius: 8px;
		overflow: hidden;
		height: 256px;
	}

	.video-frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.ai-note {
		position: absolute;
		top: 64px;
		right: 20px;
		width: 146px;
		background: #111321;
		border: 1px solid var(--purple-border);
		border-radius: 12px;
		padding: 17px;
	}

	.ai-note-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 12px;
		color: var(--text-55);
		margin-bottom: 5px;
	}

	.ai-note-top img {
		width: 16px;
		height: 16px;
	}

	.ai-note p {
		margin: 0;
		font-size: 12px;
		color: #fff;
		line-height: 16px;
	}

	.speaking-bar {
		background: #090a11;
		border: 1px solid var(--border-10);
		border-radius: 8px;
		padding: 13px;
	}

	.speaking-top {
		display: flex;
		justify-content: space-between;
		font-size: 10px;
		margin-bottom: 12px;
	}

	.speaking-you {
		color: var(--green-pale);
	}

	.speaking-time {
		color: var(--text-50);
	}

	.big-waveform {
		width: 100%;
		height: 26px;
	}

	.stats-row {
		display: flex;
		gap: 12px;
		justify-content: center;
	}

	.stat-card {
		background: #0c0d18;
		border: 1px solid var(--border-15);
		border-radius: 12px;
		padding: 17px;
		flex: 1;
		min-width: 0;
	}

	.stat-title {
		margin: 0;
		font-size: 14px;
		color: #fff;
	}

	.up {
		color: var(--green-bright);
	}

	.stat-sub {
		margin: 4px 0 16px;
		font-size: 12px;
		color: var(--text-60);
	}

	.stat-value {
		margin: 4px 0 0;
		font-size: 30px;
		line-height: 36px;
	}

	.stat-value.purple {
		color: var(--purple-300);
	}

	.stat-value.blue {
		color: var(--blue-light);
	}

	.progress-track {
		height: 4px;
		border-radius: 4px;
		background: #ededed;
		margin: 8px 0;
	}

	.progress-fill {
		height: 4px;
		border-radius: 4px;
		background: var(--blue);
	}

	.copy {
		grid-column: 2;
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

	.link {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: var(--purple-400);
		font-size: 16px;
		margin-top: 8px;
	}

	.link img {
		width: 16px;
		height: 16px;
	}

	@media (max-width: 1000px) {
		.grid {
			grid-template-columns: 1fr;
		}
		.studio-card,
		.copy {
			grid-column: 1;
		}
		.stats-row {
			flex-wrap: wrap;
		}
		h2 {
			font-size: 40px;
		}
	}
</style>
