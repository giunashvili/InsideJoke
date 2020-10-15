<!-- MODAL Itself -->
  <div id="uploadModal" class="upload-modal">
    <div class="modal-content">
      <div class="container">
        <img src="/assets/icons/Close.png" onclick="closeChangeSoclinkIconModal()" class="close-button"/>
        
        <span class="social-links-modal-header">შეცვალე სოციალური ბმულის ხატულა</span>

        <span class="sociallinkname" id="socialLinkNameInModal">სოციალური ბმულის სახელი</span>
        <img class="slink-icon" src="/assets/icons/EditPhotoBtn.svg"/>

        <label class="upload-label" for="slink-img-upload">ატვირთე</label>
        <input 
          type="file" 
          id="slink-img-upload" 
          name="slink-img-upload" 
          accept="image/*" 
          style="visibility:hidden;" 
          onchange="changeImageInput()" 
          onclick="uploadImgToServer(event)"
          />
          
     </div>
    </div>

  <!-- Modal BACKGROUND -->
  </div>
  <div class="background-filter" id="bg-filter"></div>

{{-- HIDDEN input for Social Link ID --}}
  <input type="hidden" id="social_link_id" />