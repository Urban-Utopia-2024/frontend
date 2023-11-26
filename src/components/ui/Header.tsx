import { Button } from 'antd';
import Logo from '../../assets/icons/Logo';
import LoginIcon from '../../assets/icons/LoginIcon';
import { Link, NavLink } from 'react-router-dom';
import { Routes } from '../../constants/routes';

function Header() {
  return (
    <header className="mx-auto max-w-[90rem] text-3xl">
      <div className="mx-4 my-4 flex items-center justify-between lg:mx-32">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="navigation mx-2 flex max-w-[49.5rem] items-center justify-center gap-4 text-lg lg:gap-[3.75rem]">
          <NavLink to={Routes.MAP}>
            <p className="text-sm md:text-lg">Карта</p>
          </NavLink>
          <NavLink to={Routes.NEWS}>
            <p className="text-sm md:text-lg">Новости</p>
          </NavLink>
          <NavLink to={Routes.REQUESTS}>
            <p className="text-sm md:text-lg">Заявки</p>
          </NavLink>
        </nav>
        <Button className="w-30 my-1 flex h-12 items-center justify-center gap-2 rounded-full border-none bg-amber-200 text-lg font-bold hover:bg-amber-300 hover:text-gray-950 active:border-none md:mx-8 lg:my-[12.5px] lg:w-40">
          Войти
          <div className="hidden lg:inline-block">
            <LoginIcon />
          </div>
        </Button>
      </div>
    </header>
  );
}

export default Header;
