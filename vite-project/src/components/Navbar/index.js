import El from '../../library/El';
import button from '../Button';
import Input from '../Input';

const Navbar = () => {
  return El({
    element: 'nav',
    className: 'h-16 w-auto xl:w-auto 2xl:max-w-7xl m-auto flex items-center',
    child: [
      button({
        child: 'ثبت آگهی',
      }),
      button({
        child: 'پشتیبانی',
        variant: 'link',
      }),
      button({
        child: [
          El({
            element: 'p',
            child: 'چت',
          }),
          El({
            element: 'img',
            src: '../../../src/components/Navbar/img/chat.png',
            className: 'ml-2',
          }),
        ],
        variant: 'link',
      }),
      button({
        child: [
          El({
            element: 'p',
            child: 'دیوار من',
          }),
          El({
            element: 'img',
            src: '../../../src/components/Navbar/img/user.png',
            className: 'ml-2',
          }),
        ],
        variant: 'link',
      }),
      Input(),
      button({
        child: [
          El({
            element: 'img',
            src: '../../../src/components/Navbar/img/down.png',
            className: 'mr-2',
          }),
          El({
            element: 'p',
            child: 'دسته ها',
          }),
        ],
        variant: 'link',
      }),
      button({
        child: [
          El({
            element: 'p',
            child: 'تهران',
          }),
          El({
            element: 'img',
            src: '../../../src/components/Navbar/img/location.png',
            className: 'ml-2',
          }),
        ],
        variant: 'link',
      }),
      El({
        element: 'div',
        child: '',
        className: 'w-[.1rem] h-7 bg-gray-200',
      }),
      El({
        element: 'img',
        src: '../../../src/components/Navbar/img/download (1).svg',
        className:"w-10 ml-5"
      }),
    ],
  });
};

export default Navbar;
