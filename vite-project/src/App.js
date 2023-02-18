import El from './library/El';
import Navbar from './components/Navbar';
import Container from './layout/Container';
const App = () => {
  const app = El({
    element: 'div',
    child: [Navbar()],
  });
  return Container(app);
};
export default App;
