<script lang='ts'>
    import GetStorey from "./GetStorey.svelte";
    import {page} from '$app/stores';

</script>

<div class='m-4'>
    <GetStorey id={$page.params.id} />
</div>

<div class='m-4'>
    <GetStorey id={$page.params.id} />
</div>
