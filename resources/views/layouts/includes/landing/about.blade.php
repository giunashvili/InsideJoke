<section class="information-panel">
  <div class="description">
    <div class="logo">
      <img src="{{ $about->img }}" />
    </div>
    <p>{{ $about->description }}</p>

    <div class="social-links">
      @foreach( $social_links as $social_link )
        <a href="{{ $social_link->link }}" target="_blank">
          <img src="{{ $social_link->img }}" />
        </a>
      @endforeach
  </div>
</section>