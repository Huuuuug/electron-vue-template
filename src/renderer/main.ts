import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

console.log('Hello Renderer!')

createApp(App).mount('#app')

// const btn = document.getElementById("btn")!;

// btn.onclick  = async () => {
//   console.log("Clicked!");
//   const res = await window.electronAPI.readFile();
//   console.log(res);
// }
