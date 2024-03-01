/* ====================================
Меню
==================================== */
function menuFunction() {
	const menus = document.querySelectorAll('.rs-header__menu');

	// Бургер-кнопка
	function menuBurger() {
		menus.forEach(menu => {
			const menuBurgerBtns = menu.querySelectorAll('.menu__icon');

			if (menuBurgerBtns) {
				menuBurgerBtns.forEach(btn => {
					// Открываем меню
					btn.addEventListener("click", function (e) {
						if (document.documentElement.classList.contains("menu-open")) {
							menuClose();
						} else {
							menuOpen()
						}
					});
				});
			}
		});
	};
	menuBurger()

	// Меню
	function menuInit() {
		menus.forEach(menu => {
			// Все пункты
			const menuItem = menu.querySelectorAll('.menu__list li');
			const menuItemLink = menu.querySelectorAll('.menu__list li > a');

			// Все пункты с выпадающим меню
			const menuItemDropdowns = menu.querySelectorAll('.menu__list .menu__dropdown');
			const menuItemDropdownsMenu = menu.querySelectorAll('.menu__list .menu__dropdown-list');

			// 0-ой уровень
			const menuItemDropdownsNull = menu.querySelectorAll('.menu__list > .menu__dropdown');
			const menuItemDropdownsMenuNull = menu.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown-list');

			// 1-ый уровень
			const menuItemDropdownsFirst = menu.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown-list > .menu__dropdown');
			const menuItemDropdownsMenuFirst = menu.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown-list > .menu__dropdown > .menu__dropdown-list');

			// 2-ой уровень
			const menuItemDropdownsTwo = menu.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown-list > .menu__dropdown > .menu__dropdown-list > .menu__dropdown');
			const menuItemDropdownsMenuTwo = menu.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown-list > .menu__dropdown > .menu__dropdown-list > .menu__dropdown > .menu__dropdown-list');

			// 3-ий уровень
			const menuItemDropdownsThree = menu.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown-list > .menu__dropdown > .menu__dropdown-list > .menu__dropdown  > .menu__dropdown-list > .menu__dropdown');
			const menuItemDropdownsMenuThree = menu.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown-list > .menu__dropdown > .menu__dropdown-list > .menu__dropdown > .menu__dropdown-list > .menu__dropdown > .menu__dropdown-list');

			menuItemLink.forEach(link => {
				link.classList.add('split-text')
				link.innerHTML =
					`<span class="text-wrapper">
					<span class="text-origin"> ${link.textContent} </span>
					<span class="text-copy"> ${link.textContent} </span>
					</span>`
			});

			// Добавляем иконки в пункты с выпадающим меню
			menuItemDropdowns.forEach(item => {
				const menuLink = item.querySelector('a');
				let icon = document.createElement('i');
				icon.classList.add('menu__dropdown-arrow')
				menuLink.append(icon);
			});

			// Функция для отдельных уровней меню, чтобы открывался только один пункт, а открытые закрывались, кроме тех, кто выше уровнем
			function openLvlMenu(li, ul) {
				li.forEach(item => {
					const menuItemList = item.querySelector('ul');
					const menuItemIcons = item.querySelector('a > i');

					// Раскрываем меню при клике на иконку
					menuItemIcons.addEventListener('click', (e) => {
						e.preventDefault();
						_slideToggle(menuItemList, 500);
						ul.forEach(menu => {
							if (!menu.hasAttribute('hidden')) {
								_slideUp(menu, 500);
							}
						});

						// Проходимся по всем пунктам и ищем активные классы, убираем их и добавляем активный класс кликнутому пункту
						if (!menuItemIcons.closest('.menu__dropdown').classList.contains('_open-menu')) {
							li.forEach(itemDrop => {
								if (itemDrop.classList.contains('_open-menu')) {
									itemDrop.classList.remove('_open-menu')
								}
							});
							menuItemIcons.closest('.menu__dropdown').classList.add('_open-menu');
						} else if (menuItemIcons.closest('.menu__dropdown').classList.contains('_open-menu')) {
							menuItemIcons.closest('.menu__dropdown').classList.remove('_open-menu');
						}
					});
				});
			}

			// Пункты 0-го уровня меню
			openLvlMenu(menuItemDropdownsNull, menuItemDropdownsMenuNull)
			// Пункты 1-го уровня меню
			openLvlMenu(menuItemDropdownsFirst, menuItemDropdownsMenuFirst)
			// Пункты 2-го уровня меню
			openLvlMenu(menuItemDropdownsThree, menuItemDropdownsMenuTwo)
			// Пункты 3-го уровня меню
			openLvlMenu(menuItemDropdownsTwo, menuItemDropdownsMenuThree)

			// При клике на бургер убираем открые меню и активные класс
			document.addEventListener("click", function (e) {
				if (e.target.closest('.menu__icon')) {
					menuItemDropdownsMenu.forEach(menu => {
						_slideUp(menu, 500);
					});
					menuItemDropdowns.forEach(item => {
						item.classList.remove('_open-menu');
					});
				}
			});
		});
	}
	menuInit()

	// Функции открытия бургер-меню с блокировкой скролла
	function menuOpen() {
		bodyLock();
		document.documentElement.classList.add("menu-open");
	}
	function menuClose() {
		bodyUnlock();
		document.documentElement.classList.remove("menu-open");
	}
	function menuToggle() {
		bodyLockToggle();
		document.documentElement.classList.toggle("menu-open");
	}
}
menuFunction()

