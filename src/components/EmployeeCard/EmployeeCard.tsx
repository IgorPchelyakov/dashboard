import { Paths } from '@/paths';
import { Employee } from '@/types/user';
import { Avatar, Button, Card, Divider } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeCard: FC<Employee> = ({
  id,
  firstName,
  middleName,
  lastName,
  avatarUrl,
  nickName,
  job,
  city,
  role,
  tel,
  email,
  telegramLink,
  instagramLink,
  facebookLink,
  twitterLink,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        key={id}
        title={`${lastName} ${firstName} ${middleName}`}
        className="relative mx-auto mb-8 max-w-[1200px]"
      >
        <div className="flex w-full gap-10">
          <Button
            type={'default'}
            onClick={() => {
              navigate(`${Paths.employee}/${id}`);
            }}
            className="absolute right-4 top-3 text-black"
          >
            Переглянути профіль
          </Button>
          <Avatar
            src={avatarUrl}
            className="max-h=[100px] h-full w-full max-w-[100px]"
          />
          <div className="mx-auto flex w-full max-w-[900px] gap-10">
            <div className="flex w-full gap-10">
              <div className="pt-6 text-gray-400">
                <p>Псевдонім</p>
                <p>Посада</p>
                <p>Місто</p>
                <p>Рівень доступу</p>
              </div>
              <Divider type={'vertical'} style={{ height: '100%' }} />
              <div className="pt-6">
                <p>{nickName}</p>
                <p>{job}</p>
                <p>{city}</p>
                <p>{role}</p>
              </div>
            </div>
            <div className="flex w-full gap-10">
              <div className="text-gray-400">
                <p>Мобільний телефон</p>
                <p>Електронна пошта</p>
                <p>Телеграм</p>
                <p>Інстаграм</p>
                <p>Фейсбук</p>
                <p>Твітер</p>
              </div>
              <Divider type={'vertical'} style={{ height: '100%' }} />
              <div className="">
                <p>{tel}</p>
                <p>{email}</p>
                <p>{telegramLink}</p>
                <p>{instagramLink}</p>
                <p>{facebookLink}</p>
                <p>{twitterLink}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default EmployeeCard;
