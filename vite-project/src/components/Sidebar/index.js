import El from '../../library/El';

const Sidebar = () => {
  return El({
    element: 'div',
    className:
      'w-[16rem] xl:max-h-[55%] 2xl:max-h-[860px] pt-9 overflow-auto no-scrollbar',
    dir: 'rtl',
    child: [
      El({
        element: 'p',
        className: 'text-gray-700 text-sm mb-6',
        child: 'دسته ها',
      }),
      El({
        element: 'ul',
        className:
          'flex flex-col gap-5 border-b border-gray-200 text-gray-500 text-sm pb-6',
        child: [
          El({
            element: 'li',
            className: 'flex gap-3',
            child: [
              El({
                element: 'img',
                className: 'w-6 cursor-pointer',
                src: '../../../src/components/Sidebar/img/apartment.png',
              }),
              El({
                element: 'a',
                className: 'hover:text-black',
                href: '#',
                child: 'املاک',
              }),
            ],
          }),
          El({
            element: 'li',
            className: 'flex gap-3',
            child: [
              El({
                element: 'img',
                className: 'w-6 cursor-pointer',
                src: '../../../src/components/Sidebar/img/sedan-car-front.png',
              }),
              El({
                element: 'a',
                className: 'hover:text-black',
                href: '#',
                child: 'وسایل نقلیه',
              }),
            ],
          }),
          El({
            element: 'li',
            className: 'flex gap-3',
            child: [
              El({
                element: 'img',
                className: 'w-6 cursor-pointer',
                src: '../../../src/components/Sidebar/img/cell-phone.png',
              }),
              El({
                element: 'a',
                className: 'hover:text-black',
                href: '#',
                child: 'کالای دیجیتال',
              }),
            ],
          }),
          El({
            element: 'li',
            className: 'flex gap-3',
            child: [
              El({
                element: 'img',
                className: 'w-6 cursor-pointer',
                src: '../../../src/components/Sidebar/img/lampshade.png',
              }),
              El({
                element: 'a',
                className: 'hover:text-black',
                href: '#',
                child: 'خانه و آشپزخانه',
              }),
            ],
          }),
          El({
            element: 'li',
            className: 'flex gap-3',
            child: [
              El({
                element: 'img',
                className: 'w-6 cursor-pointer',
                src: '../../../src/components/Sidebar/img/paint-brush.png',
              }),
              El({
                element: 'a',
                className: 'hover:text-black',
                href: '#',
                child: 'خدمات',
              }),
            ],
          }),
          El({
            element: 'li',
            className: 'flex gap-3',
            child: [
              El({
                element: 'img',
                className: 'w-6 cursor-pointer',
                src: '../../../src/components/Sidebar/img/wristwatch.png',
              }),
              El({
                element: 'a',
                className: 'hover:text-black',
                href: '#',
                child: 'وسایل شخصی',
              }),
            ],
          }),
          El({
            element: 'li',
            className: 'flex gap-3',
            child: [
              El({
                element: 'img',
                className: 'w-6 cursor-pointer',
                src: '../../../src/components/Sidebar/img/des-lunettes.png',
              }),
              El({
                element: 'a',
                className: 'hover:text-black',
                href: '#',
                child: 'سرگرمی و فراغت',
              }),
            ],
          }),
          El({
            element: 'li',
            className: 'flex gap-3',
            child: [
              El({
                element: 'img',
                className: 'w-6 cursor-pointer',
                src: '../../../src/components/Sidebar/img/user.png',
              }),
              El({
                element: 'a',
                className: 'hover:text-black',
                href: '#',
                child: 'اجتماعی',
              }),
            ],
          }),
          El({
            element: 'li',
            className: 'flex gap-3',
            child: [
              El({
                element: 'img',
                className: 'w-6 cursor-pointer',
                src: '../../../src/components/Sidebar/img/office-chair.png',
              }),
              El({
                element: 'a',
                className: 'hover:text-black',
                href: '#',
                child: 'تجهیزات و صنعتی',
              }),
            ],
          }),
          El({
            element: 'li',
            className: 'flex gap-3',
            child: [
              El({
                element: 'img',
                className: 'w-6 cursor-pointer',
                src: '../../../src/components/Sidebar/img/portfolio.png',
              }),
              El({
                element: 'a',
                className: 'hover:text-black',
                href: '#',
                child: 'استخدام و کار یابی',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className:
          'border-b border-gray-300 h-14 pr-3 pt-4 text-sm overflow-hidden',
        child: [
          El({
            element: 'img',
            src: '../../../src/components/Navbar/img/down.png',
            className: 'inline ml-1 cursor-pointer',
          }),
          El({
            element: 'p',
            className: 'inline cursor-pointer',
            child: 'محل',
          }),
          El({
            element: 'ul',

            child: [
              El({
                element: 'li',
                className: 'relative',
                child: [
                  El({
                    element: 'input',
                    className:
                      'my-5 outline-0 border-[0.1rem] border-gray-300 rounded-sm pl-0 w-full h-8',
                  }),
                  El({
                    element: 'img',
                    src: '../../../src/components/Sidebar/img/left-arrow.png',
                    className: 'absolute top-[1.9rem] left-3 w-2',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'border-b border-gray-300 pr-3 py-4 text-sm overflow-hidden',
        child: [
          El({
            element: 'img',
            src: '../../../src/components/Navbar/img/down.png',
            className: 'inline ml-1 cursor-pointer',
          }),
          El({
            element: 'p',
            className: 'inline cursor-pointer',
            child: 'قیمت',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'border-b border-gray-300 pr-3 py-4 text-sm overflow-hidden',
        child: [
          El({
            element: 'img',
            src: '../../../src/components/Navbar/img/down.png',
            className: 'inline ml-1 cursor-pointer',
          }),
          El({
            element: 'p',
            className: 'inline cursor-pointer',
            child: 'وضعیت آگهی',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex gap-7 text-xs text-gray-400 my-5',
        child: [
          El({
            element: 'a',
            href: '#',
            child: 'درباره دیوار',
          }),
          El({
            element: 'a',
            href: '#',
            child: 'دریافت برنامه',
          }),
          El({
            element: 'a',
            href: '#',
            child: 'بلاگ دیوار',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex gap-11 text-xs text-gray-400 my-5',
        child: [
          El({
            element: 'a',
            href: '#',
            child: 'کسب و کار ها',
          }),
          El({
            element: 'a',
            href: '#',
            child: 'پشتیبانی و قوانین',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex gap-11 my-5 justify-center items-center mt-8',
        child: [
          El({
            element: 'img',
            className: 'cursor-pointer',
            src: '../../../src/components/Sidebar/img/twitter.png',
          }),
          El({
            element: 'img',
            className: 'cursor-pointer',
            src: '../../../src/components/Sidebar/img/instagram.png',
          }),
          El({
            element: 'img',
            className: 'cursor-pointer',
            src: '../../../src/components/Sidebar/img/linkedin-logo.png',
          }),
          El({
            element: 'img',
            className: 'cursor-pointer',
            src: '../../../src/components/Sidebar/img/youtube.png',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex gap-5 mt-5 mb-3 justify-center items-center mt-8',
        child: [
          El({
            element: 'img',
            src: '../../../src/components/Sidebar/img/e-namad.png',
            className: 'w-20',
          }),
          El({
            element: 'img',
            src: '../../../src/components/Sidebar/img/etehadiekeshvaripng.parspng.com_.png',
            className: 'w-28',
          }),
        ],
      }),
    ],
  });
};

export default Sidebar;
