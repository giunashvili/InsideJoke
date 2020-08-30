<form>
  <input type="file" name="img" class="img" />
</form>
<button class="upload">Upload</button>

<script>
  const btn   = document.getElementsByClassName('upload')[0];
  const file  = document.getElementsByClassName('img')[0];

  btn.addEventListener('click', () => {
    if(file.files && file.files[0])
    {
      const image = new FormData;
      image.append('img', file.files[0]);
      
      fetch('http://insidejoke.test/api/social_link/1/upload-image',
      {
        method: 'POST',
        body: image,
      })
      .then( response => response.json())
      .then( result => console.log)
      .catch( err => console.log);
    }
  });
</script>