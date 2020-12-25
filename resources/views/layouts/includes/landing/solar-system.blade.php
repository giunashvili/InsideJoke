<section class="relative solar-system">
  <div class="absolutely-center-in-relative">
    <div class="relative">
        <img 
          src="{{ asset('assets/imgs/solar-system/sunote.svg') }}" 
          class="absolutely-center-in-relative sunote" 
        />

      @foreach($members as $member)
        <div 
          class="absolutely-center-in-relative circle" 
          style="width: calc({{ $member->circle_size ?? 10  }}rem / 16); height: calc({{ $member->circle_size ?? 10 }}rem / 16);">
        </div>
      @endforeach

      @foreach($members as $key => $member)

        <div class="avatar avatar-{{ $key }}-animate" data-id="{{ $member -> id }}">
          <div class="inner-avatar">
            <div class="animation-circles">
              <span class="avatar-circle" style="animation-delay: 0s"></span>
              <span class="avatar-circle" style="animation-delay: 0.5s"></span>
              <span class="avatar-circle" style="animation-delay: 0.7s"></span>
            </div>
            <div class="rotator inner-avatar-animate-{{ $key }}">
              <div class="bg" style="background-color: {{ $member->color }}">
                  @if($key === 4) <img class="x" src="{{ asset('assets/imgs/x.png') }}" /> @endif
                  <img class="member" src="{{ $member->img }}" />
                </div>
              <p class="title" style="border-color: {{ $member->color }}"> {{ $member->name }} </p>
            </div>
          </div>
        </div>
      @endforeach

    </div>
  </div>
</section>

<style>
  @foreach($members as $key => $member)

    @php
      $distance = $member->circle_size / 2;
      $startDegree = $member->degree . 'deg';
      $endDegree = ($member->degree + 360) . 'deg';
    @endphp

    .avatar-{{ $key }}-animate {
      animation-name: circle-orbit-{{ $key }};
      animation-duration: {{$member->orbital_period}}s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      transform-origin: calc({{-$distance}}rem / 16 + 50%)
    }

    @keyframes circle-orbit-{{ $key }} {
      from {
        transform:  translate(calc(({{ $distance }}rem / 16) - 50% ), -50%) rotateZ({{ $startDegree }});
      }
      to {
        transform:  translate(calc(({{ $distance }}rem / 16) - 50% ), -50%) rotateZ({{ $endDegree }});
        transform-origin: calc({{-$distance}}rem / 16 + 50%);
      }
    }

    .inner-avatar-animate-{{ $key }} {
      animation-name: avatar-reverse-{{ $key }};
      animation-duration: {{$member->orbital_period}}s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    @keyframes avatar-reverse-{{ $key }} {
      from {
        transform: rotateZ({{ '-' . $startDegree }});
      }

      to {
        transform: rotateZ({{ '-' . $endDegree }});
      }
    }
  @endforeach
</style>