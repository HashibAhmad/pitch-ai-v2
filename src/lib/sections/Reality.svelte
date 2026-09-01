<script lang="ts">
	import { revealStagger, floatCard, parallax, splitReveal } from '$lib/animations/actions';
</script>

<section class="reality">
	<img
		src="/figma/reality-bg.jpg"
		alt=""
		class="section-bg"
		aria-hidden="true"
		use:parallax={{ amount: 40 }}
	/>
	<div class="fade" aria-hidden="true"></div>

	<div class="grid">
		<div class="copy" use:revealStagger={{ y: 24, selector: '.eyebrow, .desc, .down-arrow' }}>
			<p class="eyebrow">THE REALITY</p>
			<h2 use:splitReveal>
				The deal.<br />
				The offer.<br />
				The <span class="accent">admit.</span><br />
				All decided in a<br />
				conversation.
			</h2>
			<p class="desc">
				We rehearse decks, docs and demos — then improvise the conversation. That ends here.
			</p>
			<div class="down-arrow">
				<img src="/figma/down-arrow-circle.svg" alt="" />
			</div>
		</div>

		<div class="art">
			<div class="card-wrap call-card-wrap" use:floatCard={{ rotation: -5, delay: 0.1 }}>
				<div class="card call-card">
					<div class="call-card-top"><span class="live-dot"></span> Zoom</div>
					<div class="call-video">
						<img src="/figma/reality-video-photo.jpg" alt="Video call participant" />
						<div class="call-toolbar">
							<img src="/figma/toolbar-mic.svg" alt="" />
							<img src="/figma/toolbar-video.svg" alt="" />
							<img src="/figma/toolbar-users.svg" alt="" />
							<img src="/figma/toolbar-chat.svg" alt="" />
							<span class="end-call"><img src="/figma/toolbar-end.svg" alt="" /></span>
						</div>
					</div>
					<div class="clarity-badge">✦ Great clarity<br />in your answer!</div>
				</div>
			</div>

			<div class="card-wrap invite-card-wrap" use:floatCard={{ rotation: -8, delay: 0.25 }}>
				<div class="card invite-card">
					<p class="invite-label">📅 Calendar Invite</p>
					<p class="invite-title">Partnership Discussion</p>
					<p class="invite-time">Tomorrow · 10:00 - 11:00 AM</p>
					<p class="invite-join">Join meeting</p>
				</div>
			</div>

			<div class="card-wrap question-card-wrap" use:floatCard={{ rotation: 7, delay: 0.4 }}>
				<div class="card question-card">
					<div class="speaker-row">
						<img src="/figma/avatar-interviewer.png" alt="" class="avatar" />
						<span class="speaker-name">Interviewer</span>
					</div>
					<p class="bubble">Walk me through how you'd handle pushback from a skeptical stakeholder.</p>
				</div>
			</div>

			<div class="card-wrap answer-card-wrap" use:floatCard={{ rotation: 7, delay: 0.55 }}>
				<div class="card answer-card">
					<div class="speaker-row">
						<img src="/figma/avatar-you.png" alt="" class="avatar" />
						<span class="speaker-name">You</span>
					</div>
					<img src="/figma/waveform-you.svg" alt="" class="waveform" />
					<p class="bubble">
						I'd start by understanding their concerns and align on the outcome we both care about.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.reality {
		position: relative;
		max-width: 1440px;
		margin: 0 auto;
		padding: 49px 64px 151px;
		border-top: 1px solid var(--border-04);
		overflow: hidden;
	}

	.section-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.4;
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
		grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
		gap: 48px;
		align-items: center;
	}

	.copy {
		display: flex;
		flex-direction: column;
		gap: 24px;
		max-width: 448px;
	}

	h2 {
		margin: 8px 0 0;
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

	.down-arrow {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		border: 1px solid var(--border-30);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.down-arrow img {
		width: 16px;
		height: 16px;
	}

	.art {
		position: relative;
		height: 510px;
		max-width: 690px;
	}

	.card-wrap {
		position: absolute;
	}

	.call-card-wrap {
		left: 29.82%;
		right: 1.78%;
		top: -7px;
	}

	.invite-card-wrap {
		left: 0.3%;
		right: 48.82%;
		top: 227.76px;
	}

	.question-card-wrap {
		left: 60.18%;
		right: -10.37%;
		bottom: 72.51px;
	}

	.answer-card-wrap {
		left: 48.28%;
		right: 0.92%;
		bottom: -57.49px;
	}

	.card {
		width: 100%;
		border-radius: 12px;
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
	}

	.call-card {
		background: rgba(16, 16, 29, 0.2);
		border: 1px solid var(--purple-border-strong);
		border-radius: 16px;
		padding: 13px;
		box-shadow: 0 20px 70px 0 rgba(73, 43, 178, 0.4);
	}

	.call-card-top {
		font-size: 10px;
		color: var(--blue);
		margin-bottom: 8px;
	}

	.live-dot::before {
		content: '●';
		color: var(--green);
		margin-right: 4px;
	}

	.call-video {
		position: relative;
		border-radius: 12px;
		overflow: hidden;
		height: 240px;
	}

	.call-video img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.call-toolbar {
		position: absolute;
		left: 16px;
		right: 16px;
		bottom: 16px;
		background: rgba(0, 0, 0, 0.55);
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		padding: 8px;
	}

	.call-toolbar img {
		width: 12px;
		height: 12px;
	}

	.end-call {
		background: var(--red);
		border-radius: 9999px;
		padding: 4px;
		display: inline-flex;
	}

	.clarity-badge {
		position: absolute;
		right: -22px;
		top: 112px;
		width: 137px;
		background: #171325;
		border: 1px solid var(--purple-border);
		border-radius: 12px;
		padding: 12px 16px;
		font-size: 12px;
		color: #fff;
		line-height: 16px;
	}

	.invite-card {
		background: rgba(13, 14, 25, 0.95);
		border: 1px solid rgba(167, 139, 250, 0.25);
		padding: 21px;
	}

	.invite-label {
		margin: 0 0 12px;
		font-size: 12px;
		color: var(--text-55);
	}

	.invite-title {
		margin: 0 0 12px;
		font-size: 14px;
		color: #fff;
	}

	.invite-time {
		margin: 0 0 20px;
		font-size: 12px;
		color: var(--text-55);
	}

	.invite-join {
		margin: 0;
		font-size: 12px;
		color: var(--purple-300);
	}

	.question-card {
		background: #10111c;
		border: 1px solid var(--purple-border);
		padding: 21px;
	}

	.answer-card {
		background: #10111c;
		border: 1px solid var(--purple-border);
		padding: 21px;
	}

	.speaker-row {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 12px;
	}

	.avatar {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		object-fit: cover;
	}

	.speaker-name {
		font-size: 12px;
		color: var(--text-60);
	}

	.bubble {
		margin: 0;
		font-size: 14px;
		line-height: 19px;
		color: #fff;
	}

	.waveform {
		width: 100%;
		height: 26px;
		margin-bottom: 8px;
	}

	@media (max-width: 1000px) {
		.grid {
			grid-template-columns: 1fr;
		}
		.art {
			margin-top: 60px;
		}
		h2 {
			font-size: 40px;
		}
	}
</style>
