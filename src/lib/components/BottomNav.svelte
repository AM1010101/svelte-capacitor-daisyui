<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { navigationMethod } from '$lib/stores/settings'
</script>

{#if ($navigationMethod == 'bottom-navbar')}
	<div class="btm-nav">
		<button on:click={() => goto('/app/')} class:active={$page.url.pathname === '/app'}>
			<div>🏠</div>
			<span class="btm-nav-label">Home</span>
		</button>
		<button
			on:click={() => goto('/app/search')}
			class:active={$page.url.pathname === '/app/search'}>
			<div>🔍</div>
			<span class="btm-nav-label">Search</span>
		</button>
		<button
			on:click={() => goto('/app/notifications')}
			class:active={$page.url.pathname === '/app/notifications'}>
			<div>🔔</div>
			<span class="btm-nav-label">Notifications</span>
		</button>
		<button
			on:click={() => goto('/app/profile')}
			class:active={$page.url.pathname === '/app/profile'}>
			<div>📩</div>
			<span class="btm-nav-label">Profile</span>
		</button>
	</div>
{/if}
