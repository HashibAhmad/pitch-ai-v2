import { browser } from '$app/environment';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

/** Registers GSAP plugins exactly once, browser-only (SvelteKit SSR-safe). */
export function ensureGsap() {
	if (!browser || registered) return;
	gsap.registerPlugin(ScrollTrigger);
	gsap.defaults({ ease: 'power3.out' });
	registered = true;
}

/** Live "prefers-reduced-motion" check — re-evaluated on every call, not cached at import time. */
export function prefersReducedMotion(): boolean {
	if (!browser) return true;
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export { gsap, ScrollTrigger };
