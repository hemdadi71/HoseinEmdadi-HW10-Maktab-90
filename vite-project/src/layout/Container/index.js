import Navbar from '../../components/Navbar';
import El from '../../library/El';

const Container = child => {
  return El({
    element: 'header',
    className: 'border-b-2 border-gray-100',
    child: [Navbar()],
  });
};

export default Container;
