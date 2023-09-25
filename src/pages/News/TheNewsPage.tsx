import Layout from '@/components/Layout/Layout';
import NewsCard from '@/components/Posts/NewsCard';
import RegionsPopover from '@/components/RegionPopover/RegionsPopover';
import { Paths } from '@/paths';
import { useGetAllNewsQuery } from '@/redux/services/news';
import { News } from '@/types/news';
import {
  Button,
  DatePicker,
  Image,
  Input,
  Pagination,
  Select,
  Spin,
} from 'antd';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createNews from '@/assets/images/icons/createNews.svg';
import lineNews from '@/assets/images/icons/publication.svg';
import moment from 'moment';
import 'dayjs/locale/uk';
import dayjs from 'dayjs';
dayjs.locale('uk');
import localeData from 'dayjs/plugin/localeData';
import localeUa from 'antd/es/date-picker/locale/uk_UA';
import { types } from '@/components/Posts/options';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
dayjs.extend(localeData);

const CreatedNewsIcon = () => {
  return <Image src={createNews} height={22} width={22} preview={false} />;
};

const LineNewsIcon = () => {
  return <Image src={lineNews} height={22} width={22} preview={false} />;
};

const TheNewsPage: FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [titleQuery, setTitleQuery] = useState('');
  const pageSize = 35;

  const [filteredData, setFilteredData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);

  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);

  const { data, isLoading } = useGetAllNewsQuery();
  const { data: employees } = useGetAllEmployeesQuery();

  const authors = employees?.map((employee) => ({
    value: employee.id,
    label: `${employee.lastName} ${employee.firstName}`,
  }));

  useEffect(() => {
    let filteredNews = data;
    if (titleQuery) {
      filteredNews = filteredNews?.filter((news) =>
        news.title.toLowerCase().includes(titleQuery.toLowerCase()),
      );
    }
    setFilteredData(filteredNews);

    setCurrentPage(1);
  }, [data, titleQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Datepicker
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

  const handleDateChange = (date: moment.Moment | null) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    let filteredNews = filteredData;

    if (selectedDate) {
      // Set the selected date to the first day of the month
      const startOfMonth = dayjs(selectedDate).startOf('month');

      filteredNews = filteredNews?.filter((news) =>
        dayjs(news.publishedAt).isSame(startOfMonth, 'month'),
      );
    }
    if (selectedSection) {
      filteredNews = filteredNews?.filter(
        (news) => news.section === selectedSection,
      );
    }
    if (selectedAuthor) {
      // Фильтрация по автору
      filteredNews = filteredNews?.filter(
        (news) => news.UserId === selectedAuthor,
      );
    }

    const slicedData = filteredNews?.slice(startIndex, endIndex);
    setPaginatedData(slicedData);
  }, [
    filteredData,
    currentPage,
    selectedDate,
    selectedSection,
    selectedAuthor,
  ]);

  return (
    <>
      <Layout>
        <div className="mx-auto mb-8 flex max-w-[1200px] items-center border-b border-black">
          <div className="flex w-full justify-between pb-2">
            <div className="flex">
              <div className="text-2xl font-bold">Стрічка новин</div>
              <Button
                type={'link'}
                onClick={() => navigate(`${Paths.newsAdd}`)}
                className="flex items-center gap-2 text-black"
                icon={<CreatedNewsIcon />}
              >
                Створити публікацію
              </Button>
              <div className="flex items-center gap-2">
                <LineNewsIcon />
                <RegionsPopover />
              </div>
            </div>
            <div className="flex gap-4">
              <DatePicker
                picker="month"
                onChange={handleDateChange}
                locale={localeUa}
                className="mb-4 xl:mb-0"
              />
              <Select
                placeholder={'Оберіть розділ'}
                options={types}
                showSearch
                allowClear
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '')
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                value={selectedSection}
                onChange={(value) => setSelectedSection(value)}
                onClear={() => setSelectedSection(null)}
              />
              <Select
                showSearch
                placeholder={'Оберіть автора'}
                options={authors}
                optionFilterProp="children"
                allowClear
                filterOption={(input, option) =>
                  (option?.label ?? '')
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                value={selectedAuthor}
                onChange={(value) => setSelectedAuthor(value)}
                onClear={() => setSelectedAuthor(null)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <div className="mb-4">
              <Input
                placeholder="Пошук по заголовкам"
                value={titleQuery}
                onChange={(e) => setTitleQuery(e.target.value)}
                style={{ width: 250, marginRight: 8 }}
              />
              <Button
                onClick={() => setTitleQuery('')}
                className="text-red-500"
                size={'middle'}
              >
                Очистити
              </Button>
            </div>
          </div>
          {filteredData && filteredData.length > pageSize && (
            <Pagination
              current={currentPage}
              total={filteredData.length}
              pageSize={pageSize}
              onChange={handlePageChange}
              className="mb-5"
              showSizeChanger={false}
            />
          )}
        </div>
        {isLoading && <Spin />}
        {paginatedData && paginatedData.length > 0 ? (
          paginatedData.map((news: News) => (
            <NewsCard
              key={news.id}
              id={news.id}
              publishedAt={news.publishedAt}
              feed={news.feed}
              postType={news.postType}
              title={news.title}
              views={news.views}
              UserId={news.UserId}
              section={news.section}
              mainImage={news.mainImage}
              block={news.block}
              createdAt={news.createdAt}
              updatedAt={news.updatedAt}
              url={news.url}
            />
          ))
        ) : (
          <div>Немає доступних публікацій</div>
        )}
        <div className="flex justify-end">
          {filteredData && filteredData.length > pageSize && (
            <Pagination
              current={currentPage}
              total={filteredData.length}
              pageSize={pageSize}
              onChange={handlePageChange}
              className="mb-5"
              showSizeChanger={false}
            />
          )}
        </div>
      </Layout>
    </>
  );
};

export default TheNewsPage;
