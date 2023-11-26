import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Routes } from '../constants/routes';
import { ValidateErrorEntity } from 'rc-field-form/es/interface';
import { Registry } from '../store/auth/types';
import { useAppDispatch } from '../store';
import { confirmEmail } from '../store/auth/authActions';

function RegistrationForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = (values: Registry) => {
    dispatch(confirmEmail(values));
    navigate(Routes.APPROVE);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<Registry>) => {
    console.log('Failed:', errorInfo);
    console.log(errorInfo.values);
  };

  return (
    <div className="mx-auto max-w-[90rem]">
      <Form
        name="registration"
        className="mx-auto mt-6 flex max-w-[35rem] flex-col items-center justify-center gap-[3.25rem] rounded-xl bg-gray-50 px-[4.5rem] pb-[3.25rem] pt-10"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
      >
        <div className="flex h-12 w-[18.75rem] gap-9">
          <Link
            to={Routes.REGISTER}
            className="flex w-[8.25rem] items-center justify-center border-b-2 border-blue-500 text-lg font-bold"
          >
            <span>Регистрация</span>
          </Link>
          <Link
            to={Routes.LOGIN}
            className="flex w-[8.25rem] items-center justify-center text-lg"
          >
            <span>Вход</span>
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <Form.Item<string>
              label={<p className="font-nunito text-sm text-[#242424]">Имя</p>}
              name="first_name"
              className="w-[12.625rem]"
              rules={[
                { required: true, message: 'Пожалуйста введите свое имя' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<string>
              label={
                <p className="font-nunito text-sm text-[#242424]">Фамилия</p>
              }
              name="last_name"
              className="w-[12.625rem]"
              rules={[
                { required: true, message: 'Пожалуйста введите свою фамилию' },
              ]}
            >
              <Input />
            </Form.Item>
          </div>

          <Form.Item<string>
            label={<p className="font-nunito text-sm text-[#242424]">Почта</p>}
            name="email"
            className="w-[26rem]"
            rules={[
              { required: true, message: 'Пожалуйста введите свою почту' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<string>
            label={
              <p className="font-nunito text-sm text-[#242424]">Телефон</p>
            }
            name="phone"
            className="w-[26rem]"
            rules={[
              { required: true, message: 'Пожалуйста введите свой телефон' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<string>
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
              Зарегистрироваться
            </Button>
            <p className="w-[26rem]">
              Нажимая зарегистрироваться я даю согласие на обработку
              персональных данных
            </p>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default RegistrationForm;
