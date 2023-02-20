import El from '../../library/El';

const RowSidebar = () => {
  return El({
    element: 'ul',
    className: 'flex flex-row-reverse gap-3 text-sm overflow-x-auto no-scrollbar scroll-smooth',
    child: [
      El({
        element: 'li',
        className:
          'border-2 py-1 px-1 rounded-3xl text-gray-500 flex items-center justify-center gap-2 min-w-[7rem] max-h-8',
        child: [
          El({
            element: 'p',
            child: 'فیلتر ها',
          }),
          El({
            element: 'img',
            className: 'w-4 h-4',

            src: '../../../src/components/Row-Sidebar/img/setting.png',
          }),
        ],
      }),
      El({
        element: 'li',
        className:
          'border-2 py-1 px-1 rounded-3xl text-gray-500 flex items-center justify-center gap-2 min-w-[7rem] max-h-8',
        child: [
          El({
            element: 'p',
            child: 'دسته ها',
          }),
          El({
            element: 'img',
            className: 'w-4 h-4',

            src: '../../../src/components/Row-Sidebar/img/more.png',
          }),
        ],
      }),
      El({
        element: 'li',
        className:
          'border-2 py-1 px-1 rounded-3xl text-gray-500 flex items-center justify-center gap-2 min-w-[7rem] max-h-8',
        child: [
          El({
            element: 'p',
            child: 'خودرو سواری',
          }),
        ],
      }),
      El({
        element: 'li',
        className:
          'border-2 py-1 px-1 rounded-3xl text-gray-500 flex items-center justify-center gap-2 min-w-[7rem] max-h-8',
        child: [
          El({
            element: 'p',
            child: 'فروش آپارتمان',
          }),
        ],
      }),
      El({
        element: 'li',
        className:
          'border-2 py-1 px-1 rounded-3xl text-gray-500 flex items-center justify-center gap-2 min-w-[7rem] max-h-8',
        child: [
          El({
            element: 'p',
            child: 'اجاره آپارتمان',
          }),
        ],
      }),
      El({
        element: 'li',
        className:
          'border-2 py-1 px-3 rounded-3xl text-gray-500 flex items-center justify-center gap-2 max-h-8',
        child: [
          El({
            element: 'p',
            child: 'موبایل',
          }),
        ],
      }),
      El({
        element: 'li',
        className:
          'border-2 py-1 px-1 rounded-3xl text-gray-500 flex items-center justify-center gap-2 min-w-[7rem] max-h-8',
        child: [
          El({
            element: 'p',
            child: 'صندلی و نیمکت',
          }),
        ],
      }),
      El({
        element: 'li',
        className:
          'border-2 py-1 px-3 rounded-3xl text-gray-500 flex items-center justify-center gap-2 max-h-8',
        child: [
          El({
            element: 'p',
            child: 'حیوانات',
          }),
        ],
      }),
      El({
        element: 'li',
        className:
          'border-2 py-1 px-1 rounded-3xl text-gray-500 flex items-center justify-center gap-2 min-w-[7rem] max-h-8',
        child: [
          El({
            element: 'p',
            child: 'وسایل شخصی',
          }),
        ],
      }),
      El({
        element: 'li',
        className:
          'border-2 py-1 px-3 rounded-3xl text-gray-500 flex items-center justify-center gap-2 max-h-8',
        child: [
          El({
            element: 'p',
            child: 'خدمات',
          }),
        ],
      }),
      El({
        element: 'li',
        className:
          'border-2 py-1 px-3 rounded-3xl text-gray-500 flex items-center justify-center gap-2 max-h-8',
        child: [
          El({
            element: 'p',
            child: 'استخدام',
          }),
        ],
      }),
      El({
        element: 'li',
        className:
          'border-2 py-1 px-3 rounded-3xl text-gray-500 flex items-center justify-center gap-2 max-h-8',
        child: [
          El({
            element: 'p',
            child: 'تلوزیون',
          }),
        ],
      }),
    ],
  });
};

export default RowSidebar;
