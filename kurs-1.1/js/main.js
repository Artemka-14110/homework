//реализация кнопки выбора языков 
document.addEventListener('DOMContentLoaded', () => {
  const langButton = document.querySelector('.header__logo-lang-button');
  const langMenu = document.querySelector('.header__logo-lang');

  langButton.addEventListener('click', () => {
    langMenu.classList.toggle('active');
  });

  // закрытие при клике вне меню
  document.addEventListener('click', (e) => {
    if (!langMenu.contains(e.target)) {
      langMenu.classList.remove('active');
    }
  });
});
// реализация бесконечного таймера 

let totalSeconds =
  (27 * 24 * 60 * 60) +  // дни
  (7 * 60 * 60) +        // часы
  (40 * 60) +            // минуты
  49;                    // секунды

const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

function updateTimer() {
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  daysSpan.textContent = String(days).padStart(2, "0");
  hoursSpan.textContent = String(hours).padStart(2, "0");
  minutesSpan.textContent = String(minutes).padStart(2, "0");
  secondsSpan.textContent = String(seconds).padStart(2, "0");

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    clearInterval(timerInterval);
    document.getElementById("countdown").textContent = "Время вышло!";
  }
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

// Получаем элементы интерфейса
const progress = document.querySelector('.progress'); // Дуга прогресса
const percentTxt = document.getElementById('percent'); // Текст доходности
const riskTxt = document.getElementById('risk'); // Текст риска
const range = document.getElementById('range'); // Ползунок
const selfMode = document.getElementById('self'); // Радио-кнопка "Сам"
const trustMode = document.getElementById('trust'); // Радио-кнопка "Доверяю"

// Получаем общую длину SVG-дуги
const total = progress.getTotalLength();

// Настраиваем базовое состояние дуги
progress.style.strokeDasharray = `${total} ${total}`;
progress.style.strokeDashoffset = total;

// Устанавливаем стандартное значение ползунка (25 = 5%)
range.value = 25;

// Основная функция обновления состояния шкалы
function updateGauge() {
  const val = Number(range.value); // Текущее значение ползунка (0–100)
  const isTrust = trustMode.checked; // Проверяем выбран ли режим "Доверяю управление"

  // Рассчитываем доходность в процентах (шаг = 5)
  let p = Math.round(val / 5);
  if (isTrust) p = Math.round(p * 0.7); // Уменьшаем, если выбран доверительный режим
  percentTxt.textContent = `до ${p}%`; // Отображаем процент

  // Рассчитываем смещение дуги (визуальное заполнение)
  const offset = total - (total * val) / 100;
  progress.style.strokeDashoffset = offset;

  // Настройка цвета и уровня риска
  let color = '#3fff87';
  let risk = 'Низкий риск';

  // Режим доверительного управления — безопаснее и менее доходный
  if (isTrust) {
    color = '#2fff63';
    risk = 'Минимальный риск';
  } else {
    if (val > 50 && val <= 80) {
      color = '#f5d742'; // Жёлтый
      risk = 'Средний риск';
    }
    if (val > 80) {
      color = '#ff4c4c'; // Красный
      risk = 'Высокий риск';
    }
  }

  // Применяем цвет к дуге и эффект свечения
  progress.style.stroke = color;
  progress.style.filter = val === 0 ? 'none' : `drop-shadow(0 0 18px ${color})`;

  // Обновляем блок "Риск"
  riskTxt.textContent = risk;
  riskTxt.style.backgroundColor = `${color}22`;
  riskTxt.style.boxShadow = val === 0 ? 'none' : `0 0 10px ${color}55`;

  // Красим фон ползунка пропорционально заполнению
  range.style.background = `linear-gradient(90deg, ${color} 0%, ${color} ${val}%, #333 ${val}%, #333 100%)`;
}

// Обновляем шкалу при изменении ползунка
range.addEventListener('input', updateGauge);

// Переключение между режимами (сам/доверяю)
selfMode.addEventListener('change', updateGauge);
trustMode.addEventListener('change', updateGauge);

// Первоначальное обновление при загрузке страницы
updateGauge();


//аккордион 

