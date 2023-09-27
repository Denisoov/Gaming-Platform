import { defineStore } from 'pinia';

export const useAppStore = defineStore('APP', {
  state: () => {
    return {
      version: '0.01',
    };
  },
});
