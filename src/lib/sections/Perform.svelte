<script lang="ts">
	import { reveal, revealStagger, splitReveal, floatCard, hoverLift } from '$lib/animations/actions';
</script>

<section class="perform">
	<img src="/figma/perform-bg.jpg" alt="" class="section-bg" aria-hidden="true" />
	<div class="fade" aria-hidden="true"></div>

	<div class="grid">
		<div class="copy" use:revealStagger={{ y: 24, selector: '.eyebrow, .desc, .link' }}>
			<p class="eyebrow">PERFORM</p>
			<h2 use:splitReveal>
				Then take the<br />
				coach into the<br />
				real call.
			</h2>
			<p class="desc">
				Live, private guidance on Zoom and Meet. Visible only to you. We make you better — we
				don't answer for you.
			</p>
			<a href="#live-coaching" class="link" use:hoverLift={{ scale: 1.04, y: 0 }}>
				See Live Coaching
				<img src="/figma/link-arrow2.svg" alt="" />
			</a>
		</div>

		<div class="art-wrap">
			<div class="call-card" use:floatCard={{ rotation: -3, y: 60, fromRotationOffset: 4 }}>
				<div class="call-top">
					<span class="live">● Live call</span>
					<span class="meta">28:31 ▥ View</span>
				</div>

				<div class="tiles">
					<div class="tile">
						<img src="/figma/perform-photo-man.jpg" alt="Participant" />
					</div>
					<div class="tile">
						<img src="/figma/perform-photo-woman.jpg" alt="Participant" />
					</div>
				</div>

				<div class="toolbar">
					<div class="tool">
						<img src="/figma/icon-micoff.svg" alt="" />
						<span>Mute</span>
					</div>
					<div class="tool">
						<img src="/figma/icon-video.svg" alt="" />
						<span>Stop video</span>
					</div>
					<div class="tool">
						<img src="/figma/icon-users.svg" alt="" />
						<span>Participants</span>
					</div>
					<div class="tool">
						<img src="/figma/icon-message.svg" alt="" />
						<span>Share screen</span>
					</div>
					<div class="tool">
						<img src="/figma/icon-ellipsis.svg" alt="" />
						<span>Chat</span>
					</div>
					<div class="tool">
						<img src="/figma/icon-endcall.svg" alt="" />
						<span class="end">End call</span>
					</div>
				</div>

				<div class="coach-panel" use:reveal={{ x: 24, y: 0, delay: 0.5 }}>
					<div class="coach-label">
						<img src="/figma/icon-coach.svg" alt="" />
						<span>Your private coach</span>
					</div>
					<p class="nudge-label">Nudge</p>
					<p class="nudge-title">Slow down.</p>
					<p class="nudge-body">You haven't asked<br />about budget.</p>
					<div class="nudge-track">
						<div class="nudge-fill"></div>
					</div>
					<p class="nudge-lock">Live guidance 🔒</p>
				</div>

				<div class="guidance-pill" use:reveal={{ y: 16, delay: 0.65 }}>
					🔒 Only you can see the guidance
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.perform {
		position: relative;
		max-width: 1440px;
		margin: 0 auto;
		padding: 112px 64px 256px;
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

	.art-wrap {
		display: flex;
		justify-content: center;
		padding: 40px 0 60px;
	}

	.call-card {
		position: relative;
		width: 700px;
		max-width: 100%;
		background: #0b0c14;
		border: 1px solid rgba(196, 181, 253, 0.4);
		border-radius: 16px;
		padding: 17px;
		box-shadow: 0 25px 45px rgba(85, 54, 210, 0.35);
	}

	.call-top {
		display: flex;
		justify-content: space-between;
		font-size: 10px;
		color: #fff;
		margin-bottom: 12px;
	}

	.tiles {
		display: flex;
		gap: 12px;
		height: 288px;
	}

	.tile {
		flex: 1;
		min-width: 0;
		border-radius: 15px;
		border: 1px solid rgba(196, 181, 253, 0.6);
		overflow: hidden;
	}

	.tile img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.toolbar {
		background: rgba(0, 0, 0, 0.45);
		border-radius: 8px;
		display: flex;
		justify-content: center;
		gap: 40px;
		padding: 12px 20px;
		margin-top: 12px;
	}

	.tool {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
		font-size: 9px;
		color: rgba(255, 255, 255, 0.65);
	}

	.tool img {
		width: 14px;
		height: 14px;
	}

	.tool .end {
		color: var(--red-light);
	}

	.coach-panel {
		position: absolute;
		right: -48px;
		top: 112px;
		width: 173px;
		background: #131321;
		border: 1px solid rgba(196, 181, 253, 0.4);
		border-radius: 12px;
		padding: 20px;
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
	}

	.coach-label {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 12px;
		color: var(--purple-300);
		margin-bottom: 24px;
	}

	.coach-label img {
		width: 14px;
		height: 14px;
	}

	.nudge-label {
		margin: 0 0 8px;
		font-size: 12px;
		color: var(--text-60);
	}

	.nudge-title {
		margin: 0 0 12px;
		font-size: 16px;
		color: #fff;
	}

	.nudge-body {
		margin: 0 0 16px;
		font-size: 12px;
		color: rgba(255, 255, 255, 0.75);
		line-height: 16px;
	}

	.nudge-track {
		height: 4px;
		border-radius: 4px;
		background: rgba(255, 255, 255, 0.2);
		margin-bottom: 12px;
	}

	.nudge-fill {
		width: 50%;
		height: 4px;
		border-radius: 4px;
		background: var(--purple-400);
	}

	.nudge-lock {
		margin: 0;
		font-size: 12px;
		color: rgba(255, 255, 255, 0.45);
	}

	.guidance-pill {
		position: absolute;
		bottom: -56px;
		left: 33%;
		right: 33%;
		white-space: nowrap;
		background: #11111d;
		border: 1px solid var(--purple-border);
		border-radius: 8px;
		padding: 13px 21px;
		font-size: 12px;
		color: var(--purple-200);
		text-align: center;
	}

	@media (max-width: 1000px) {
		.grid {
			grid-template-columns: 1fr;
		}
		h2 {
			font-size: 40px;
		}
		.art-wrap {
			padding: 60px 0 100px;
		}
		.coach-panel {
			display: none;
		}
	}
</style>
