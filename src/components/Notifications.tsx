import { Switch } from 'antd';

function Notifications() {
  const onChangeEmail = (checked: boolean) => {
    console.log(`email ${checked}`);
  };

  const onChangeSMS = (checked: boolean) => {
    console.log(`sms ${checked}`);
  };
  return (
    <main className="flex max-w-[59.25] gap-[6.25rem] rounded-xl bg-blue-50 p-[3.25rem]">
      <div>
        <h3 className="mb-10">Настройте уведомления</h3>
        <div className="mb-6 flex w-[22.5rem] justify-between">
          <p>Получать уведомления по e-mail</p>
          <Switch onChange={onChangeEmail} />
        </div>
        <div className="flex w-[22.5rem] justify-between">
          <p>Получать уведомления по смс</p>
          <Switch onChange={onChangeSMS} />
        </div>
      </div>
      <div className="max-w-[26.35rem] rounded-xl bg-white px-10 py-8">
        <p className="mb-3 text-sm font-bold">Будем присылать только важное</p>
        <ul className="list-disc text-sm">
          <li className="ml-4">
            Аварийное отключение света или воды в ввашем доме
          </li>
          <li className="ml-4">
            Начало плановых ремонтных работ придомовой территории
          </li>
          <li className="ml-4">Другие мероприятия ЖКХ</li>
        </ul>
      </div>
    </main>
  );
}

export default Notifications;
