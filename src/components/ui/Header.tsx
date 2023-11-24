import { Button } from 'antd';
import Logo from '../../assets/icons/Logo';
import LoginIcon from '../../assets/icons/LoginIcon';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="mx-4 my-4 flex max-w-[90rem] items-center justify-between text-3xl md:my-11 xl:mx-auto">
      <Link to="/">
        <Logo />
      </Link>
      <Button className="my-[12.5px] flex h-12 w-40 items-center justify-center gap-2 rounded-full border-none bg-amber-200 text-lg font-bold hover:text-gray-950 md:mx-8">
        Войти
        <LoginIcon />
      </Button>
    </header>
  );
}

export default Header;
