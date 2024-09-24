export default {
  autoFocus: {
    value: false,
  },
  dynamicWidth: {
    value: false,
  },
  emojiButtonColors: {
    value: null,
  },
  emojiButtonRadius: {
    value: '100%',
  },
  emojiButtonSize: {
    value: 36,
  },
  emojiSize: {
    value: 24,
  },
  emojiVersion: {
    value: 15,
    choices: [1, 2, 3, 4, 5, 11, 12, 12.1, 13, 13.1, 14, 15],
  },
  exceptEmojis: {
    value: [],
  },
  icons: {
    value: 'auto',
    choices: ['auto', 'outline', 'solid'],
  },
  locale: {
    value: 'en',
    choices: [
      'en',
      'ar',
      'be',
      'cs',
      'de',
      'es',
      'fa',
      'fi',
      'fr',
      'hi',
      'it',
      'ja',
      'ko',
      'nl',
      'pl',
      'pt',
      'ru',
      'sa',
      'tr',
      'uk',
      'vi',
      'zh',
    ],
  },
  maxFrequentRows: {
    value: 4,
  },
  navPosition: {
    value: 'top',
    choices: ['top', 'bottom', 'none'],
  },
  fixedNav: {
    value: false,
  },
  noCountryFlags: {
    value: false,
  },
  noResultsEmoji: {
    value: null,
  },
  perLine: {
    value: 9,
  },
  previewEmoji: {
    value: null,
  },
  showPreview: {
    value: false,
  },
  previewPosition: {
    value: 'bottom',
    choices: ['top', 'bottom', 'none'],
  },
  showCategoriesName: {
    value: true,
  },
  searchPosition: {
    value: 'sticky',
    choices: ['sticky', 'static', 'none'],
  },
  set: {
    value: 'native',
    choices: ['native', 'apple', 'facebook', 'google', 'twitter'],
  },
  skin: {
    value: 1,
    choices: [1, 2, 3, 4, 5, 6],
  },
  skinTonePosition: {
    value: 'preview',
    choices: ['preview', 'search', 'none'],
  },
  theme: {
    value: 'auto',
    choices: ['auto', 'light', 'dark'],
  },

  // Data
  categories: null,
  categoryIcons: null,
  custom: null,
  data: null,
  i18n: null,

  // Callbacks
  getImageURL: null,
  getSpritesheetURL: null,
  onAddCustomEmoji: null,
  onClickOutside: null,
  onEmojiSelect: null,

  // Deprecated
  stickySearch: {
    deprecated: true,
    value: true,
  },

  displaySearch: false,
  dynamicPropsSettings: {
    nav: {
      paddingTop: '8px',
      paddingBottom: '8px',
      paddingLeft: '20px',
      paddingRight: '20px',
    },
    container: {
      paddingTop: '12px',
      paddingBottom: '12px',
    },
    categories: {
      height: '26px',
      gap: '16px',
      paddingLeft: '8px',
      paddingRight: '8px',
      fontSize: '12px',
    },
  },
}
