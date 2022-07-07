import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './components/Footer';


function App() {
  // const [currentPage, setCurrentPage] = useState('Home');

  // const renderPage = () => {
  //   if (currentPage === 'Home') {
  //     return <Home />
  //   }
  //   if (currentPage === 'About') {
  //     return <About />
  //   }
  //   if (currentPage === 'Contact') {
  //     return <Contact />
  //   }
  // }

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header />
      <Footer />
    </>

  );
}

export default App;
