import { ensureGsap, gsap, prefersReducedMotion } from './gsap';
import type { Action } from 'svelte/action';

const DEFAULT_START = 'top 85%';

/**
 * Fades + slides a single element in once it scrolls into view.
 * No-ops (leaves the element in its natural, fully-visible CSS state) when
 * the user prefers reduced motion, so content is never hidden behind JS.
 */
export interface RevealOptions {
	y?: number;
	x?: number;
	scale?: number;
	duration?: number;
	delay?: number;
	start?: string;
	ease?: string;
}

export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, opts = {}) => {
	if (prefersReducedMotion()) return {};
	ensureGsap();

	const { y = 32, x = 0, scale = 1, duration = 0.9, delay = 0, start = DEFAULT_START, ease = 'power3.out' } =
		opts;

	gsap.set(node, { opacity: 0, y, x, scale });

	const tween = gsap.to(node, {
		opacity: 1,
		y: 0,
		x: 0,
		scale: 1,
		duration,
		delay,
		ease,
		scrollTrigger: { trigger: node, start, once: true }
	});

	return {
		destroy() {
			tween.scrollTrigger?.kill();
			tween.kill();
		}
	};
};

/**
 * Staggers the reveal of a container's children as the container scrolls into view.
 */
export interface RevealStaggerOptions extends RevealOptions {
	selector?: string;
	stagger?: number;
}

export const revealStagger: Action<HTMLElement, RevealStaggerOptions | undefined> = (node, opts = {}) => {
	if (prefersReducedMotion()) return {};
	ensureGsap();

	const {
		selector = ':scope > *',
		y = 28,
		x = 0,
		scale = 1,
		duration = 0.8,
		delay = 0,
		stagger = 0.12,
		start = DEFAULT_START,
		ease = 'power3.out'
	} = opts;

	const targets = node.querySelectorAll<HTMLElement>(selector);
	if (!targets.length) return {};

	gsap.set(targets, { opacity: 0, y, x, scale });

	const tween = gsap.to(targets, {
		opacity: 1,
		y: 0,
		x: 0,
		scale: 1,
		duration,
		delay,
		stagger,
		ease,
		scrollTrigger: { trigger: node, start, once: true }
	});

	return {
		destroy() {
			tween.scrollTrigger?.kill();
			tween.kill();
		}
	};
};

/**
 * Settles a rotated "floating card" (photo mockups, chat bubbles, etc.) into its
 * final resting rotation/position as it scrolls into view. Owns the element's
 * `rotation` so no static CSS `transform: rotate()` should be applied alongside it.
 */
export interface FloatCardOptions {
	rotation?: number;
	fromRotationOffset?: number;
	y?: number;
	scale?: number;
	duration?: number;
	delay?: number;
	start?: string;
}

export const floatCard: Action<HTMLElement, FloatCardOptions | undefined> = (node, opts = {}) => {
	ensureGsap();
	const {
		rotation = 0,
		fromRotationOffset = 6,
		y = 46,
		scale = 0.94,
		duration = 1,
		delay = 0,
		start = DEFAULT_START
	} = opts;

	if (prefersReducedMotion()) {
		gsap.set(node, { rotation });
		return {};
	}

	gsap.set(node, { opacity: 0, rotation: rotation - fromRotationOffset, y, scale, transformOrigin: '50% 50%' });

	const tween = gsap.to(node, {
		opacity: 1,
		rotation,
		y: 0,
		scale: 1,
		duration,
		delay,
		ease: 'power3.out',
		scrollTrigger: { trigger: node, start, once: true }
	});

	return {
		destroy() {
			tween.scrollTrigger?.kill();
			tween.kill();
		}
	};
};

/**
 * Subtle scroll-scrubbed parallax drift. Skipped entirely under reduced motion.
 */
export interface ParallaxOptions {
	amount?: number;
	start?: string;
	end?: string;
}

