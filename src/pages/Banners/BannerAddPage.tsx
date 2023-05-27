import Layout from '@/components/Layout/Layout';
import { Cascader, Form, Input, Switch } from 'antd';
import { FC } from 'react';
import { bannerFeeds } from './options';

const BannerAddPage: FC = () => {
  return (
    <>
      <Layout>
        <div className="mx-auto mb-8 max-w-[1200px] items-center">
          <div className="pb-2 text-2xl font-bold">Додати банер</div>
          <div className="mb-5 border border-black"></div>
          <div>
            <Form>
              <Form.Item name={'title'} label={'Заголовок'}>
                <Input className="" />
              </Form.Item>
              <Form.Item name={'desc'} label={'Короткий опис'}>
                <Input className="" />
              </Form.Item>
              <div className="mb-5 border"></div>
              <div className="mb-5 font-bold">Головне зображення</div>
              <div className="flex gap-10">
                <Form.Item name={'desktop'} label={'Desktop'}>
                  <Switch className="bg-black" />
                </Form.Item>
                <Form.Item name={'mobile'} label={'Mobile'}>
                  <Switch className="bg-black" />
                </Form.Item>
                <Form.Item name={'urlOpen'} label={'Закрити посилання'}>
                  <Switch className="bg-black" />
                </Form.Item>
                <Form.Item name={'feeds'}>
                  <Cascader
                    options={bannerFeeds}
                    placeholder={'Оберіть стрічку'}
                    multiple
                    style={{ width: '300px' }}
                  />
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BannerAddPage;
