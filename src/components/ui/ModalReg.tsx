import { Button, Form, Input } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/es/interface';
import { Link, useNavigate } from 'react-router-dom';
import { Routes } from '../../constants/routes';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import { useAppDispatch } from '../../store';
import { registration } from '../../store/auth/authActions';

function ModalReg() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = (values: { secrete_code: string }) => {
    dispatch(registration(values.secrete_code)).then((data) => {
      console.log(data);
      navigate(Routes.PROFILE);
    });
  };

  const onFinishFailed = (
    errorInfo: ValidateErrorEntity<{ secrete_code: string }>,
  ) => {
    console.log('Failed:', errorInfo);
    console.log(errorInfo.values);
  };
  return (
    <div className="mx-auto my-10 max-w-[90rem]">
      <div className="mx-auto max-w-[35rem] rounded-xl bg-gray-50 px-[4.5rem] pb-14 pt-10">
        <Link to={Routes.REGISTER}>
          <Button
            className="flex items-center text-lg font-bold"
            icon={<ArrowLeft />}
            type="link"
          >
            Назад
          </Button>
        </Link>
        <p className="mb-8 mt-[2.125rem] text-center text-lg font-bold">
          Мы отправили на вашу почту код-подтверждение, введите его ниже
        </p>
        <Form
          name="confirm"
          className="flex flex-col items-center justify-center gap-5"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
        >
          <Form.Item<string>
            name="secrete_code"
            className="w-[15.6rem]"
            rules={[{ required: true, message: 'Пожалуйста введите код' }]}
          >
            <Input className="border-gray-400" />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              className="flex h-12 w-[15.6rem] items-center justify-center gap-2 rounded-full border-none bg-amber-200 text-lg font-bold hover:bg-amber-300 hover:text-gray-950 active:border-none"
            >
              Подтвердить
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default ModalReg;
