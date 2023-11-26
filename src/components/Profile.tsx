import { Button } from 'antd';
import UserAddressForm from './UserAddressForm';
import UserContactsForm from './UserContactsForm';
import UserNameForm from './UserNameForm';
import EditIcon from '../assets/icons/EditIcon';
import DeleteIcon from '../assets/icons/DeleteIcon';
import profileAvatar from '../assets/images/photo.png';
import LogoutIcon from '../assets/icons/LogoutIcon';

function Profile() {
  return (
    <>
      <main className="flex max-w-[59.25] flex-col gap-11 rounded-xl bg-blue-50 p-[3.25rem]">
        <div>
          <div className="mb-4 flex gap-5">
            <h3>Ваше фото </h3>
            <span className="flex items-center justify-center gap-4">
              <EditIcon />
              <DeleteIcon />
            </span>
          </div>
          <div className="h-[6.25rem] w-[6.25rem] rounded-full bg-white">
            <img
              className="h-[6.25rem] w-[6.25rem]"
              src={profileAvatar}
              alt="Аватар пользователя"
            />
          </div>
        </div>
        <div>
          <h3>Личные данные</h3>
          <div>
            <UserNameForm />
          </div>
        </div>
        <div>
          <h3>Адрес</h3>
          <div>
            <UserAddressForm />
          </div>
        </div>
        <div>
          <h3>Контакты</h3>
          <div>
            <UserContactsForm />
          </div>
        </div>
      </main>
      <Button className="absolute bottom-[-4.25rem] right-0 flex h-12 w-40 items-center justify-center gap-2 rounded-full border-2 border-amber-200 bg-white text-lg font-bold hover:border-amber-300  active:border-amber-400">
        Выйти
        <LogoutIcon />
      </Button>
    </>
  );
}

export default Profile;