/* ====================================
Якорные ссылки
==================================== */
// data-goto - указать ID блока
// data-goto-header - учитывать header
// data-goto-top - недокрутить на указанный размер
// data-goto-speed - скорость (только если используется доп плагин)
let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
	const targetBlockElement = document.querySelector(targetBlock);
	if (targetBlockElement) {
		let headerItem = "";
		let headerItemHeight = 0;
		if (noHeader) {
			headerItem = ".rs-header";
			const headerElement = document.querySelector(headerItem);
			if (!headerElement.classList.contains("_header-scroll")) {
				headerElement.style.cssText = `transition-duration: 0s;`;
				headerElement.classList.add("_header-scroll");
				headerItemHeight = headerElement.offsetHeight;
				headerElement.classList.remove("_header-scroll");
				setTimeout((() => {
					headerElement.style.cssText = ``;
				}), 0);
			} else headerItemHeight = headerElement.offsetHeight;
		}
		let options = {
			speedAsDuration: true,
			speed,
			header: headerItem,
			offset: offsetTop,
			easing: "linear"
		};
		document.documentElement.classList.contains("menu-open") ? menuClose() : null;
		if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
			let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
			targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
			targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
			window.scrollTo({
				top: targetBlockElementPosition,
				behavior: "smooth"
			});
		};
	};
}
function pageNavigation() {
	document.addEventListener("click", pageNavigationAction);
	document.addEventListener("watcherCallback", pageNavigationAction);
	function pageNavigationAction(e) {
		if ("click" === e.type) {
			const targetElement = e.target;
			if (targetElement.closest("[data-goto]")) {
				const gotoLink = targetElement.closest("[data-goto]");
				const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
				const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
				const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
				const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
				gotoblock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
				e.preventDefault();
			}
		} else if ("watcherCallback" === e.type && e.detail) {
			const entry = e.detail.entry;
			const targetElement = entry.target;
			if ("navigator" === targetElement.dataset.watch) {
				document.querySelector(`[data-goto]._navigator-active`);
				let navigatorCurrentItem;
				if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
					const element = targetElement.classList[index];
					if (document.querySelector(`[data-goto=".${element}"]`)) {
						navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
						break;
					}
				}
				if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
			}
		}
	}
}
pageNavigation();

/* ====================================
Header при скролле
==================================== */
function headerFixed() {
	const header = document.querySelector('.rs-header');
	const headerTag = document.querySelector('header');
	let lastScrollTop = 0;

	function headerClassAdd() {
		header.classList.toggle('_header-scroll', window.scrollY > 0)
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		// Проверка на присутствие класса для бургер-меню. Если он есть, то шапка не скрывается
		if (document.documentElement.classList.contains("menu-open")) {
			header.style.top = "0px";
		}
		else {
			// Скрытие шапки
			if (scrollTop > lastScrollTop) {
				header.style.transform = `translateY(-${header.clientHeight}px)`;
			} else {
				header.style.transform = "translateY(0px)";
			}
		}
		lastScrollTop = scrollTop;
	}

	window.addEventListener('scroll', function () {
		headerClassAdd()
	})
	window.addEventListener('load', function () {
		headerClassAdd()

		if (window.innerWidth > 1169.98) {
			if (!header.classList.contains('_header-transparent')) {
				headerTag.style.height = header.clientHeight + 'px';
			}
		} else {
			headerTag.style.height = header.clientHeight + 'px';
		}
	})
	window.addEventListener('resize', function () {
		headerClassAdd()

		if (window.innerWidth > 1169.98) {
			if (!header.classList.contains('_header-transparent')) {
				headerTag.style.height = header.clientHeight + 'px';
			} else {
				headerTag.style.height = 0;
			}
		} else {
			headerTag.style.height = header.clientHeight + 'px';
		}
	})
}
headerFixed()

/* ====================================
Поиск
==================================== */
function search() {
	const searchs = document.querySelectorAll('.rs-search');

	const searchModal = document.getElementById('search-modal');
	const searchShow = document.getElementById('search-show');

	searchs.forEach(search => {
		const searchSubmit = search.querySelector('.rs-search__submit')
		const searchClear = search.querySelector('.rs-search__clear');
		const searchInput = search.querySelector('.rs-search__input')
		const searchForm = search.querySelector('.rs-search__form');

		// Показать поиск
		searchShow.addEventListener('click', function (e) {
			e.preventDefault();
			searchOpen()
			putСursorInInput(searchInput);
		})

		// Закрываем поиск по оверлею
		searchModal.addEventListener('click', function (e) {
			const target = e.target;
			// Делегируем событие
			if (target.classList.contains('rs-search__overlay')) {
				searchClose()
			}
		});

		// Отправка формы
		if (searchSubmit) {
			searchSubmit.addEventListener('click', function (e) {
				e.preventDefault();
				if (searchInput.value != '') {
					searchForm.submit();
				}
			})
		}

		// При вводе появляется кнопка отчистки
		if (searchInput) {
			searchInput.addEventListener('input', function (e) {
				searchClear.style.opacity = "1";
			})
		}

		// Очистить инпут
		if (searchClear) {
			searchClear.addEventListener('click', function (e) {
				searchInput.value = '';
				searchClear.style.opacity = "0";
				putСursorInInput(searchInput);
			})
		}
	});

	// Вспомогательные функции ========================================================================================================================================================
	// Поставить курсор в инпут после клика
	function putСursorInInput(input) {
		setTimeout(function () {
			input.focus()
		}, 100);
	}
	// Функции открытия/закрытия поиска с блокировкой скролла
	function searchOpen() {
		bodyLock();
		document.documentElement.classList.add("search-open");
	}
	function searchClose() {
		bodyUnlock();
		document.documentElement.classList.remove("search-open");
	}
	function searchToggle() {
		bodyLockToggle();
		document.documentElement.classList.toggle("search-open");
	}
	// Функции вызова курсора
	addCursorHover(".rs-search__overlay", ".cursor", "cursor__active");
	addCursorMove(".rs-search__overlay", ".cursor__circle")
}
search()
