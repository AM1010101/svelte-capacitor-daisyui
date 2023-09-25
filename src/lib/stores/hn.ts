import { writable } from 'svelte/store';

// Create an empty store for stories
export const stories = writable<HNStories>({});

// Function to load a story by ID
export async function loadStory(id: string) {
  console.log('loadStory',id);
	const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  
	const data = await response.json();
  // create comment object for each kid in the story
  if (data.kids) {
    data.kids = data.kids.map((kid: any) => {
      return {
        id: kid.toString(),
        by: '',
        text: '',
        time: 0,
        parent: id,
        kids: [],
      };
    });
  }

	// Add the loaded story to the store
	stories.update((stories) => {
		stories[id] = data;
		return stories;
	});
}

// Function to load a comment by ID
export async function loadComment(id: string) {
	const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
	const data = await response.json();
  console.log('loadComment',id,data);

	// Add the loaded comment to the parent story in the store
	stories.update((stories) => {
		const parentStory = stories[data.parent];
		if (parentStory) {

			const commentIndex = parentStory.kids.findIndex((kid) => {
        const match = kid.id === id;
        return match;
      });
      console.log('commentIndex',commentIndex);
			if (commentIndex !== -1) {
				parentStory.kids[commentIndex] = data;
			}
		}
		return stories;
	});
}

// Function to load the list of top story IDs
export async function loadStoryIds() {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  const ids = await response.json();

  // Initialize the stories store with empty objects for each ID
  stories.update(() => {
    let initialStories: HNStories = {};
    for (let id of ids) {
      initialStories[id] = {
        id: id,
        by: '',
        title: '',
        url: '',
        time: 0,
        score: 0,
        descendants: 0,
        kids: [],
      };
    }
    return initialStories;
  });
}