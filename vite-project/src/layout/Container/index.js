import El from '../../library/El';

const Container = child => {
  return El({
    element: 'header',
    className: 'flex items-center bg-white',
    child,
  });
};

export default Container;
