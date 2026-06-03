function showMediaName() {
	const mediaElements = document.querySelectorAll('.cont-media');

	mediaElements.forEach((element) => {
	  const mediaName = element.dataset.mediaName;
	  if (mediaName) {
		const mediaLink =  document.createElement('div') 
		mediaLink.className = 'cont-media-link';
		element.parentNode.insertBefore(mediaLink, element);
		mediaLink.appendChild(element);
		
		const mediaLinkTitle = document.createElement('a');
		mediaLinkTitle.className = 'cont-media-link-title';
		mediaLinkTitle.textContent = mediaName;
		mediaLink.appendChild(mediaLinkTitle, element.nextSibling);
	  }
	});
}


