import { useCurrentQuery } from '@/redux/services/auth';

const Auth = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return children;
};

export default Auth;
