<form>
  <input type="file" name="img" class="img" />
  <input type="hidden" name="_token" id="token" value="{{csrf_token()}}" />
</form>
<button class="upload">Upload</button>

<script>
  const btn   = document.getElementsByClassName('upload')[0];
  const file  = document.getElementsByClassName('img')[0];
  const _token = document.getElementById('token').value;

  btn.addEventListener('click', () => {
    if(file.files && file.files[0])
    {
      console.log(_token);
      const image = new FormData;
      image.append('id', 1);
      image.append('img', file.files[0]);
      image.append('_token', _token);
      
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