import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Layout from '@/components/Layout/Layout';
import EditObukhivNewsForm from '@/components/Posts/Regions/Kyiv/editObukhivNewsForm';
import { Paths } from '@/paths';
import { useGetAllEmployeesQuery } from '@/redux/services/employees';
import { useEditObukhivNewsByIdMutation, useGetObukhivNewsByIdQuery, } from '@/redux/services/regionsNews/Kyiv/obukhiv';
import { isErrorWithMessage } from '@/utils/is-error-with-message';
import { Row } from 'antd';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const EditObukhivNewsPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const params = useParams();
    console.log(params.id);
    const [editObukhivNews] = useEditObukhivNewsByIdMutation();
    const { data } = useGetObukhivNewsByIdQuery(params.id || '');
    const { data: employees } = useGetAllEmployeesQuery();
    const handleEditPost = async (data) => {
        try {
            await editObukhivNews({ ...data, id: params.id ?? '' }).unwrap();
            navigate(Paths.obukhivNews);
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
    return (_jsx(_Fragment, { children: _jsx(Layout, { children: _jsx(Row, { children: _jsx(EditObukhivNewsForm, { onFinish: handleEditPost, btnText: 'Зберегти', error: error, news: data, employees: employees }) }) }) }));
};
export default EditObukhivNewsPage;
