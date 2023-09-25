<script>
	import { goto } from '$app/navigation';
	import { navigationMethod } from '$lib/stores/settings'
</script>

{#if ($navigationMethod == 'sidebar')}
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-side z-50">
		<label for="my-drawer-3" class="drawer-overlay" />
		<div class="menu p-2 w-80 min-h-full bg-base-200 h-screen flex flex-col">
			<div class="p-4">
				<div class="card card-body bg-white">Banner</div>
			</div>
			<!-- Sidebar content here -->
			<button on:click={() => goto('/app')} class="p-4 text-left">🏠 Home</button>
			<button on:click={() => goto('/app/search')} class="p-4 text-left">🔍 Search</button>
			<button on:click={() => goto('/app/notifications')} class="p-4 text-left"
				>🔔 Notifications</button>
			<button on:click={() => goto('/app/profile')} class="p-4 text-left">📩 Profile</button>
			<button on:click={() => goto('/settings')} class="p-4 text-left">⛭ Settings</button>
			<div class="flex-grow" />
			<button on:click={() => goto('/')} class="p-4 bg-secondary text-white text-left"
				>🚪 Logout</button>
		</div>
	</div>
{/if}
