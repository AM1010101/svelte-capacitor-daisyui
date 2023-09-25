<script lang='ts'>
    import { goto } from '$app/navigation';
    import type  {HackerNewsStory} from '../../interfaces'
    export let story:HackerNewsStory
    export let image:string =''
    export let sourceFavicon:string = ''
    export let saved:boolean = false

    function onSave() {
        saved = !saved
    }

    $: displayDate = new Date(story.time*1000).toLocaleString( 'en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })
    $: urlNoProtocol = story.url.replace(/^(https?:\/\/)?(www\.)?/, "");
    $: urlNoDomain = urlNoProtocol.replace(/\/.*$/, "");
    
</script>

<div class="card card-compact bg-base-100">
    {#if image}
    <figure><img src={image} alt="Oops" /></figure>
    {/if}
    <div class="card-body">
      <div class='flex flex-row justify-start'>
        {#if sourceFavicon}
        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Oops" class="w-4 h-4" />
        {/if}
        <p class='text-s text-primary'>{urlNoDomain}</p>
      </div>
      {#if story.url}
      <a href={story.url} target='_blank'>
        <h2 class="card-title">{story.title}</h2>
      </a>
      {:else}
      <h2 class="card-title">{story.title}</h2>
      {/if}
      <div class='flex flex-row justify-start'>
        <div class="text-xs text-secondary">{story.by}</div>
        <div class="text-xs text-primary pl-2 pr-2">•</div>
        <div class="text-xs text-primary">{displayDate}</div>
      </div>
      <div class='flex flex-row justify-between'>
        <div class='flex flex-row justify-start'>
          <div class="text-xs text-primary">{story.score} points</div>
          <div class="text-xs text-primary pl-2 pr-2">•</div>

            <a on:click={() => goto('/app/post/'+story.id)} 
              class="text-xs text-primary">{story.descendants} comments</a>
        </div>
        <div class="card-actions justify-end">
          <div class="badge {saved ? 'bg-green-600' : 'badge-outline'}" on:click={() => onSave() }>Save</div> 
          <div class="badge badge-outline">More</div>
        </div>
      </div>
    </div>
    
  </div>