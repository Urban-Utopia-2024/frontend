import { Button, Form, Input } from 'antd';

type FieldType = {
  first_name?: string;
  last_name?: string;
  surname?: string;
};

function UserNameForm() {
  return (
    <Form
      name="userdata"
      layout="vertical"
      className="flex items-end gap-8"
      autoComplete="off"
      requiredMark={false}
    >
      <div className="flex flex-wrap gap-3">
        <Form.Item<FieldType>
          label={<p className="font-nunito text-sm text-[#242424]">Фамилия</p>}
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
          label={<p className="font-nunito text-sm text-[#242424]">Отчество</p>}
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
      <Form.Item className="">
        <Button
          type="link"
          htmlType="submit"
          className="flex items-center justify-center py-3 text-blue-500"
        >
          Сохранить изменения
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UserNameForm;
