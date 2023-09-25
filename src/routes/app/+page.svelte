<script lang="ts">
	import { onMount } from 'svelte';
	import GetStorey from '$lib/components/HN/GetStorey.svelte';
	import { goto } from '$app/navigation';

	let stories: string | any[] = [];

	async function fetchStories() {
		try {
			const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
			if (response.ok) {
				const data = await response.text();
				stories = JSON.parse(data).slice(0, 40);
				console.log(stories);
			} else {
				console.error('Failed to fetch stories data');
			}
		} catch (error) {
			console.error('Error fetching stories data:', error);
		}
	}

	onMount(fetchStories);
</script>

<div class="h-screen overflow-y-auto p-4">
{#if stories.length !== 0}
	{#each stories as storyId (storyId)}
		<div class="m-4">
			<GetStorey id={storyId} />
		</div>
	{/each}
{:else}
	<div class="p-4">
		<div class="card card-body bg-white">Loading...</div>
	</div>
{/if}
</div>