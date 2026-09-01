<script lang="ts">
	let { mark = '/figma/logo-mark.svg', text = '/figma/logo-text.svg' }: { mark?: string; text?: string } = $props();
</script>

<div class="logo">
	<img src={mark} alt="" class="mark" />
	<img src={text} alt="Pitch.ai" class="text" />
</div>

<style>
	.logo {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.mark {
		height: 24px;
		width: auto;
	}
	.text {
		height: 14px;
		width: auto;
	}
</style>
