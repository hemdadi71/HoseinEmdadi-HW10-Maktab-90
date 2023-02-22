import El from '../../library/El';
const classes = 'flex flex-col sm:flex-row items-center';
const BottomMenu = () => {
  return El({
    element: 'div',
    className: 'flex flex-grow justify-evenly mb-4',
    dir: 'rtl',
    child: [
      El({
        element: 'div',
        className: `${classes}`,
        child: [
          El({
            element: 'img',
            className: 'w-8 sm:ml-2',
            src: '../../../src/components/Navbar/img/download (1).svg',
          }),
          El({
            element: 'p',
            className: 'text-red-600 text-sm',
            child: 'آگهی ها',
          }),
        ],
      }),
      El({
        element: 'div',
        className: `${classes}`,
        child: [
          El({
            element: 'img',
            className: 'w-5 mt-2 sm:ml-2',
            src: '../../../src/components/Buttom-Menu/img/more.png',
          }),
          El({
            element: 'p',
            className: 'text-gray-500 text-sm mt-2',
            child: 'دسته ها',
          }),
        ],
      }),
      El({
        element: 'div',
        className: `${classes}`,
        child: [
          El({
            element: 'img',
            className: 'w-5 mt-2 sm:ml-2',
            src: '../../../src/components/Buttom-Menu/img/plus (1).png',
          }),
          El({
            element: 'p',
            className: 'text-gray-500 text-sm mt-2',
            child: 'ثبت آگهی',
          }),
        ],
      }),
      El({
        element: 'div',
        className: `${classes}`,
        child: [
          El({
            element: 'img',
            className: 'w-5 mt-2 sm:ml-2',
            src: '../../../src/components/Buttom-Menu/img/chat.png',
          }),
          El({
            element: 'p',
            className: 'text-gray-500 text-sm mt-2',
            child: 'چت',
          }),
        ],
      }),
      El({
        element: 'div',
        className: `${classes}`,
        child: [
          El({
            element: 'img',
            className: 'w-5 mt-2 sm:ml-2',
            src: '../../../src/components/Buttom-Menu/img/user.png',
          }),
          El({
            element: 'p',
            className: 'text-gray-500 text-sm mt-2',
            child: 'دیوار من',
          }),
        ],
      }),
    ],
  });
};

export default BottomMenu;
