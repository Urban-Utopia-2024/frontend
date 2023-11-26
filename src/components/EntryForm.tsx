import { Button, Form, Input } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/es/interface';
import { Link, useNavigate } from 'react-router-dom';
import { Routes } from '../constants/routes';
import { Login } from '../store/auth/types';
import { useAppDispatch } from '../store';
import { signInUser } from '../store/auth/authActions';

type FieldType = {
  email?: string;
  password?: string;
};

function EntryForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onFinish = (values: Login) => {
    dispatch(signInUser(values)).then(() => navigate(Routes.PROFILE));
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<Login>) => {
    console.log('Failed:', errorInfo);
    console.log(errorInfo.values);
  };

  return (
    <Form
      className="mx-auto mt-6 flex max-w-[35rem] flex-col items-center justify-center gap-[3.25rem] rounded-xl bg-gray-50 px-[4.5rem] pb-[3.25rem] pt-10"
      name="login"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      requiredMark={false}
    >
      <div className="flex h-12 w-[18.75rem] gap-9">
        <Link
          to={Routes.REGISTER}
          className="flex w-[8.25rem] items-center justify-center  text-lg "
        >
          <span>Регистрация</span>
        </Link>
        <Link
          to={Routes.LOGIN}
          className="flex w-[8.25rem] items-center justify-center border-b-2 border-blue-500 text-lg font-bold"
        >
          <span>Вход</span>
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <Form.Item<FieldType>
          label={<p className="font-nunito text-sm text-[#242424]">Почта</p>}
          name="email"
          className="w-[26rem]"
          rules={[{ required: true, message: 'Пожалуйста введите свою почту' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label={<p className="font-nunito text-sm text-[#242424]">Пароль</p>}
          name="password"
          className="w-[26rem]"
          rules={[{ required: true, message: 'Пожалуйста введите пароль' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className="w-[26rem]">
          <Button
            htmlType="submit"
            className="my-[12.5px] mt-5 flex h-12 w-[26rem] items-center justify-center gap-2 rounded-full border-none bg-amber-200 text-lg font-bold hover:bg-amber-300 hover:text-gray-950 active:border-none"
          >
            Войти
          </Button>
          <Link to={Routes.RESET} className="w-[26rem] text-blue-500">
            <p className="mt-1 py-3 text-center">Забыли пароль?</p>
          </Link>
        </Form.Item>
      </div>
    </Form>
  );
}

export default EntryForm;
