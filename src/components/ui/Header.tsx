import { Button } from 'antd';
import Logo from '../../assets/icons/Logo';
import LoginIcon from '../../assets/icons/LoginIcon';

function Header() {
  return (
    <header className="mx-auto my-11 flex max-w-[90rem] items-center justify-between text-3xl">
      <Logo />
      <Button className="mx-8  my-[12.5px] flex h-12 w-40 items-center justify-center gap-2 rounded-full border-none bg-amber-200 text-lg font-bold hover:text-gray-950">
        Войти
        <LoginIcon />
      </Button>
    </header>
  );
}

export default Header;
