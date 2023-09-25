import { writable } from 'svelte/store';

// Create a writable store with an initial value
export const navigationMethod = writable('sidebar'); //'sidebar' or 'bottom-navbar'
