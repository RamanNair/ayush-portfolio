import Navigation from './Navigation';

const Header = () => {
  return (
    <header class="flex flex-col md:flex-row justify-between border-b-[1px] border-primary bg-white px-12 py-4 text-primary-800">
      <p class="anton-regular flex  justify-center  text-3xl">AYUSH PRASHANT NAIR</p>
      <div class="flex justify-center gap-5 mt-3 md:mt-0">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
