<section class="relative solar-system">
  <div class="absolutely-center-in-relative">
    <div class="relative">
      
      <img src="{{ asset('assets/imgs/solar-system/sunote.svg') }}" class="absolutely-center-in-relative sunote" />
      
      @foreach($circleSizes as $size)
        <div 
          class="absolutely-center-in-relative circle" 
          style="width: calc({{ $size }}rem / 16); height: calc({{ $size }}rem / 16);">
        </div>
      @endforeach

      @foreach($members as $key => $member)

        @php
          $distance = $circleSizes[$key] / 2;
          $color = $colors[$key]; 
        @endphp

        <div 
          class="avatar" 
          style="transform: translate(calc(({{ $distance }}rem / 16) - 50% ), -50%) rotateZ({{$member->degree}}deg);
                 transform-origin: calc({{-$distance}}rem / 16 + 50%)" >
          <div class="rotator" style="transform: rotateZ({{-$member->degree}}deg)">
            <div class="bg" style="background-color: {{ $color }}">
                <img src="{{ $member->img }}" />
              </div>
            <p class="title" style="border-color: {{ $color }}"> {{ $member->name }} </p>
            </div>
        </div>
      @endforeach

    </div>
  </div>
</section>