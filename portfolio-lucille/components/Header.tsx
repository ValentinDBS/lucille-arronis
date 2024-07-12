import Image from "next/image";
import Link from "next/link";

// Définition du type des props
type HeaderProps = {
  menuIsActive: any;
  setMenuIsActive: (isActive: any) => void;
};

const Header: React.FC<HeaderProps> = ({ menuIsActive, setMenuIsActive }) => {
  return (
    <header className="grid grid-cols-subgrid grid-rows-subgrid col-span-full lg:row-span-1 place-items-center">
      <div className="col-start-1 col-span-1 sm:col-start-2 lg:col-span-1 lg:col-start-2 bg-secondary w-full h-full flex justify-center items-center">
        <Link href="/" className="block md:w-fit lg:w-2/3 2xl:w-fit">
          <Image
            className="w-2/3 mx-auto"
            src="/logo-lucille-clair.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
      </div>

      <div className="header -col-start-1 sm:-col-start-3 justify-self-center md:justify-self-center">
        <div
          onClick={() => {
            setMenuIsActive(!menuIsActive);
          }}
          className={`burger ${menuIsActive ? "burgerActive" : ""}`}
        ></div>
      </div>
    </header>
  );
};

export default Header;
