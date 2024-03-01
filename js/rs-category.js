function changeImgCategory() {
	const categorylink = document.querySelectorAll('.rs-category__list li a');
	const categoryCases = document.querySelectorAll('.rs-category__cases ul');
	const categoryMainImg = document.querySelectorAll('.rs-category__img-main ul li');

	if (categoryCases) {
		// Разделяем отдельно каждый список с картинками
		categoryCases.forEach((list, indexList) => {
			const categoryImg = list.querySelectorAll('li');

			if (categorylink) {
				// Каждой ссылке даем нумерацию и по этой нумерации открываем картинки
				categorylink.forEach((link, indexLink) => {
					link.addEventListener('mouseenter', function () {

						categorylink.forEach((linkOther) => {
							linkOther.classList.remove('_active');
						});
						link.classList.add('_active');

						if (categoryMainImg) {
							categoryMainImg.forEach((main, indexMain) => {
								main.classList.remove('_active');
							});
							categoryMainImg[indexLink].classList.add('_active');
						}

						if (categoryImg) {
							categoryImg.forEach((item, indexItem) => {
								item.classList.remove('_active');
							});
							categoryImg[indexLink].classList.add('_active');
						}
					})
				});
			}
		});
	}
}
changeImgCategory()