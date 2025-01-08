import Header from './components/Header';
import Footer from './components/Footer';

function App(props) {
  return (

    <div class="h-screen w-screen  bg-[url('/assets/images/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div class='flex  flex-col  h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
        <Header />
        <div class="flex-1 overflow-auto px-6 py-3">
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
