import Navbar from '../../components/Navbar';
import RowSidebar from '../../components/Row-Sidebar';
import Sidebar from '../../components/Sidebar';
import El from '../../library/El';

const Container = child => {
  return El({
    element: 'main',
    child: [
      El({
        element: 'header',
        className: 'border-b-2 border-gray-100 sticky top-0',
        child: [Navbar()],
      }),
      El({
        element: 'div',
        className: 'xl:hidden border-b-2 border-gray-100 py-2 px-2 overflow-auto',
        child: [RowSidebar()],
      }),
      El({
        element: 'article',
        className: 'flex justify-between pt-9 px-5 xl:w-auto 2xl:max-w-[85rem] mx-auto overflow-hidden',
        child: [
          El({
            element: 'section',
            className: '',
            child: [
              El({
                element: 'p',
                className: 'text-gray-400 text-xs',
                child: 'دیوار تهران ،انواع آگهی و خدمات در تهران',
              }),
              El({
                element: 'div',
                className: '',
                child: [],
              }),
            ],
          }),
          El({
            element: 'aside',
            className: 'xl:flex flex-col hidden',
            child: [Sidebar()],
          }),
        ],
      }),
    ],
  });
};

export default Container;
