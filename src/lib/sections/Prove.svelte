<script lang="ts">
	import { reveal, revealStagger, splitReveal, hoverLift } from '$lib/animations/actions';
</script>

<section class="prove">
	<img src="/figma/prove-bg.jpg" alt="" class="section-bg" aria-hidden="true" />
	<div class="fade" aria-hidden="true"></div>

	<div class="grid">
		<div class="profile-card" use:reveal={{ y: 40, scale: 0.97 }}>
			<div class="profile-head">
				<img src="/figma/avatar-alexchen.png" alt="Alex Chen" class="avatar" />
				<div class="profile-info">
					<h3>Alex Chen</h3>
					<p class="role">Growth PM &nbsp; Ex-Stripe, Notion</p>
					<div class="tags">
						<span class="tag">Growth</span>
						<span class="tag">Product Strategy</span>
						<span class="tag">Go-to-Market</span>
					</div>
				</div>
				<button class="message-btn" use:hoverLift={{ scale: 1.05 }}>Message</button>
			</div>

			<div class="tabs">
				<span class="tab">About</span>
				<span class="tab active">
					Storylines <sup>8</sup>
				</span>
				<span class="tab">Experience</span>
				<span class="tab">Skills</span>
				<span class="tab">Achievements</span>
			</div>

			<div class="storyline">
				<div class="storyline-thumb">
					<img src="/figma/storyline-thumb.jpg" alt="Storyline video" />
					<span class="duration">07:32</span>
					<span class="play"><img src="/figma/icon-play-triangle.svg" alt="" /></span>
				</div>
				<div class="storyline-info">
					<p class="featured">
						<img src="/figma/icon-featured.svg" alt="" />
						FEATURED STORYLINE
					</p>
					<h4>Winning back a skeptical CFO</h4>
					<p class="storyline-desc">
						How I turned objections into alignment and closed a $250K expansion.
					</p>
					<p class="storyline-meta">
						<img src="/figma/icon-views.svg" alt="" />
						24K views &nbsp;·&nbsp; Added 3d ago
					</p>
				</div>
			</div>

			<div class="board">
				<div class="board-top">
					<span class="board-title">
						<img src="/figma/icon-usersthree.svg" alt="" />
						Interview Board
					</span>
					<span class="view-all">View all →</span>
				</div>
				<p class="board-desc">Recruiters discover talent by communication.</p>
				<div class="board-logos">
					<span>a16z</span>
					<span>SEQUOIA</span>
					<span>INDEX</span>
					<span>McKinsey</span>
					<span>ramp</span>
				</div>
			</div>
		</div>

		<div class="copy" use:revealStagger={{ y: 24, selector: '.eyebrow, .desc, .cta-row' }}>
			<p class="eyebrow">PROVE</p>
			<h2 use:splitReveal>
				Your best pitch,<br />
				on the <span class="accent">record.</span>
			</h2>
			<p class="desc">
				Publish Storylines to your public profile. On the Interview Board, recruiters discover
				people by how they communicate — not just what their resume claims.
			</p>
			<div class="cta-row">
				<button class="btn btn-cta" use:hoverLift={{ scale: 1.05, y: -2 }}>Create your Storyline →</button>
				<button class="btn btn-outline" use:hoverLift={{ scale: 1.05, y: -2 }}>I'm a recruiter →</button>
			</div>
		</div>
	</div>
</section>

<style>
	.prove {
		position: relative;
		max-width: 1440px;
		margin: 0 auto;
		padding: 112px 64px 192.5px;
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
		grid-template-columns: minmax(0, 1.28fr) minmax(0, 0.72fr);
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

	.cta-row {
		display: flex;
		gap: 12px;
		padding-top: 8px;
	}

	.profile-card {
		background: #0b0c14;
		border: 1px solid var(--purple-border);
		border-radius: 16px;
		padding: 21px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		box-shadow: 0 20px 45px rgba(75, 46, 180, 0.25);
	}

	.profile-head {
		display: flex;
		align-items: center;
		gap: 16px;
		margin-bottom: 4px;
	}

	.avatar {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		object-fit: cover;
		flex-shrink: 0;
	}

	.profile-info {
		flex: 1;
		min-width: 0;
	}

	.profile-info h3 {
		margin: 0;
		font-size: 18px;
		font-weight: 500;
		color: #fff;
	}

	.role {
		margin: 2px 0 8px;
		font-size: 12px;
		color: var(--text-55);
	}

	.tags {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}

	.tag {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 4px;
		padding: 4px 8px;
		font-size: 9px;
		color: #fff;
	}

	.message-btn {
		background: rgba(255, 255, 255, 0.1);
		border: none;
		border-radius: 4px;
		color: #fff;
		font-size: 12px;
		padding: 8px 12px;
		flex-shrink: 0;
		align-self: flex-start;
	}

	.tabs {
		display: flex;
		gap: 30px;
		border-bottom: 1px solid var(--border-10);
		padding-bottom: 13px;
		font-size: 12px;
		color: var(--text-55);
	}

	.tab.active {
		color: #fff;
		border-bottom: 1px solid #fff;
		padding-bottom: 12px;
		margin-bottom: -13px;
	}

	.tab sup {
		font-size: 10px;
	}

	.storyline {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.4fr);
		border: 1px solid var(--border-10);
		border-radius: 12px;
		overflow: hidden;
	}

	.storyline-thumb {
		position: relative;
		background: #12141d;
		min-height: 160px;
	}

	.storyline-thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		min-height: 160px;
	}

	.duration {
		position: absolute;
		top: 12px;
		left: 12px;
		font-size: 10px;
		color: #fff;
	}

	.play {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.play img {
		width: 14px;
		height: 14px;
	}

	.storyline-info {
		padding: 20px 20px 26.5px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.featured {
		display: flex;
		align-items: center;
		gap: 6px;
		margin: 0;
		font-size: 10px;
		color: var(--purple-300);
	}

	.featured img {
		width: 16px;
		height: 16px;
	}

	.storyline-info h4 {
		margin: 4px 0 0;
		font-size: 16px;
		font-weight: 400;
		color: #fff;
	}

	.storyline-desc {
		margin: 0;
		font-size: 12px;
		color: rgba(255, 255, 255, 0.65);
		line-height: 19.5px;
	}

	.storyline-meta {
		display: flex;
		align-items: center;
		gap: 5px;
		margin: 12px 0 0;
		font-size: 10px;
		color: var(--text-50);
	}

	.storyline-meta img {
		width: 16px;
		height: 16px;
	}

	.board {
		border: 1px solid var(--border-10);
		border-radius: 8px;
		padding: 17px;
	}

	.board-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.board-title {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 12px;
		color: #fff;
	}

	.board-title img {
		width: 16px;
		height: 16px;
	}

	.view-all {
		font-size: 12px;
		color: var(--purple-300);
	}

	.board-desc {
		margin: 4px 0 16px;
		font-size: 10px;
		color: var(--text-50);
	}

	.board-logos {
		display: flex;
		gap: 8px;
	}

	.board-logos span {
		flex: 1;
		text-align: center;
		background: rgba(255, 255, 255, 0.04);
		border-radius: 4px;
		padding: 16px 8px;
		font-size: 12px;
		color: #fff;
	}

	@media (max-width: 1000px) {
		.grid {
			grid-template-columns: 1fr;
		}
		h2 {
			font-size: 40px;
		}
		.storyline {
			grid-template-columns: 1fr;
		}
		.board-logos {
			flex-wrap: wrap;
		}
		.board-logos span {
			flex: 1 1 30%;
		}
	}
</style>
