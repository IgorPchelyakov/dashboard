import Calculator from '@/components/Calculator/Calculator';
import Layout from '@/components/Layout/Layout';
import { useCountAllNationalNewsQuery } from '@/redux/services/counters';
import { FC, useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/uk';
import locale from 'antd/es/date-picker/locale/uk_UA';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
import { DatePicker, Spin } from 'antd';
dayjs.extend(localeData);

const DashboardPage: FC = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM'));

  const { data, error, isLoading, refetch } =
    useCountAllNationalNewsQuery(selectedDate);
  const handleDateChange = (date: Dayjs | null, dateString: string) => {
    if (date) {
      const formattedDate = date.format('YYYY-MM');
      setSelectedDate(formattedDate);
    }
  };
  useEffect(() => {
    refetch();
  }, [selectedDate, refetch]);

  const formDate = dayjs(selectedDate).format('MMMM - YYYY');
  return (
    <>
      <Layout>
        <DatePicker
          picker={'month'}
          defaultValue={dayjs(selectedDate)}
          onChange={handleDateChange}
          locale={locale}
        />
        <div className="mt-6 flex justify-between">
          {isLoading ? (
            <Spin />
          ) : (
            <Calculator
              title={'Всього опубліковано матеріалів'}
              quantity={data?.count}
              subtitle={'Переглядів'}
              quantityViews={data?.totalViews}
              footer={formDate}
            />
          )}
          <Calculator
            title={'Редакційних матеріалів'}
            quantity={'-'}
            subtitle={'Переглядів'}
            quantityViews={'-'}
            footer={'-'}
          />
          <Calculator
            title={'Рекламні публікації'}
            quantity={'-'}
            subtitle={'Переглядів'}
            quantityViews={'-'}
            footer={'-'}
          />
          <Calculator
            title={'Розміщено банерів'}
            quantity={'-'}
            subtitle={'Переглядів'}
            quantityViews={'-'}
            footer={'-'}
          />
        </div>
        <div className="mx-auto mt-12 flex items-center justify-center text-[20px] font-extralight leading-[24px]">
          Ласкаво просимо до Робочого столу
        </div>
      </Layout>
    </>
  );
};

export default DashboardPage;
