import { selectUser } from '@/redux/features/login/login.slice';
import { FC, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface PrivateProps {
  children: ReactNode;
}

const PrivateRoute: FC<PrivateProps> = ({ children }) => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [navigate, user]);
  return <>{children}</>;
};

export default PrivateRoute;
