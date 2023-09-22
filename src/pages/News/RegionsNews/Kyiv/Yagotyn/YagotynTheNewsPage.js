import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Layout from '@/components/Layout/Layout';
import YagotynPostCard from '@/components/Posts/Regions/Kyiv/YagotynNewsCard';
import RegionsPopover from '@/components/RegionPopover/RegionsPopover';
import { Paths } from '@/paths';
import { useGetAllYagotynNewsQuery } from '@/redux/services/regionsNews/Kyiv/yagotyn';
import { Button, Input, Pagination, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const YagotynTheNewsPage = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [titleQuery, setTitleQuery] = useState('');
    const pageSize = 20;
    const [filteredData, setFilteredData] = useState([]);
    const [paginatedData, setPaginatedData] = useState([]);
    const { data, isLoading } = useGetAllYagotynNewsQuery();
    useEffect(() => {
        let filteredPosts = data;
        if (titleQuery) {
            filteredPosts = filteredPosts?.filter((news) => news.title.toLowerCase().includes(titleQuery.toLowerCase()));
        }
        setFilteredData(filteredPosts);
        setCurrentPage(1);
    }, [data, titleQuery]);
    useEffect(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const slicedData = filteredData?.slice(startIndex, endIndex);
        setPaginatedData(slicedData);
    }, [filteredData, currentPage]);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (_jsx(_Fragment, { children: _jsxs(Layout, { children: [_jsxs("div", { className: "mx-auto mb-8 flex max-w-[1200px] items-center border-b border-black", children: [_jsx("div", { className: "text-2xl font-bold", children: "\u0421\u0442\u0440\u0456\u0447\u043A\u0430 \u043D\u043E\u0432\u0438\u043D" }), _jsx(Button, { type: 'link', onClick: () => navigate(`${Paths.newsAdd}`), className: "text-black", children: "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u044E" }), _jsx("div", { className: "flex gap-2", children: _jsx(RegionsPopover, {}) })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("div", { className: "flex gap-5", children: _jsx("div", { className: "mb-4", children: _jsx(Input, { placeholder: "\u041F\u043E\u0448\u0443\u043A \u043F\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430\u043C", value: titleQuery, onChange: (e) => setTitleQuery(e.target.value), style: { width: 250, marginRight: 8 } }) }) }), filteredData && filteredData.length > pageSize && (_jsx(Pagination, { current: currentPage, total: filteredData.length, pageSize: pageSize, onChange: handlePageChange, className: "mb-5", showSizeChanger: false }))] }), isLoading && _jsx(Spin, {}), paginatedData && paginatedData.length > 0 ? (paginatedData.map((news) => (_jsx(YagotynPostCard, { id: news.id, publishedAt: news.publishedAt, feed: news.feed, section: news.section, postType: news.postType, title: news.title, views: news.views, UserId: news.UserId }, news.id)))) : (_jsx("div", { children: "\u041D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0439" })), _jsx("div", { className: "flex justify-end", children: filteredData && filteredData.length > pageSize && (_jsx(Pagination, { current: currentPage, total: filteredData.length, pageSize: pageSize, onChange: handlePageChange, className: "mb-5", showSizeChanger: false })) })] }) }));
};
export default YagotynTheNewsPage;
