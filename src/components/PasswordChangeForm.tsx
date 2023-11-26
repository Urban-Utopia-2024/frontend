import { Button, Form, Input } from 'antd';

type FieldType = {
  password_old?: string;
  password_new?: string;
};

function PasswordChangeForm() {
  return (
    <main className="flex max-w-[59.25] flex-col gap-5 rounded-xl bg-blue-50 p-[3.25rem]">
      <h3>Изменение пароля</h3>
      <Form
        name="userdata"
        layout="vertical"
        className="flex flex-wrap items-end gap-3"
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item<FieldType>
          label={
            <p className="font-nunito text-sm text-[#242424]">Текущий пароль</p>
          }
          name="password_old"
          className="w-[20.625rem]"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите текущий пароль',
            },
          ]}
        >
          <Input className="border-gray-400" />
        </Form.Item>

        <Form.Item<FieldType>
          label={
            <p className="font-nunito text-sm text-[#242424]">Новый пароль</p>
          }
          name="password_new"
          className="w-[20.625rem]"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите новый пароль',
            },
          ]}
        >
          <Input className="border-gray-400" />
        </Form.Item>
        <Form.Item className="">
          <Button
            type="link"
            htmlType="submit"
            className="mt-4 flex items-center justify-center py-3 text-blue-500"
          >
            Сохранить изменения
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}

export default PasswordChangeForm;
