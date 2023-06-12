import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Layout from '@/components/Layout/Layout';
import { Paths } from '@/paths';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Image, Spin } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import s from '../../../NewsPage.module.css';
import { useGetEmployeeQuery } from '@/redux/services/employees';
import moment from 'moment';
import 'moment/locale/uk';
import { useGetBoyarkaNewsByIdQuery } from '@/redux/services/regionsNews/Kyiv/boyarka';
moment.locale('uk');

const BoyarkaNewsPage: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();

  const { data, isLoading } = useGetBoyarkaNewsByIdQuery(params.id || '');
  const userId = data?.UserId;
  const { data: user } = useGetEmployeeQuery(`${userId}`);
  const nick = user?.nickName;
  const authorDesc = user?.descUser;

  useEffect(() => {
    if (isErrorWithMessage(data) || isErrorWithMessage(user)) {
      setError('Помилка при завантаженні даних');
    }
  }, [data, user]);

  if (isLoading) {
    return <Spin />;
  }

  if (!data) {
    navigate(Paths.news);
    return null;
  }

  const createdAt = moment(data.createdAt);
  const updatedAt = moment(data.updatedAt);

  let updateText = '';

  if (createdAt.isSame(updatedAt, 'day')) {
    updateText = 'оновлення відсутні';
  } else {
    updateText = `оновлення ${updatedAt.format('DD.MM.YYYY')}`;
  }

  return (
    <>
      <Layout>
        <Content className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[600px]">
            <h1 className="mb-5 text-3xl">{data.title}</h1>
            <p className="mb-5 border-b pb-5 text-xl font-light">{data.desc}</p>
          </div>
          <figure className="mx-auto mb-5 flex justify-center">
            <Image
              src={data.mainImage}
              width={data.imageSize === false ? 1200 : 600}
              height={data.imageSize === false ? 800 : 400}
              className="object-cover"
              preview={true}
            />
            <figcaption></figcaption>
          </figure>
          <div
            className={s.content}
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <div className={s.content}>
            <h4>
              {nick} - {authorDesc}
            </h4>
            <h4>
              Цей матеріал опубліковано{' '}
              {moment(data.publishedAt).format('DD.MM.YYYY')}, {updateText},
              розділ {data.section}, із заголовком: {data.title}. | Сьогоднішня
              газета | Стрічка новин | Підпишіться
            </h4>
          </div>
        </Content>
        <ErrorMessage message={error} />
      </Layout>
    </>
  );
};

export default BoyarkaNewsPage;
