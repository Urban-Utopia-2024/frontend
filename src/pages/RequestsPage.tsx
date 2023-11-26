import { useState } from 'react';
import NewRequest from '../components/NewRequest';
import RequestsHistory from '../components/RequestsHistory';

const enum Tabs {
  APPLY = 'account',
  HISTORY = 'password',
}

function RequestsPage() {
  const [activeTab, setActiveTab] = useState(Tabs.APPLY);

  const isApply = activeTab === Tabs.APPLY;
  const isHistory = activeTab === Tabs.HISTORY;
  return (
    <div className="mx-auto max-w-[90rem] ">
      <div className="relative mx-32 mt-6 flex items-start gap-5">
        <aside className="w-[11.25rem]">
          <div
            className={`rounded-lg px-5 py-4 ${
              isApply ? 'bg-amber-200' : ''
            }  text-base`}
            onClick={() => setActiveTab(Tabs.APPLY)}
          >
            Аккаунт
          </div>
          <div
            className={`rounded-lg px-5 py-4 ${
              isHistory ? 'bg-amber-200' : ''
            } text-base`}
            onClick={() => setActiveTab(Tabs.HISTORY)}
          >
            Пароль
          </div>
        </aside>
        {isApply && <NewRequest />}
        {isHistory && <RequestsHistory />}
      </div>
    </div>
  );
}

export default RequestsPage;
