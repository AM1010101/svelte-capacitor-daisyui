<script lang="ts">
	import { onMount } from 'svelte';
	import { stories, loadStoryIds, loadStory } from '$lib/stores/hn';

	function pageStart() {
		loadStoryIds().then(() => {
			load();
		});
	}
	let loadMoreTrigger: Element;

  onMount(() => {
		pageStart();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          load();
        }
      });
    });

    observer.observe(loadMoreTrigger);

    // Return a cleanup function to be run before the component is destroyed
    return () => {
      observer.disconnect();
    };
  });

	let storiesArray: any[] = [];
	$: storiesArray = Object.values($stories);

	let loaded = 0;

	function load() {
		for (let i = loaded; i < loaded + 50; i++) {
			loadStory(storiesArray[i].id);
		}
		loaded += 50;
	}
</script>

<main>
	{#each storiesArray as story (story.id)}
		{#if story.title != ''}
			<div class="card card-compact bg-base-100 m-4">
				<div class="card-body">
					<div class="flex flex-row justify-start">
						<p class="text-s text-primary">{story.url}</p>
					</div>
					{#if story.url}
						<a href={story.url} target="_blank">
							<h2 class="card-title">{story.title}</h2>
						</a>
					{:else}
						<h2 class="card-title">{story.title}</h2>
					{/if}
					<div class="flex flex-row justify-start">
						<div class="text-xs text-secondary">{story.by}</div>
						<div class="text-xs text-primary pl-2 pr-2">•</div>
						<div class="text-xs text-primary">{story.time}</div>
					</div>
					<div class="flex flex-row justify-between">
						<div class="flex flex-row justify-start">
							<div class="text-xs text-primary">{story.score} points</div>
							<div class="text-xs text-primary pl-2 pr-2">•</div>

							<a href="/app/post/{story.id}"
							class="text-xs text-primary">{story.descendants} comments</a>
						</div>
						<div class="card-actions justify-end">
							<div class="badge badge-outline">More</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	{/each}
	<div bind:this={loadMoreTrigger}>Loading more stories...</div>
</main>