export const parallax: Action<HTMLElement, ParallaxOptions | undefined> = (node, opts = {}) => {
	if (prefersReducedMotion()) return {};
	ensureGsap();

	const { amount = 50, start = 'top bottom', end = 'bottom top' } = opts;

	gsap.set(node, { y: -amount / 2 });

	const tween = gsap.fromTo(
		node,
		{ y: -amount / 2 },
		{
			y: amount / 2,
			ease: 'none',
			scrollTrigger: {
				trigger: node.parentElement ?? node,
				start,
				end,
				scrub: true
			}
		}
	);

	return {
		destroy() {
			tween.scrollTrigger?.kill();
			tween.kill();
		}
	};
};

/**
 * Wraps each word of an element's text in a clipped span for an elegant
 * line/word-level reveal. Preserves child elements (e.g. an accent-colored
 * <span>) and <br> line breaks already present in the markup.
 */
function wrapWords(root: HTMLElement) {
	const walk = (el: Element) => {
		const children = Array.from(el.childNodes);
		for (const child of children) {
			if (child.nodeType === Node.TEXT_NODE) {
				const text = child.textContent ?? '';
				if (!text.trim()) continue;
				const frag = document.createDocumentFragment();
				const parts = text.split(/(\s+)/);
				for (const part of parts) {
					if (part === '') continue;
					if (/^\s+$/.test(part)) {
						frag.appendChild(document.createTextNode(part));
						continue;
					}
					const outer = document.createElement('span');
					outer.className = 'gsap-word';
					outer.style.display = 'inline-block';
					outer.style.overflow = 'hidden';
					outer.style.verticalAlign = 'top';
					const inner = document.createElement('span');
					inner.className = 'gsap-word-inner';
					inner.style.display = 'inline-block';
					inner.textContent = part;
					outer.appendChild(inner);
					frag.appendChild(outer);
				}
				el.replaceChild(frag, child);
			} else if (child.nodeType === Node.ELEMENT_NODE) {
				walk(child as Element);
			}
		}
	};
	walk(root);
}

export interface SplitRevealOptions {
	stagger?: number;
	duration?: number;
	delay?: number;
	start?: string;
}

export const splitReveal: Action<HTMLElement, SplitRevealOptions | undefined> = (node, opts = {}) => {
	if (prefersReducedMotion()) return {};
	ensureGsap();

	wrapWords(node);
	const words = node.querySelectorAll<HTMLElement>('.gsap-word-inner');
	if (!words.length) return {};

	const { stagger = 0.02, duration = 0.7, delay = 0, start = DEFAULT_START } = opts;

	gsap.set(words, { yPercent: 110, opacity: 0 });

	const tween = gsap.to(words, {
		yPercent: 0,
		opacity: 1,
		duration,
		delay,
		stagger,
		ease: 'power3.out',
		scrollTrigger: { trigger: node, start, once: true }
	});

	return {
		destroy() {
			tween.scrollTrigger?.kill();
			tween.kill();
		}
	};
};

/**
 * Premium hover lift for buttons, cards and nav items. Uses GPU-friendly
 * transform only. Disabled under reduced motion (CSS handles the static state).
 */
export interface HoverLiftOptions {
	scale?: number;
	y?: number;
	duration?: number;
}

export const hoverLift: Action<HTMLElement, HoverLiftOptions | undefined> = (node, opts = {}) => {
	const { scale = 1.03, y = -2, duration = 0.3 } = opts;
	if (prefersReducedMotion()) return {};
	ensureGsap();

	const onEnter = () => gsap.to(node, { scale, y, duration, ease: 'power2.out' });
	const onLeave = () => gsap.to(node, { scale: 1, y: 0, duration, ease: 'power2.out' });

	node.addEventListener('pointerenter', onEnter);
	node.addEventListener('pointerleave', onLeave);

	return {
		destroy() {
			node.removeEventListener('pointerenter', onEnter);
			node.removeEventListener('pointerleave', onLeave);
			gsap.killTweensOf(node);
		}
	};
};
