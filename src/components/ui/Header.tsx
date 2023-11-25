import { Button } from 'antd';
import Logo from '../../assets/icons/Logo';
import LoginIcon from '../../assets/icons/LoginIcon';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants/routes';

function Header() {
  return (
    <header className="mx-auto max-w-[90rem] text-3xl">
      <div className="mx-32 my-4 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="flex max-w-[49.5rem] items-center justify-center gap-[3.75rem] text-lg">
          <Link to={`${Routes.MAP}`}>
            <p>Карта</p>
          </Link>
          <Link to={`${Routes.NEWS}`}>
            <p>Новости</p>
          </Link>
          <Link to={`${Routes.REQUESTS}`}>
            <p>Заявки</p>
          </Link>
        </nav>
        <Button className="my-[12.5px] flex h-12 w-40 items-center justify-center gap-2 rounded-full border-none bg-amber-200 text-lg font-bold hover:bg-amber-300 hover:text-gray-950 active:border-none md:mx-8">
          Войти
          <LoginIcon />
        </Button>
      </div>
    </header>
  );
}

export default Header;
