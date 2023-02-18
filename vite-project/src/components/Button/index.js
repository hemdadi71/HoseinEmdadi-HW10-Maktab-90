import El from '../../library/El';
const varients = {
  contained: 'bg-brown',
  outlined: 'border border-blue-700',
  link: 'bg-transparent',
};

const button = ({ element, child, variant = 'contained' }) => {
  return El({
    element: element || 'button',
    className: `${varients[variant]} px-6 py-3 rounded-md font-bold text-md m-5`,
    style: 'color:white;font-family:vazir',
    child,
  });
};

export default button;
