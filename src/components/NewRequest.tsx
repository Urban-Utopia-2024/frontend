import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload, UploadProps, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';

type FieldType = {
  theme?: string;
  content?: string;
  first_name: string;
  last_name: string;
  surname?: string;
  email?: string;
  phone?: string;
};

const props: UploadProps = {
  name: 'file',
  action: '',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function NewRequest() {
  return (
    <main className="flex max-w-[59.25] flex-col gap-11 rounded-xl bg-blue-50 p-[3.25rem]">
      <Form
        name="userdata"
        layout="vertical"
        className="flex items-end gap-8"
        autoComplete="off"
        requiredMark={false}
      >
        <div className="flex flex-col gap-5">
          <h3>Заявка</h3>
          <Form.Item<FieldType>
            label={<p className="font-nunito text-sm text-[#242424]">Тема</p>}
            name="theme"
            className="w-[37.5rem]"
            rules={[
              {
                required: true,
                message: 'Пожалуйста напишите тему',
              },
            ]}
          >
            <Input
              placeholder="Яма перед подъездом"
              className="border-gray-400"
            />
          </Form.Item>

          <Form.Item<FieldType>
            label={
              <p className="font-nunito text-sm text-[#242424]">
                Опишите свою проблему или поделитесь с нами идеей по улучшению
                работы жкх
              </p>
            }
            name="content"
            className="w-[37.5rem]"
            rules={[
              {
                required: true,
                message: 'Пожалуйста введите текст заявки',
              },
            ]}
          >
            <TextArea
              rows={6}
              placeholder="Перед подъездом яма, которая мешает парковаться"
              className="border-gray-400 "
            />
          </Form.Item>

          <Form.Item<FieldType> name="content" className="w-[37.5rem]">
            <Upload {...props}>
              <Button className="border-gray-400" icon={<UploadOutlined />}>
                Добавить файл
              </Button>
            </Upload>
            <p>Не более 20 Мбайт на все файлы</p>
          </Form.Item>

          <h3 className="mt-4">Личные данные</h3>
          <div className="flex flex-wrap gap-3">
            <Form.Item<FieldType>
              label={
                <p className="font-nunito text-sm text-[#242424]">Фамилия</p>
              }
              name="last_name"
              className="w-[12.125rem]"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста введите свою фамилию',
                },
              ]}
            >
              <Input className="border-gray-400" />
            </Form.Item>

            <Form.Item<FieldType>
              label={<p className="font-nunito text-sm text-[#242424]">Имя</p>}
              name="first_name"
              className="w-[12.125rem]"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста введите свою фамилию',
                },
              ]}
            >
              <Input className="border-gray-400" />
            </Form.Item>

            <Form.Item<FieldType>
              label={
                <p className="font-nunito text-sm text-[#242424]">Отчество</p>
              }
              name="surname"
              className="w-[16.25rem]"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста введите свое отчество',
                },
              ]}
            >
              <Input className="border-gray-400" />
            </Form.Item>
          </div>
          <h3 className="mt-4">Контакты</h3>
          <div className="flex flex-wrap gap-3">
            <Form.Item<FieldType>
              label={
                <p className="font-nunito text-sm text-[#242424]">Email</p>
              }
              name="email"
              className="w-[12.125rem]"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста введите свою почту',
                },
              ]}
            >
              <Input className="border-gray-400" />
            </Form.Item>

            <Form.Item<FieldType>
              label={
                <p className="font-nunito text-sm text-[#242424]">Телефон</p>
              }
              name="phone"
              className="w-[12.125rem]"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста введите свой телефон',
                },
              ]}
            >
              <Input className="border-gray-400" />
            </Form.Item>
          </div>
          <p className="text-sm">
            Личные данные и контакты атоматически заполняются из профиля.
            <br />
            Чтобы их изменить, перейдите в личный кабинет
          </p>
          <Form.Item>
            <Button className="flex h-12 w-[14.8rem] items-center justify-center gap-2 rounded-full border-none bg-amber-200 text-lg font-bold hover:bg-amber-300 hover:text-gray-950 active:border-none">
              Отправить заявку
            </Button>
          </Form.Item>
        </div>
      </Form>
    </main>
  );
}

export default NewRequest;
