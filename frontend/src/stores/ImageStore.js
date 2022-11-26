import { defineStore } from 'pinia';

export const useImageStore = defineStore('images', {
    state() {
        return {
            imageDataVertical: ' ',
            imageDataHorizontal: ' ',
            imageItem: ''
        }
    }
})