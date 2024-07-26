type NavbarProps = {
  name: string;
};

const Navbar = ({ name }: NavbarProps) => {
  return (
    <header className="flex justify-center items-center">
      <div className="w-full max-w-[1440px] grid grid-cols-8">
        <div className="col-start-2 col-span-6 pt-6">
          <section className="flex sticky font-mono justify-between w-full items-center">
            <h1 className="sm:text-sm md:text-3xl font-bold">{name}</h1>

            <div className="flex justify-around w-48 sm:text-sm">
              <a href="">CONTACT</a>
              <a href="">ABOUT</a>
            </div>
          </section>
          <hr className="w-5/6 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
