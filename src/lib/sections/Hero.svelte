<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { ensureGsap, gsap, prefersReducedMotion } from '$lib/animations/gsap';
	import { parallax, hoverLift } from '$lib/animations/actions';

	let heroSectionEl: HTMLElement;
	let heroBg: HTMLVideoElement;
	let navEl: HTMLElement;
	let headingEl: HTMLHeadingElement;
	let subheadEl: HTMLParagraphElement;
	let ctaRowEl: HTMLDivElement;
	let scrollIndicatorEl: HTMLDivElement;
	let dotEl: HTMLSpanElement;

	onMount(() => {
		// Reduced motion: skip the entrance choreography and the pin/zoom/fade
		// scrub entirely. The video still autoplays as a plain, static-looking
		// cover background — no scale, no fade, no pinning.
		if (prefersReducedMotion()) return;

		ensureGsap();

		const lines = headingEl.querySelectorAll(':scope > span');
		const ctaChildren = ctaRowEl.children;

		gsap.set(heroBg, { scale: 1.12, opacity: 0 });
		gsap.set(navEl, { y: -16, opacity: 0 });
		gsap.set(lines, { y: 60, opacity: 0 });
		gsap.set(subheadEl, { y: 20, opacity: 0 });
		gsap.set(ctaChildren, { y: 20, opacity: 0 });
		gsap.set(scrollIndicatorEl, { y: 10, opacity: 0 });

		const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
		tl.to(heroBg, { scale: 1, opacity: 1, duration: 1.7 }, 0)
			.to(navEl, { y: 0, opacity: 1, duration: 0.7 }, 0.2)
			.to(lines, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 }, 0.35)
			.to(subheadEl, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
			.to(ctaChildren, { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 }, '-=0.4')
			.to(scrollIndicatorEl, { y: 0, opacity: 1, duration: 0.6 }, '-=0.25');

		const dotTween = gsap.to(dotEl, {
			y: 6,
			duration: 1,
			repeat: -1,
			yoyo: true,
			ease: 'sine.inOut',
			delay: 2.2
		});

		// Pin the hero while the video scrubs a zoom-in + fade-out tied directly
		// to scroll position, then release into the next section once it completes.
		const scrollTl = gsap.timeline({
			scrollTrigger: {
				trigger: heroSectionEl,
				start: 'top top',
				end: '+=100%',
				scrub: 1,
				pin: true,
				pinSpacing: true,
				anticipatePin: 1,
				invalidateOnRefresh: true
			}
		});
		scrollTl.fromTo(
			heroBg,
			{ scale: 1, opacity: 1 },
			{ scale: 1.35, opacity: 0, ease: 'none' },
			0
		);

		return () => {
			tl.kill();
			dotTween.kill();
			scrollTl.scrollTrigger?.kill();
			scrollTl.kill();
		};
	});
</script>

<section class="hero" bind:this={heroSectionEl}>
	<video
		bind:this={heroBg}
		class="hero-bg"
		aria-hidden="true"
		poster="/figma/hero-bg.jpg"
		autoplay
		muted
		loop
		playsinline
		preload="auto"
	>
		<source src="/header-video-v2.mp4" type="video/mp4" />
	</video>
	<div class="glow" aria-hidden="true" use:parallax={{ amount: 30 }}></div>

	<nav class="nav" bind:this={navEl}>
		<Logo />
		<div class="nav-links">
			<a href="#platform" class="nav-link" use:hoverLift={{ scale: 1.05, y: -1 }}>
				Platform <img src="/figma/nav-chevron.svg" alt="" />
			</a>
			<a href="#use-cases" class="nav-link" use:hoverLift={{ scale: 1.05, y: -1 }}>
				Use Cases <img src="/figma/nav-chevron.svg" alt="" />
			</a>
			<a href="#resources" class="nav-link" use:hoverLift={{ scale: 1.05, y: -1 }}>
				Resources <img src="/figma/nav-chevron.svg" alt="" />
			</a>
			<a href="#pricing" class="nav-link plain" use:hoverLift={{ scale: 1.05, y: -1 }}>Pricing</a>
			<a href="#about" class="nav-link plain" use:hoverLift={{ scale: 1.05, y: -1 }}>About</a>
		</div>
		<button class="login-btn" use:hoverLift={{ scale: 1.05 }}>Log in</button>
	</nav>

	<div class="hero-content">
		<h1 bind:this={headingEl}>
			<span class="regular">Every pitch,</span>
			<span class="bold">perfected.</span>
		</h1>
		<p class="subhead" bind:this={subheadEl}>
			AI roleplay. Live call coaching. A profile that gets you discovered.
		</p>
		<div class="cta-row" bind:this={ctaRowEl}>
			<button class="btn btn-primary" use:hoverLift={{ scale: 1.05, y: -2 }}>Book a demo</button>
			<button class="watch-film" use:hoverLift={{ scale: 1.04 }}>
				<span class="play-circle"><img src="/figma/play-icon.svg" alt="" /></span>
				Watch the film (2 min)
			</button>
		</div>
	</div>

	<div class="scroll-indicator" aria-hidden="true" bind:this={scrollIndicatorEl}>
		<div class="scroll-pill">
			<span class="dot" bind:this={dotEl}></span>
		</div>
		<img src="/figma/hero-scroll-dot.svg" alt="" />
	</div>
