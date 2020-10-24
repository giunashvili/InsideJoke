@foreach($members as $member)
  <input type="hidden" class="initial-degree" value="{{ $member->degree }}" />
@endforeach

@foreach($circleSizes as $size)
  <input type="hidden" class="planet-distance" value="{{ $size / 2 }}" />
@endforeach