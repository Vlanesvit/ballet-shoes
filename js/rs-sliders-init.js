/*
Документация слайдера: https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	if (document.querySelector('.rs-slider__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-slider__slider');

		sliderBlocks.forEach(slider => {
			const arrowPrev = slider.querySelector('.rs-slider__button-prev');
			const arrowNext = slider.querySelector('.rs-slider__button-next');
			const pagination = slider.querySelector('.rs-slider__pagination');

			const swiperMain = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Кол-во показываемых слайдов
				slidesPerView: 1,

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				effect: 'fade',

				// Курсор перетаскивания
				grabCursor: true,

				// Стрелки
				navigation: {
					prevEl: arrowPrev,
					nextEl: arrowNext,
				},

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					type: 'fraction',
					formatFractionCurrent: addZero,
					formatFractionTotal: addZero
				},
			});

			swiperMain.on('slideChangeTransitionStart', function () {
				const activeSlide = slider.querySelector('.swiper-slide-active');

				if (activeSlide.classList.contains('rs-slider__dark-theme')) {
					document.documentElement.classList.add("_dark-theme");
				} else {
					document.documentElement.classList.remove("_dark-theme");
				}
			});
		});
	}

	if (document.querySelector('.rs-product-slider__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-product-slider__slider');

		sliderBlocks.forEach(slider => {
			const arrowPrev = slider.querySelector('.rs-product-slider__button-prev');
			const arrowNext = slider.querySelector('.rs-product-slider__button-next');
			const pagination = slider.querySelector('.rs-product-slider__pagination');

			const swiperMain = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Курсор перетаскивания
				grabCursor: true,

				// Стрелки
				navigation: {
					prevEl: arrowPrev,
					nextEl: arrowNext,
				},

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					type: 'progressbar'
				},

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1.5,
						spaceBetween: 20,
					},
					539.98: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					991.98: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1439.98: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
			});
		});
	}

	if (document.querySelector('.rs-gallery__slider')) {
		new Swiper('.rs-gallery__slider:nth-child(1)', {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 1,
				// delay: 5000,
				// Закончить на последнем слайде
				stopOnLastSlide: false,
				// Отключить после ручного переключения
				disableOnInteraction: false,
				// Изменить направление
				// reverseDirection: true,
			},

			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// при изменении родительских элементов слайдера
			observeParents: true,
			// при изменении дочерних элементов слайдера
			observeSlideChildren: true,

			// Скорость смены слайдов
			speed: 10000,

			// Включение/отключение
			// перетаскивание на ПК
			simulateTouch: false,
			allowTouchMove: false,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,

			// Цикличность слайдера
			loop: true,

			// Курсор перетаскивания
			grabCursor: true,

			// Вертикальный слайдер
			direction: 'vertical',

			// Брекпоинты (адаптив)
			breakpoints: {
				320: {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				1439.98: {
					spaceBetween: 30,
					slidesPerView: 3,
				},
			},

			on: {
				init: function loopBagFix(swiper) {
					const slides = swiper.slides
					const wrapper = swiper.wrapperEl
					slides.forEach((slide) => { wrapper.append(slide.cloneNode(true)) })

					setTimeout(() => {
						const paginations = swiper.pagination.bullets
						paginations.forEach((pagination, index) => {
							if (index > (paginations.length / 2) - 1) {
								pagination.remove()
							}
						})
					}, 100)
				},
			}
		});

		new Swiper('.rs-gallery__slider:nth-child(2)', {
			// Автопрокрутка
			autoplay: {
				// Пауза между прокруткой
				delay: 1,
				// delay: 5000,
				// Закончить на последнем слайде
				stopOnLastSlide: false,
				// Отключить после ручного переключения
				disableOnInteraction: false,
				// Изменить направление
				reverseDirection: true,
			},

			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// при изменении родительских элементов слайдера
			observeParents: true,
			// при изменении дочерних элементов слайдера
			observeSlideChildren: true,

			// Скорость смены слайдов
			speed: 10000,

			// Включение/отключение
			// перетаскивание на ПК
			simulateTouch: false,
			allowTouchMove: false,
			// Чувствительность свайпа
			touchRadio: 1,
			// Угол срабатывания свайпа/перетаскивания
			touchAngle: 45,

			// Цикличность слайдера
			loop: true,

			// Курсор перетаскивания
			grabCursor: true,

			// Вертикальный слайдер
			direction: 'vertical',

			// Брекпоинты (адаптив)
			breakpoints: {
				320: {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				1439.98: {
					spaceBetween: 30,
					slidesPerView: 3,
				},
			},

			on: {
				init: function loopBagFix(swiper) {
					const slides = swiper.slides
					const wrapper = swiper.wrapperEl
					slides.forEach((slide) => { wrapper.append(slide.cloneNode(true)) })

					setTimeout(() => {
						const paginations = swiper.pagination.bullets
						paginations.forEach((pagination, index) => {
							if (index > (paginations.length / 2) - 1) {
								pagination.remove()
							}
						})
					}, 100)
				},
			}
		});
	}

	if (document.querySelector('.rs-features__slider')) {
		// До этой ширины слайдер будет активным
		const breakpoint = window.matchMedia('(min-width: 991.98px)');

		let sliderSwiper;

		const breakpointChecker = function () {
			if (breakpoint.matches === true) {
				// Выключаем слайдер
				if (sliderSwiper !== undefined) sliderSwiper.destroy(true, true);
				return;
			} else if (breakpoint.matches === false) {
				// Включаем слайдер
				return enableSwiper();
			}
		};

		// Инициализация слайдера
		const enableSwiper = function () {
			const sliderBlocks = document.querySelectorAll('.rs-features__slider');

			sliderBlocks.forEach(slider => {
				const arrowNext = slider.querySelector('.rs-features__button-next');
				const arrowPrev = slider.querySelector('.rs-features__button-prev');
				const pagination = slider.querySelector('.rs-features__pagination');

				// Перечень слайдеров
				sliderSwiper = new Swiper(slider, {
					// // Автопрокрутка
					// autoplay: {
					// 	// Пауза между прокруткой
					// 	delay: 10000,
					// 	// Закончить на последнем слайде
					// 	stopOnLastSlide: false,
					// 	// Отключить после ручного переключения
					// 	disableOnInteraction: false,
					// },

					// Обновить свайпер
					// при изменении элементов слайдера
					observer: true,
					// при изменении родительских элементов слайдера
					observeParents: true,
					// при изменении дочерних элементов слайдера
					observeSlideChildren: true,

					// Скорость смены слайдов
					speed: 500,

					// Включение/отключение
					// перетаскивание на ПК
					simulateTouch: true,
					allowTouchMove: true,
					// Чувствительность свайпа
					touchRadio: 1,
					// Угол срабатывания свайпа/перетаскивания
					touchAngle: 45,

					// Цикличность слайдера
					// loop: true,

					// Курсор перетаскивания
					grabCursor: true,

					// Стрелки
					navigation: {
						prevEl: arrowPrev,
						nextEl: arrowNext,
					},

					// Пагинация
					pagination: {
						el: pagination,
						clickable: true,
						type: 'progressbar'
					},

					// Брекпоинты (адаптив)
					breakpoints: {
						320: {
							slidesPerView: 1.4,
							spaceBetween: 20,
						},
						539.98: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						991.98: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						1439.98: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					},
				});
			});
		};

		breakpoint.addListener(breakpointChecker);
		breakpointChecker();
	}

	if (document.querySelector('.rs-news__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-news__slider');

		sliderBlocks.forEach(slider => {
			// const arrowPrev = slider.querySelector('.rs-news__button-prev');
			// const arrowNext = slider.querySelector('.rs-news__button-next');
			// const pagination = slider.querySelector('.rs-news__pagination');

			const swiperMain = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Курсор перетаскивания
				grabCursor: true,

				// // Стрелки
				// navigation: {
				// 	prevEl: arrowPrev,
				// 	nextEl: arrowNext,
				// },

				// // Пагинация
				// pagination: {
				// 	el: pagination,
				// 	clickable: true,
				// 	type: 'progressbar'
				// },

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1.09,
						spaceBetween: 20,
					},
					540: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					991.98: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1439.98: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					1699.98: {
						slidesPerView: 4,
						spaceBetween: 56,
					},
				},
			});
		});
	}

	if (document.querySelector('.rs-text-block__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-text-block__slider');

		sliderBlocks.forEach(slider => {
			const arrowPrev = slider.querySelector('.rs-text-block__button-prev');
			const arrowNext = slider.querySelector('.rs-text-block__button-next');
			const pagination = slider.querySelector('.rs-text-block__pagination');

			const swiperMain = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Кол-во показываемых слайдов
				slidesPerView: 1,

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Курсор перетаскивания
				grabCursor: true,

				// Стрелки
				navigation: {
					prevEl: arrowPrev,
					nextEl: arrowNext,
				},
			});
		});
	}

	if (document.querySelector('.rs-accordions__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-accordions__slider');

		sliderBlocks.forEach(slider => {
			const arrowPrev = slider.querySelector('.rs-accordions__button-prev');
			const arrowNext = slider.querySelector('.rs-accordions__button-next');
			const pagination = slider.querySelector('.rs-accordions__pagination');

			const swiperMain = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Курсор перетаскивания
				grabCursor: true,

				// Стрелки
				navigation: {
					prevEl: arrowPrev,
					nextEl: arrowNext,
				},

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					type: 'progressbar'
				},

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					539.98: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					991.98: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
					1439.98: {
						slidesPerView: 4,
						spaceBetween: 10,
					},
				},
			});
		});
	}

	function addZero(num) {
		return (num > 9) ? num : '0' + num;
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	if (document.querySelector('.swiper')) {
		initSliders();
	}
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});