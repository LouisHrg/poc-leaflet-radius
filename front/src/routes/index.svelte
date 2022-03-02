<script>
  import { onMount } from "svelte";
  import { browser } from '$app/env';

  import axios from "axios";

  import * as L from "leaflet";
  import "leaflet/dist/leaflet.css";

  let map;
  let closestMatches = [];
  let clickPos;

  function createMap(container) {
    const m = L.map(container).setView([48.83, 2.34], 12);
    L.tileLayer("http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png").addTo(m);
    return m;
  }

  function mapAction(container) {
    map = createMap(container);
    return {
      destroy: () => {
        map.remove();
      },
    };
  }

  onMount(async () => {
      if(browser) {
          map.on('click', async (event) => {
             clickPos = event.latlng;
             const res = await axios.get(`http://localhost:3000?lat=${clickPos.lat}&lon=${clickPos.lng}`);
             closestMatches = res.data;
             console.log(closestMatches);
          });
      }
  });


</script>

<div>
<div style="height:400px;width:70%;margin:0 auto" use:mapAction />
  <ul style="color:#FFF">
    {#each closestMatches as locality, i}
    <li>{ locality.name }</li>
    {/each}
  </ul>
</div>
