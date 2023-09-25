<script>
    export let commentIds = []

    function fetchComment(id: number): Promise<void> {
        try {
            let url = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json';
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.text();
                let comment = JSON.parse(data);
                console.log('----',comment);
                console.log(comment.title)
                return comment;
            } else {
                console.error('Failed to fetch comment data');
            }
        } catch (error) {
            console.error('Error fetching comment data:', error);
        }
    
</script>

{#each commentIds as commentId}
    <h1>commentId: {commentId}
        </h1>
    
{/each}