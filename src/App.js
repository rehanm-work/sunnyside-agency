import CardGrid from './components/CardGrid';
import Footer from './components/Footer';
import Header from './components/Header';
import MultiImages from './components/MultiImages';
import NextCards from './components/NextCards';
import Testimonials from './components/Testimonials';
import { data } from './data';

function App() {
  return (
    <div>
      <Header />
      {data.map((items, index) => (
        <CardGrid key={index} imageLeft={false} {...items} />
      ))}
      <NextCards />
      <Testimonials />
      <MultiImages />
      <Footer />
    </div>
  );
}

export default App;
