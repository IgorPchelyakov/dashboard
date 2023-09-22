import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Layout from '@/components/Layout/Layout';
import { Paths } from '@/paths';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Image, Spin } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import s from '../../../NewsPage.module.css';
import { useGetEmployeeQuery } from '@/redux/services/employees';
import moment from 'moment';
import 'moment/locale/uk';
import { useGetIrpinNewsByIdQuery } from '@/redux/services/regionsNews/Kyiv/irpin';
moment.locale('uk');
const IrpinNewsPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const params = useParams();
    const { data, isLoading } = useGetIrpinNewsByIdQuery(params.id || '');
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
        return _jsx(Spin, {});
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
    }
    else {
        updateText = `оновлення ${updatedAt.format('DD.MM.YYYY')}`;
    }
    return (_jsx(_Fragment, { children: _jsxs(Layout, { children: [_jsxs(Content, { className: "mx-auto max-w-[1200px]", children: [_jsxs("div", { className: "mx-auto max-w-[600px]", children: [_jsx("h1", { className: "mb-5 text-3xl", children: data.title }), _jsx("p", { className: "mb-5 border-b pb-5 text-xl font-light", children: data.desc })] }), _jsx("figure", { className: "mx-auto mb-5 flex justify-center", children: _jsx(Image, { src: data.mainImage, width: data.imageSize === false ? 1200 : 600, height: data.imageSize === false ? 800 : 400, className: "object-cover", preview: true }) }), _jsxs("p", { children: [data.mainImgDesc, " ", data.mainImgAuthor] }), _jsx("div", { className: s.content, dangerouslySetInnerHTML: { __html: data.content } }), _jsxs("div", { className: s.content, children: [_jsxs("h4", { children: [nick, " - ", authorDesc] }), _jsxs("h4", { children: ["\u0426\u0435\u0439 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B \u043E\u043F\u0443\u0431\u043B\u0456\u043A\u043E\u0432\u0430\u043D\u043E", ' ', moment(data.publishedAt).format('DD.MM.YYYY'), ", ", updateText, ", \u0440\u043E\u0437\u0434\u0456\u043B ", data.section, ", \u0456\u0437 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C: ", data.title, ". | \u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456\u0448\u043D\u044F \u0433\u0430\u0437\u0435\u0442\u0430 | \u0421\u0442\u0440\u0456\u0447\u043A\u0430 \u043D\u043E\u0432\u0438\u043D | \u041F\u0456\u0434\u043F\u0438\u0448\u0456\u0442\u044C\u0441\u044F"] })] })] }), _jsx(ErrorMessage, { message: error })] }) }));
};
export default IrpinNewsPage;