</section>

<style>
	/* Pre-hide the entrance-animated elements before hydration so GSAP's initial
	   state never causes a flash of visible-then-hidden content. The `gsap-ready`
	   class is only added (in app.html, pre-paint) when motion is not reduced. */
	:global(html.gsap-ready) .hero .nav,
	:global(html.gsap-ready) .hero-bg,
	:global(html.gsap-ready) .hero-content h1 > span,
	:global(html.gsap-ready) .hero-content .subhead,
	:global(html.gsap-ready) .hero-content .cta-row > *,
	:global(html.gsap-ready) .hero .scroll-indicator {
		opacity: 0;
	}

	.hero {
		position: relative;
		max-width: 1440px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 112px;
		padding: 20px 64px 320px;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		background: #000;
		z-index: 0;
		pointer-events: none;
		will-change: transform, opacity;
	}

	.glow {
		position: absolute;
		right: 0;
		top: 128px;
		width: 440px;
		height: 550px;
		background: rgba(99, 102, 241, 0.05);
		filter: blur(55px);
		z-index: 0;
		will-change: transform;
	}

	.nav,
	.hero-content,
	.scroll-indicator {
		position: relative;
		z-index: 1;
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 36px;
	}

	.nav-link {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		font-size: 12px;
		color: var(--text-70);
		transition: color 0.25s ease;
	}

	.nav-link:hover {
		color: #fff;
	}

	.nav-link img {
		width: 12px;
		height: 12px;
	}

	.login-btn {
		background: transparent;
		border: 1px solid var(--border-20);
		border-radius: 8px;
		color: rgba(255, 255, 255, 0.9);
		font-size: 12px;
		padding: 9px 21px;
		transition: border-color 0.25s ease;
	}

	.login-btn:hover {
		border-color: var(--border-40);
	}

	.hero-content {
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 768px;
	}

	h1 {
		margin: 0;
		font-size: 96px;
		line-height: 1;
		letter-spacing: -2.4px;
		max-width: 672px;
	}

	h1 .regular {
		display: block;
		font-weight: 400;
	}

	h1 .bold {
		display: block;
		font-weight: 800;
	}

	.subhead {
		margin: 0;
		font-size: 16px;
		line-height: 24px;
		color: var(--text-70);
	}

	.cta-row {
		display: flex;
		align-items: center;
		gap: 24px;
		padding-top: 8px;
	}

	.watch-film {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: none;
		border: none;
		color: rgba(255, 255, 255, 0.9);
		font-size: 12px;
	}

	.play-circle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.6);
		transition: border-color 0.25s ease;
	}

	.watch-film:hover .play-circle {
		border-color: #fff;
	}

	.play-circle img {
		width: 12px;
		height: 12px;
	}

	.scroll-indicator {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	.scroll-pill {
		width: 24px;
		height: 40px;
		border-radius: 9999px;
		border: 1px solid var(--border-40);
		display: flex;
		justify-content: center;
		padding-top: 9px;
	}

	.dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #fff;
		display: block;
	}

	@media (max-width: 900px) {
		.nav-links {
			display: none;
		}
		h1 {
			font-size: clamp(48px, 12vw, 96px);
			letter-spacing: -1.5px;
		}
		.hero {
			padding: 20px 24px 140px;
			gap: 60px;
		}
	}
</style>
