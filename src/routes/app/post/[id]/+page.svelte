<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { stories, loadStoryIds, loadStory, loadComment } from '$lib/stores/hn';

	// get the story id from the url
	let storyId = $page.params.id;

	// load the story ids
	$: storyObject = Object.values($stories).filter((story) => story.id == storyId)[0];

	// load the story
	onMount(() => {
		loadStory(storyId).then(() => {
      storyObject.kids.forEach((commentId) => {
        console.log(commentId)
        loadComment(commentId.id.toString());
      });
    });
	});

</script>

<main>
	<h1>Story</h1>
	storyObject: {storyObject.title}
	comments: {storyObject.kids.length}
  {#each storyObject.kids as commentId}
    <div class="card card-compact bg-base-100 m-4">
      <div class="card-body">
        <div class="flex flex-row justify-start">
          <p class="text-s text-primary">{commentId.by}</p>
        </div>
        <div class="flex flex-row justify-start">
          <div class="text-xs text-secondary">{commentId.text}</div>
          <div class="text-xs text-primary pl-2 pr-2">•</div>
          <div class="text-xs text-secondary">{storyObject.time}</div>
        </div>
      </div>
    </div>
  {/each}
</main>
