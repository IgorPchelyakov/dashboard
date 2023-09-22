import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Layout from '@/components/Layout/Layout';
import EditYagotynNewsForm from '@/components/Posts/Regions/Kyiv/editYagotynNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import { useEditYagotynNewsByIdMutation, useGetYagotynNewsByIdQuery, } from '@/redux/services/regionsNews/Kyiv/yagotyn';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const EditYagotynNewsPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const params = useParams();
    console.log(params.id);
    const [editYagotynNews] = useEditYagotynNewsByIdMutation();
    const { data } = useGetYagotynNewsByIdQuery(params.id || '');
    const { data: employees } = useGetAllEmployeesQuery();
    const handleEditPost = async (data) => {
        try {
            await editYagotynNews({ ...data, id: params.id ?? '' }).unwrap();
            navigate(Paths.yagotynNews);
        }
        catch (err) {
            const maybeError = isErrorWithMessage(err);
            if (maybeError) {
                setError(err.data.message);
            }
            else {
                setError('Невідома помилка');
            }
        }
    };
    return (_jsx(_Fragment, { children: _jsx(Layout, { children: _jsx(Row, { children: _jsx(EditYagotynNewsForm, { onFinish: handleEditPost, btnText: 'Зберегти', error: error, news: data, employees: employees }) }) }) }));
};
export default EditYagotynNewsPage;
