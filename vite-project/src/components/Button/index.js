import El from '../../library/El';
const varients = {
  contained: 'bg-brown',
  outlined: 'border border-blue-700',
  link: 'bg-transparent',
};

const button = ({ element, child, variant = 'contained' }) => {
  if (variant === 'link') {
    return El({
      element: element || 'button',
      className: `${varients[variant]} w-18 hidden md:flex items-center text-gray-400 text-sm hover:text-gray-800 hover:bg-gray-100 px-3 py-2 h-10 rounded-md font-bold text-md mr-4`,
      style: 'font-family:vazir',
      child,
    });
  } else {
    return El({
      element: element || 'button',
      className: `${varients[variant]} md:flex hidden text-gray-200 px-3 py-2 mr-4 ml-5 h-10 rounded-md font-bold text-md mx-3 text-sm items-center`,
      style: 'font-family:vazir',
      child,
    });
  }
};

export default button;
