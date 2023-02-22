import BottomMenu from '../../components/Buttom-Menu';
import Navbar from '../../components/Navbar';
import Products from '../../components/Product';
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
        className:
          'xl:hidden border-b-2 border-gray-100 py-2 px-2 overflow-auto',
        child: [RowSidebar()],
      }),
      El({
        element: 'article',
        className:
          'flex justify-between px-5 xl:w-auto 2xl:max-w-[85rem] mx-auto h-[100%] ',
        child: [
          El({
            element: 'section',
            className:
              'max-h-[750px] w-full overflow-auto no-scrollbar pb-5 text-right xl:text-left xl:mr-10 2xl:max-h-[900px]',
            child: [
              El({
                element: 'p',
                className: 'text-gray-400 text-xs pt-9',
                child: 'دیوار تهران ،انواع آگهی و خدمات در تهران',
              }),
              El({
                element: 'div',
                className:
                  'grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-3 mt-6 gap-4 overflow-auto',
                child: Products,
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
      El({
        element: 'footer',
        className: 'sticky bottom-0 flex xl:hidden bg-white h-[60px] border-t border-gray-300',
        child: [BottomMenu()],
      }),
    ],
  });
};

export default Container;
