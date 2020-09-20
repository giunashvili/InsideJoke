@foreach($members as $member)
  <input type="hidden" class="initial-degree" value="{{ $member->degree }}" />
@endforeach