import { Button, Form, Input } from 'antd';
import { photo } from '../../assets';
import LikeIcon from '../../assets/icons/LikeIcon';

const { TextArea } = Input;

const BlockComments = () => {
  return (
    <div className="rounded-xl bg-blue-50 p-6 md:p-12">
      <h3 className="mb-4 text-2xl">3 комментария</h3>

      <div className="flex max-w-[730px] flex-col">
        <p className="mb-2 text-xs">Добавьте свой комментарий</p>

        <Form className="mb-4">
          <TextArea
            rows={4}
            placeholder="Хочу поделиться своим мнением с жителями ЕКБ"
            maxLength={10000}
            className="mb-4"
          />

          <div className="flex justify-end">
            <Button
              onClick={() => {}}
              className="flex h-12 w-40 items-center justify-center gap-2 rounded-full border-none bg-amber-200 text-lg font-bold hover:bg-amber-300 hover:text-gray-950 active:border-none"
            >
              Отправить
            </Button>
          </div>
        </Form>

        <div className="flex flex-col gap-3">
          {/* Item */}
          <div className="flex flex-col">
            <div className="mb-3 flex items-center gap-3">
              <img
                className="h-[44px] w-[44px]"
                src="/img/avatars/1.png"
                alt="user"
              />

              <div className="block">
                <p className="text-sm font-bold">Владислав Сушков</p>
                <p className="text-xs">4 часа назад</p>
              </div>
            </div>

            <p className="mb-3 text-sm">
              Блин, я реально волнуюсь, может они передумают 🤔🤔🤔
            </p>

            <div className="flex gap-4">
              <div className="flex gap-1">
                <LikeIcon active={true} />
                <span>10</span>
              </div>
              <Button type="text" className="text-sm font-bold">
                Ответить
              </Button>
            </div>
          </div>

          {/* items */}
          <div className="border-l border-gray-400 pl-3">
            {/* Item */}
            <div className="flex flex-col">
              <div className="mb-3 flex items-center gap-3">
                <img
                  className="h-[44px] w-[44px]"
                  src="/img/avatars/2.png"
                  alt="user"
                />

                <div className="block">
                  <p className="text-sm font-bold">Светлана Дилакова</p>
                  <p className="text-xs">2 часа назад</p>
                </div>
              </div>

              <p className="mb-3 text-sm">
                Все должны получать за свою работу оплату нормальную))))))))
              </p>

              <div className="flex gap-4">
                <div className="flex gap-1">
                  <LikeIcon />
                  <span>2</span>
                </div>
                <Button type="text" className="text-sm font-bold">
                  Ответить
                </Button>
              </div>
            </div>

            {/* Item */}
            <div className="flex flex-col">
              <div className="mb-3 flex items-center gap-3">
                <img className="h-[44px] w-[44px]" src={photo} alt="user" />

                <div className="block">
                  <p className="text-sm font-bold">Анастасия Важная</p>
                  <p className="text-xs">2 часа назад</p>
                </div>
              </div>

              <p className="mb-3 text-sm">
                Это же не просто так, а на улучшение...
              </p>

              <div className="flex gap-4">
                <div className="flex gap-1">
                  <LikeIcon active={false} />
                  <span>3</span>
                </div>
                <Button type="text" className="text-sm font-bold">
                  Ответить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockComments;
