/* ====================================
Функционал фильтров
==================================== */
function filterFunction() {
	const filter = document.querySelector('.filter');

	if (filter) {
		// Отдельные блоки с фильтрами
		const filterItems = filter.querySelectorAll('.filter__item')
		filterItems.forEach(filterItem => {
			// Блок с ul
			const filterCheckboxList = filterItem.querySelector('.filter__list');

			// Кнопка "Показать еще"
			const filterShowmore = filterItem.querySelector('.filter__showmore')

			if (filterCheckboxList) {
				const filterCheckboxItems = filterCheckboxList.querySelectorAll('li input');

				filterCheckboxItems.forEach(item => {
					// Даем активный класс при клике
					item.addEventListener('click', function () {
						checkActiveClassCheckbbox(filterItem, filterBodyReset)
					})
				});

				if (filterShowmore) {
					// Показываем скрытые чекбоксы
					filterShowmore.addEventListener('click', function () {
						filterCheckboxItems.forEach(item => {
							item.closest("li").style.display = 'block';
						});
						this.style.display = 'none';
					});
				}

				// Функция проверки чекбоксов. Если чекбоксов <= 6 - кнопка "Показать еще" скрывается
				function checkHideCheckbbox(filterCheckboxItems, filterShowmore) {
					if (filterCheckboxItems && filterShowmore) {
						if (filterCheckboxItems.length <= 4) {
							filterShowmore.style.display = 'none';
						} else {
							filterShowmore.style.display = 'block';
						}
					}
				}
				checkHideCheckbbox(filterCheckboxItems, filterShowmore)
			}
		});

		// Кнопка очистки ВСЕХ фильтров
		const filterAllReset = filter.querySelector('.filter__control .filter__reset');
		// Все блоки с чекбоксами
		const filterCheckboxLists = filter.querySelectorAll('.filter__nav');

		if (filterCheckboxLists) {
			filterCheckboxLists.forEach(list => {
				const filterCheckboxItems = list.querySelectorAll('li input');

				// Убираем ВСЕ активные чекбоксы и кнопки очистки
				filterAllReset.addEventListener('click', function () {
					filterCheckboxItems.forEach(item => {
						item.checked = false;
					});
				})
			});
		}
	}
}
filterFunction()

/* ====================================
Открыть/закрыть фильтры (в моб.версии)
==================================== */
function openFilter() {
	const filterCloseBtn = document.querySelector('.filter__close');
	const filterOpenBtn = document.querySelectorAll('.rs-catalog__filter-btn');

	filterOpenBtn.forEach(btn => {
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			if (document.documentElement.classList.contains("filter-open")) {
				filterClose()
			} else {
				filterOpen()
			}
		})
	});

	filterCloseBtn.addEventListener('click', function (e) {
		e.preventDefault();
		filterClose()
	});

	// Функции открытия бургер-меню с блокировкой скролла
	function filterOpen() {
		bodyLock();
		document.documentElement.classList.add("filter-open");
	}
	function filterClose() {
		bodyUnlock();
		document.documentElement.classList.remove("filter-open");
	}
}
if (document.querySelector('.rs-catalog__filter-btn') && document.querySelector('.filter__close')) {
	openFilter()
}