import { Button, Form, Input } from 'antd';

type FieldType = {
  city?: string;
  street?: string;
  house?: number;
  housing?: string;
  entrance?: number;
  apartment?: number;
  floor?: number;
};

function UserAddressForm() {
  return (
    <Form
      name="userdata"
      layout="vertical"
      className="flex items-end gap-8"
      autoComplete="off"
      requiredMark={false}
    >
      <div className="flex max-w-[45.25rem] flex-wrap gap-3">
        <Form.Item<FieldType>
          label={<p className="font-nunito text-sm text-[#242424]">Город</p>}
          name="city"
          className="w-[18.5rem]"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите свой город',
            },
          ]}
        >
          <Input className="border-gray-400" />
        </Form.Item>

        <Form.Item<FieldType>
          label={<p className="font-nunito text-sm text-[#242424]">Улица</p>}
          name="street"
          className="w-[18.5rem]"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите свою улицу',
            },
          ]}
        >
          <Input className="border-gray-400" />
        </Form.Item>

        <Form.Item<FieldType>
          label={<p className="font-nunito text-sm text-[#242424]">Дом</p>}
          name="house"
          className="w-28"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите свой дом',
            },
          ]}
        >
          <Input className="border-gray-400" />
        </Form.Item>
        <Form.Item<FieldType>
          label={<p className="font-nunito text-sm text-[#242424]">Корпус</p>}
          name="housing"
          className="w-28"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите свой корпус',
            },
          ]}
        >
          <Input className="border-gray-400" />
        </Form.Item>
        <Form.Item<FieldType>
          label={<p className="font-nunito text-sm text-[#242424]">Квартира</p>}
          name="apartment"
          className="w-28"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите свою квартиру',
            },
          ]}
        >
          <Input className="border-gray-400" />
        </Form.Item>
        <Form.Item<FieldType>
          label={<p className="font-nunito text-sm text-[#242424]">Подъезд</p>}
          name="entrance"
          className="w-28"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите свой подъезд',
            },
          ]}
        >
          <Input className="border-gray-400" />
        </Form.Item>
        <Form.Item<FieldType>
          label={<p className="font-nunito text-sm text-[#242424]">Этаж</p>}
          name="floor"
          className="w-44"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите свой этаж',
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

export default UserAddressForm;
