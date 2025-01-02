<script>
	import axios from "axios";
	import { onMount } from "svelte";
let img
let imageUrl;
    

let base64Image = '';
  let error = null;
    onMount(async()=>{
        try {
      // Make an Axios request to fetch the base64 image
      const response = await axios.get('http://202.177.41.198:9091/image/music.png');
      
      // Ensure the response is valid and contains the base64 image
      if (response.data && response.data.image) {
        base64Image = response.data.image;
      } else {
        throw new Error('Image data not found');
      }
    } catch (err) {
      error = err.message;
      console.error('Error fetching image:', err);
    }



    //    try {
    //     let response=await axios.get('http://localhost:3000/image');
    //     console.log(response.status);
    //     const contentType = response.headers.get('Content-Type');
    //     console.log(contentType);
    //           // Convert the response to a Blob
    //   const data = await response.data;
    //    console.log(data);
    //     let blob=await data.blob();
    
    //     // imageUrl = URL.createObjectURL(blob);
    //     // console.log(imageUrl);
        
    //    } catch (error) {
    //     console.log(error,'-------');
        
    //    }
        
    })
</script>


{#if error}
  <p>Error: {error}</p>
{:else if base64Image}
  <!-- Display the base64 image -->
  <!-- svelte-ignore a11y_img_redundant_alt -->
  <img src={`data:image/jpeg;base64,${base64Image}`} alt="Fetched Image" />
{:else}
  <p>Loading image...</p>
{/if}