import { useState } from 'react';
import Profile from '../components/Profile';
import PasswordChangeForm from '../components/PasswordChangeForm';
import Notifications from '../components/Notifications';

const enum Tabs {
  ACCOUNT = 'account',
  PASSWORD = 'password',
  NOTIFICATIONS = 'notifications',
}

function ProfilePage() {
  const [activeTab, setActiveTab] = useState(Tabs.ACCOUNT);

  const isAccount = activeTab === Tabs.ACCOUNT;
  const isPassword = activeTab === Tabs.PASSWORD;
  const isNotifications = activeTab === Tabs.NOTIFICATIONS;

  return (
    <div className="mx-auto max-w-[90rem] ">
      <div className="relative mx-32 mt-6 flex items-start gap-5">
        <aside className="w-[11.25rem]">
          <div
            className={`rounded-lg px-5 py-4 ${
              isAccount ? 'bg-amber-200' : ''
            }  text-base`}
            onClick={() => setActiveTab(Tabs.ACCOUNT)}
          >
            Аккаунт
          </div>
          <div
            className={`rounded-lg px-5 py-4 ${
              isPassword ? 'bg-amber-200' : ''
            } text-base`}
            onClick={() => setActiveTab(Tabs.PASSWORD)}
          >
            Пароль
          </div>
          <div
            className={`rounded-lg px-5 py-4 ${
              isNotifications ? 'bg-amber-200' : ''
            } text-base`}
            onClick={() => setActiveTab(Tabs.NOTIFICATIONS)}
          >
            Уведомления
          </div>
        </aside>
        {isAccount && <Profile />}
        {isPassword && <PasswordChangeForm />}
        {isNotifications && <Notifications />}
      </div>
    </div>
  );
}

export default ProfilePage;
