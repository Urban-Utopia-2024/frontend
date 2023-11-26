import { Button, Form, Input } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/es/interface';
import { Link } from 'react-router-dom';
import { Routes } from '../constants/routes';

interface PasswordReset {
  email: string;
}
function PasswordResetForm() {
  const onFinish = (values: PasswordReset) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<PasswordReset>) => {
    console.log('Failed:', errorInfo);
    console.log(errorInfo.values);
  };

  return (
    <Form
      className="mx-auto mt-10 flex max-w-[35rem] flex-col items-center justify-center gap-[3.25rem] rounded-xl bg-gray-50 px-[4.5rem] py-[3.25rem]"
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
    >
      <p className="text-center text-lg font-bold">Восстановление пароля</p>
      <div className="flex flex-col">
        <Form.Item<string>
          label={<p className="font-nunito text-sm text-[#242424]">Почта</p>}
          name="email"
          className="w-[26rem]"
          rules={[{ required: true, message: 'Пожалуйста введите свою почту' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="w-[26rem]">
          <Button
            htmlType="submit"
            className="my-[12.5px] mt-5 flex h-12 w-[26rem] items-center justify-center gap-2 rounded-full border-none bg-amber-200 text-lg font-bold hover:bg-amber-300 hover:text-gray-950 active:border-none"
          >
            Восстановить пароль
          </Button>
          <Link to={Routes.LOGIN} className="w-[26rem] text-blue-500">
            <p className="mt-1 py-3 text-center">Вернуться к авторизации</p>
          </Link>
        </Form.Item>
      </div>
    </Form>
  );
}

export default PasswordResetForm;
