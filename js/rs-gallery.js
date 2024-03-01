function cloneContent(block) {
	let items = document.querySelectorAll(block);
	items.forEach(item => {
		let title = item.querySelector('.rs-gallery__titles');
		let tag = item.querySelector('.rs-gallery__title h2');

		tag ? tag = item.querySelector('.rs-gallery__title h2').cloneNode(true) : null;

		let new_title = document.createElement('div');
		new_title.classList.add('rs-gallery__title', 'rs-gallery__title--font');

		tag ? new_title.append(tag) : null;

		title.append(new_title);

		console.log('1');
	});
}
// cloneContent('.rs-gallery__desc');