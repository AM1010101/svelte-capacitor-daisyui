interface HackerNewsStory {
    id: number; // Unique identifier for the story
    title: string; // Title of the story
    text:string;
    url?: string; // URL of the story
    score: number; // Number of upvotes (points) the story has received
    by: string; // Name of the story's author
    time: number; // Unix timestamp of when the story was created
    descendants: number; // Number of comments on the story
    kids:[number];
    type:string
}

interface Comment {
    by: string;
    id: number;
    kids: number[];
    parent: number;
    text: string;
    time: number;
    type: string;
}

interface Story {
    id: string;
    details: HackerNewsStory | null;
    comments: Comment[] | null;
}