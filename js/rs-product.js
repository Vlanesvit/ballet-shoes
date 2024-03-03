/*
Документация слайдера: https://github.com/mladenilic/threesixty.js
*/
function threesixtyInit() {
	const threesixtyBlock = document.querySelectorAll('.threesixty');
	if (threesixtyBlock) {
		threesixtyBlock.forEach(threesixtyItem => {
			const threesixty = new ThreeSixty(threesixtyItem, {
				// URL исходного изображения
				// image: './img/blocks/product/product__img-1.jpg',
				// Можно передавать путь по атрибуту (аналогично как на прошлом сайте)
				// image: '/upload/3d/' + threesixty.getAttribute('data-dir') + '/',
				// Также поддерживается передача массива изображений
				image: [
					'./img/blocks/product/3d/i1.jpg',
					'./img/blocks/product/3d/i2.jpg',
					'./img/blocks/product/3d/i3.jpg',
					'./img/blocks/product/3d/i4.jpg',
					'./img/blocks/product/3d/i5.jpg',
					'./img/blocks/product/3d/i6.jpg',
					'./img/blocks/product/3d/i7.jpg',
					'./img/blocks/product/3d/i8.jpg',
					'./img/blocks/product/3d/i9.jpg',
					'./img/blocks/product/3d/i10.jpg',
					'./img/blocks/product/3d/i11.jpg',
					'./img/blocks/product/3d/i12.jpg',
					'./img/blocks/product/3d/i13.jpg',
					'./img/blocks/product/3d/i14.jpg',
					'./img/blocks/product/3d/i15.jpg',
					'./img/blocks/product/3d/i16.jpg',
					'./img/blocks/product/3d/i17.jpg',
					'./img/blocks/product/3d/i18.jpg',
				],

				// Параметры спрайта (если указан массив изображений, эти параметры игнорируются)
				count: 18,                   // Общее количество изображений. По умолчанию: 0
				perRow: 1,                   // Количество изображений в строке. По умолчанию: 0

				// Ширина высота
				width: 865,  // Ширина изображения. По умолчанию 300
				height: 780, // Высота изображения. По умолчанию 300

				// Навигация
				// prev: document.getElementById('prev'), // Предыдущий элемент кнопки. По умолчанию: ноль
				// next: document.getElementById('next'), / Элемент следующей кнопки. По умолчанию: ноль
				keys: true,         // Поворот изображения с помощью клавиш со стрелками. По умолчанию: правда
				draggable: true,    // Поворот изображения путем перетаскивания. По умолчанию: правда
				swipeable: true,    // Поворот изображения путем пролистывания на экранах мобильных устройств. По умолчанию: правда
				dragTolerance: 10,  // Скорость вращения при перетаскивании. По умолчанию: 10
				swipeTolerance: 10, // Скорость вращения при смахивании. По умолчанию: 10
				swipeTarget: threesixtyItem, // Элемент, который будет прослушивать события перетаскивания/смахивания. По умолчанию: контейнер изображений.

				// Настройки поворота
				speed: 250,     // Скорость вращения в режиме «игра». По умолчанию: 10
				inverted: false // Инвертирует направление вращения
			});

			// threesixty.play(); // Автопрокрутка
		});
	}
}
threesixtyInit()

function funcProduct() {
	// Добавляем отступ внизу страницы для фикс.меню
	const productFixed = document.querySelector('.rs-product .rs-product__fixed');
	function AddPaddingMenu() {
		if (productFixed && !productFixed.classList.contains('_details-menu-open')) {
			if (window.innerWidth < 991.98) {
				document.body.style.paddingBottom = productFixed.clientHeight + 'px';
			} else {
				document.body.style.paddingBottom = "0px";
			}
		}
	}

	window.addEventListener('load', function () {
		AddPaddingMenu()
	})
	window.addEventListener('resize', function () {
		AddPaddingMenu()
	})

	// Функционал открытия меню в моб.версии
	const swipeBtn = document.getElementById('swipe-menu-btn');
	const swipeBody = document.getElementById('swipe-menu-body');
	if (swipeBtn && swipeBody) {
		swipeBtn.addEventListener('click', function () {
			_slideToggle(swipeBody, 500);
			productFixed.classList.toggle('_details-menu-open');
		})
	}
}
funcProduct()