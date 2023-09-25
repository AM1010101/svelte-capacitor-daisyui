type HNComment = {
id: string;
by: string;
text: string;
time: number; // Unix timestamp
parent: string; // ID of the story or comment this is a reply to
kids: HNComment[]; // IDs of comments that are direct replies to this one
};
  
type HNStory = {
id: string;
by: string;
title: string;
url: string;
time: number; // Unix timestamp
score: number;
descendants: number; // Number of comments (direct and indirect)
kids: HNComment[]; // IDs of top-level comments
};
  
type HNStories = {
[id: string]: HNStory;
};