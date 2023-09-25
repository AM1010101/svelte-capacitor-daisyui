<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { navigationMethod } from '$lib/stores/settings';
</script>

<header class="py-4 flex">
	<!-- <button class="btn" on:click={() => history.back()}>⬅️</button> -->

	{#if ['/app', '/app/search', '/app/notifications', '/app/profile'].includes($page.url.pathname)}
		{#if $navigationMethod === 'sidebar'}
			<div class="flex-none">
				<label for="my-drawer-3" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16" /></svg>
				</label>
			</div>
		{/if}
	{:else}
		<button class="btn" on:click={() => history.back()}>⬅️</button>
	{/if}

	{#if $page.url.pathname === '/app'}
		<div class="m-auto">🅧 Logo</div>
	{:else if $page.url.pathname === '/settings'}
		<div class="my-auto">Settings</div>
	{:else}
		<div class="flex flex-grow">
			{#if $page.url.pathname === '/app/search'}
				<input class="input w-full" placeholder="Search" />
			{:else if $page.url.pathname === '/app/notifications'}
				<div class="my-auto">Notifications</div>
			{:else if $page.url.pathname === '/app/profile'}
				<div class="my-auto">Profile</div>
			{/if}
		</div>

		<button class="btn" on:click={() => goto('/settings')}>⚙️</button>
	{/if}
</header>
