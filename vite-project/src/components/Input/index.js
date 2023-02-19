import El from '../../library/El';

const Input = () => {
  return El({
    element: 'form',
    className: 'relative',
    child: [
      El({
        element: 'input',
        className:
          'outline-0 text-black py-1 pl-3 pr-10 rounded-md bg-gray-100 h-10 w-[30rem] ml-48 placeholder-gray-300 mr-3',
        type: 'text',
        dir: 'rtl',
        placeholder: 'جستجو در همه آگهی ها',
        style: 'font-Family:vazir',
      }),
      El({
        element: 'img',
        src: '../../../src/components/Navbar/img/magnifying-glass.png',
        className: 'absolute right-[1.5rem] top-[0.7rem] m-auto font-vazir',
      }),
    ],
  });
};

export default Input;
