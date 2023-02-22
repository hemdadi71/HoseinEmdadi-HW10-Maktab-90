import El from '../../library/El';
import items from './items';
let Products = [];
const Product = ({
  img,
  title,
  conditon,
  price,
  personal = 'فروشگاه',
  location,
}) => {
  return El({
    element: 'div',
    className: 'flex  border rounded-md gap-3 p-4',
    child: [
      El({
        element: 'img',
        className: 'rounded-md w-[135px]',
        src: `${img}`,
      }),
      El({
        element: 'div',
        className: 'flex overflow-hidden flex-col gap-2 w-full',
        dir: 'rtl',
        child: [
          El({
            element: 'p',
            className: 'font-bold text-gray-600 h-14 overflow-hidden max-w-fit text-ellipsis',
            child: `${title}`,
          }),
          El({
            element: 'p',
            className: 'text-sm text-gray-400',
            child: `${conditon}`,
          }),
          El({
            element: 'p',
            className: 'text-sm text-gray-400',
            child: `${price} تومان`,
          }),
          El({
            element: 'div',
            className: 'text-xs text-gray-400 overflow-hidden flex',
            child: [
              El({
                element: 'p',
                className: 'text-red-600 ml-1',
                child: `${personal}` || '',
              }),
              El({
                element: 'p',
                className: 'truncate',
                child: `${location}`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
for (const item of items) {
  Products.push(Product(item));
}

export default Products;
