import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: FC = () => {
  const isAuth = true;
  const activeStyles = {
    fontWeight: '700',
  };
  return (
    <>
      <div className="flex items-center justify-between py-4">
        <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-gray-600 text-white">
          E
        </span>
        {isAuth && (
          <ul className="flex gap-8">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                DASHBOARD
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
