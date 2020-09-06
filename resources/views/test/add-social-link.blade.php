<input type="text" name="name" id="name" />
<input type="text" name="link" id="link" />
<input type="hidden" name="_token" id="token" value="{{ csrf_token() }}" />

<input type="button" id="btn" value="add" />

<script>
  window.onload = () => {
      const btn = document.getElementById('btn');
      const name = document.getElementById('name');
      const link = document.getElementById('link');
      const _token = document.getElementById('token');



      btn.addEventListener('click', () => {

        const data = {
          name: name.value, 
          link: link.value, 
          _token: _token.value
        };
        
        console.log(data);
        fetch('/api/social_link/create', {
          method: 'POST',
          headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(result => result.json())
        .then(data => console.log(data))
        .catch(() => console.log('can\'t'));
      });
  }
</script>