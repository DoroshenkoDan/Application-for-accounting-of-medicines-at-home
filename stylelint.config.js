/** @type {import('stylelint').Config} */
export default {
  // Розширення конфігурації з базовим набором правил для SCSS файлів (включає стандартні правила для SCSS).
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  // Вказує, що Stylelint не повинен виводити повідомлення про неправильне використання /* stylelint-disable */.
  reportInvalidScopeDisables: true,
  // Вказує, що Stylelint повинен звітувати про правила, де відсутній опис у коментарях /* stylelint-disable */.
  reportDescriptionlessDisables: true,

  plugins: ['stylelint-prettier'],
  // Об'єкт правил для налаштування специфічних перевірок.
  rules: {
    // Вимикаємо перевірку патерну для назв @mixin (можна писати як хочеш)
    'scss/at-mixin-pattern': null,

    // Підключаємо правила Prettier для SCSS
    'prettier/prettier': [
      true,
      {
        useTabs: false, // тільки пробіли (не таби)
        printWidth: 80, // ширина рядка 80 символів
        tabWidth: 2, // розмір табуляції (пробілів) - 2
        singleQuote: true, // одинарні лапки
        jsxSingleQuote: true, // одинарні лапки в JSX
        trailingComma: 'es5', // кома після останнього елемента тільки там, де дозволено
        semi: true, // ставити крапку з комою
        endOfLine: 'auto', // залежить від системи (windows / unix)
      },
    ],

    // Заборонити порожні блоки
    'block-no-empty': true,

    // Вимкнути перевірку патерну для CSS custom properties (--var)
    'custom-property-pattern': null,

    // Заборонити використання id-селекторів (#id)
    'selector-max-id': 0,

    // Заборонити невідомі псевдокласи, але дозволити кастомний :global
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],

    // Вимикаємо стандартне правило для невідомих at-rule, бо SCSS сам знає свої
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true, // Вмикаємо правильне SCSS правило замість стандартного

    // Вимикаємо правило для патерну назв класів (можна camelCase, PascalCase і т.д.)
    'selector-class-pattern': null,

    // ❗ Ось найважливіше:
    // Дозволяємо використовувати -webkit-, -moz-, -ms- префікси
    'property-no-vendor-prefix': null, // для властивостей
    'value-no-vendor-prefix': null, // для значень (наприклад display: -webkit-box)
    'selector-no-vendor-prefix': null, // для селекторів (типу ::-webkit-scrollbar)
    'media-feature-name-no-vendor-prefix': null, // для медіа-фіч (типу -webkit-min-device-pixel-ratio)
  },
  // Налаштування для специфічних файлів.
  overrides: [
    {
      // Правило застосовується до всіх файлів з розширенням .scss.
      files: ['*.scss', '**/*.scss'],
      // Вказує, що потрібно використовувати парсер SCSS для обробки SCSS синтаксису.
      customSyntax: 'postcss-scss',
    },
  ],
  defaultSeverity: 'warning',
};
