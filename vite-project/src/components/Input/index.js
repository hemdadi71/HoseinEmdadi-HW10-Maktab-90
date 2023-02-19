import El from '../../library/El';

const Input = () => {
  return El({
    element: 'form',
    className: 'relative w-[95%] xl:w-auto',
    child: [
      El({
        element: 'input',
        className:
          'outline-0 text-black py-1 pl-3 pr-10 rounded-md bg-gray-100 h-10 w-[100%] xl:w-[30rem] xl:ml-48 placeholder-gray-300 mr-3',
        type: 'text',
        dir: 'rtl',
        placeholder: 'جستجو در همه آگهی ها',
        style: 'font-Family:vazir',
      }),
      El({
        element: 'img',
        src: '../../../src/components/Navbar/img/magnifying-glass.png',
        className:
          'absolute xl:right-[1.5rem] top-[0.7rem] right-[1rem] m-auto font-vazir',
      }),
      El({
        element: 'span',
        className: 'w-[.1rem] h-6 bg-gray-300 absolute xl:hidden left-20 top-2',
        child: '',
      }),
      El({
        element: 'span',
        child: 'تهران',
        className: 'absolute xl:hidden text-gray-400 top-2 left-8',
      }),
      El({
        element: 'img',
        child: '',
        src: '../../../src/components/Navbar/img/location.png',
        className:'absolute xl:hidden top-3 left-2'
      }),
    ],
  });
};

export default Input;
