<script lang="ts">
	import StoreyCard from './StoreyCard.svelte';
    import type  {HackerNewsStory} from '../../interfaces'
	export let id: number;

    let story: HackerNewsStory

	async function fetchStory(id: number) {
		try {
			let url = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json';
			const response = await fetch(url);
			if (response.ok) {
				const data = await response.text();
				const parsedData = JSON.parse(data);
				if (isValidHackerNewsStory(parsedData)) {
                    story = parsedData;
                    console.log(story)
					
				} else {
					console.error('Invalid story data:', parsedData);
				}
			} else {
				console.error('Failed to fetch story data');
				
			}
		} catch (error) {
			console.error('Error fetching story data:', error);
			
		}
	}

	function isValidHackerNewsStory(data: any): data is HackerNewsStory {
        // console.log(data)
		return (
			typeof data === 'object' &&
			data !== null &&
			'id' in data &&
			'title' in data &&
			'score' in data &&
			'by' in data &&
			'time' in data 
		);
	}
    fetchStory(id)
</script>

{#if story}
	<StoreyCard
        story={story}
        saved={false} />
{:else}
	<div class="p-4">
		<div class="card card-body bg-white">Loading storey id {id}...</div>
	</div>
{/if}
