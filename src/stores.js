import { writable } from 'svelte/store';

// Store for date: 
export const dateStore = writable(new Date(JSON.parse(localStorage.getItem('date')) || new Date()))
dateStore.subscribe((value)=> localStorage.setItem('date', JSON.stringify(value)))

export const darkMode = writable(localStorage.getItem('darkmode') === "true")
darkMode.subscribe((enabled)=> localStorage.setItem('darkmode', String(enabled)))