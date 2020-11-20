import { fetchAllData } from './state'
import listen from './listeners'

document.addEventListener('DOMContentLoaded', async () => {
  await fetchAllData();
  listen();
});