class ItcAccordion {
  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
      duration: 350
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }

  addEventListener() {
    this._el.addEventListener('click', (e) => {
      const elHeader = e.target.closest('.accordion__header');
      if (!elHeader) return;

      const elItem = elHeader.parentElement;

      // если alwaysOpen = false — закрываем предыдущий открытый элемент
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector('.accordion__item_show');
        if (elOpenItem && elOpenItem !== elItem) {
          this.hide(elOpenItem);
        }
      }

      this.toggle(elItem);
    });
  }

  show(el) {
    const elBody = el.querySelector('.accordion__body');
    if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) return;

    // Сразу при клике ставим класс (моментальная смена цвета)
    el.classList.add('accordion__item_showing');

    elBody.style.display = 'block';
    const height = elBody.offsetHeight;
    elBody.style.height = 0;
    elBody.style.overflow = 'hidden';
    elBody.style.transition = `height ${this._config.duration}ms ease`;
    elBody.classList.add('collapsing');
    el.classList.add('accordion__item_slidedown');

    elBody.offsetHeight; // форс рендер
    elBody.style.height = `${height}px`;

    window.setTimeout(() => {
      elBody.classList.remove('collapsing');
      el.classList.remove('accordion__item_slidedown');
      el.classList.remove('accordion__item_showing');
      elBody.classList.add('collapse');
      el.classList.add('accordion__item_show');
      elBody.style.display = '';
      elBody.style.height = '';
      elBody.style.transition = '';
      elBody.style.overflow = '';
    }, this._config.duration);
  }

  hide(el) {
    const elBody = el.querySelector('.accordion__body');
    if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) return;

    elBody.style.height = `${elBody.offsetHeight}px`;
    elBody.offsetHeight;
    elBody.style.display = 'block';
    elBody.style.height = 0;
    elBody.style.overflow = 'hidden';
    elBody.style.transition = `height ${this._config.duration}ms ease`;
    elBody.classList.remove('collapse');
    el.classList.remove('accordion__item_show');
    elBody.classList.add('collapsing');

    window.setTimeout(() => {
      elBody.classList.remove('collapsing');
      elBody.classList.add('collapse');
      elBody.style.display = '';
      elBody.style.height = '';
      elBody.style.transition = '';
      elBody.style.overflow = '';
    }, this._config.duration);
  }

  toggle(el) {
    el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
  }
}

// инициализация
new ItcAccordion(document.querySelector('.accordion'), {
  alwaysOpen: false,
  duration: 350
});

document.addEventListener('DOMContentLoaded', () => {
  const telInput = document.querySelector('input[type="tel"]');
  const im = new Inputmask('+7 999 999 99 99');
  im.mask(telInput);
});



document.addEventListener('click', burgerInit)

function burgerInit(e) {
  // const target = e.target
  const burgerIcon = e.target.closest('.menu__btn')
  const burgerNavLink = e.target.closest('.header__link')
  const headerLogoLang = document.querySelector('.header__logo-lang') // ← добавлено

  if (!burgerIcon && !burgerNavLink) return
  if (document.documentElement.clientWidth > 1100) return

  if (!document.body.classList.contains('body--opened-menu')) {
    document.body.classList.add('body--opened-menu')

    // показать .header__logo-lang
    if (headerLogoLang) {
      headerLogoLang.classList.add('header__logo-lang--active')
    }
  } else {
    document.body.classList.remove('body--opened-menu')

    // скрыть .header__logo-lang
    if (headerLogoLang) {
      headerLogoLang.classList.remove('header__logo-lang--active')
    }
  }
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 6,        // базовое значение для больших экранов
  spaceBetween: 1,
  grabCursor: true,
  loop: true,
  speed: 600,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
  },
  slidesOffsetBefore: 40,
  slidesOffsetAfter: 40,

  breakpoints: {
    1300: {                 // >=1300px → 6 карточек
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1100: {                 // >=1100px → 5 карточек
      slidesPerView: 5,
      spaceBetween: 28,
    },
    900: {                  // >=900px → 4 карточки
      slidesPerView: 4,
      spaceBetween: 26,
    },
    700: {                  // <=700px → 4 карточки, просто меньше
      slidesPerView: 4,
      spaceBetween: 20,
    },
    490: {                  // <=490px → 3 карточки
      slidesPerView: 3,
      spaceBetween: 16,
    },
    410: {                  // <=410px → 2 карточки
      slidesPerView: 2,
      spaceBetween: 14,
    },
    0: {                    // <410px → 2 карточки (или чуть выглядывают)
      slidesPerView: 2.2,
      spaceBetween: 12,
    },
  },
});
