import El from '../../library/El';
import button from '../Button';

const Navbar = () => {
  return El({
    element: 'nav',
    className: 'bg-yellow-500 text-white',
    
    child: [
      button({
        child: 'ثبت آگهی',
        variant: 'contained',
      }),
    ],
  });
};

export default Navbar;
