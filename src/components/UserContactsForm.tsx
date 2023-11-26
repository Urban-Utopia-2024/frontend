import { Button, Form, Input } from 'antd';

type FieldType = {
  email?: string;
  phone?: string;
};

function UserContactsForm() {
  return (
    <Form
      name="userdata"
      layout="vertical"
      className="flex flex-wrap gap-8"
      autoComplete="off"
      requiredMark={false}
    >
      <div className="flex flex-wrap gap-3">
        <Form.Item<FieldType>
          label={<p className="font-nunito text-sm text-[#242424]">Email</p>}
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
          label={<p className="font-nunito text-sm text-[#242424]">Телефон</p>}
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
  );
}

export default UserContactsForm;
