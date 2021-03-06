import React, { useEffect } from 'react';
import './HomePage.css';
import { IUser } from '../../interfaces/IUser';

import { getAllUsers } from '../../slices/ManagerSlice';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { useNavigate } from 'react-router-dom';

import { Navbar } from '../../Components/Navbar/Navbar';

import { EmployeeView } from '../../Components/EmployeeView/EmployeeView';
import { ManagerView } from '../../Components/ManagerView/ManagerView';

// go inside App for Route
export const HomePage: React.FC = () => {
  const userInfo = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const navigator = useNavigate();

  useEffect(() => {
    if (!userInfo.user) {
      navigator('/login');
    }
    // dispatch(getAllResolved());
  }, [userInfo]);

  return (
    <>
      <Navbar />
      <div className="userInfo">
        <h3>
          {userInfo.user?.role === 'FinanceManager'
            ? 'Manager: '
            : 'Employee: '}{' '}
          {userInfo.user?.firstName}{' '}
        </h3>

        <h3>Expense Reimbursment System</h3>
      </div>

      {/* {checkForContent} */}

      {/* home page - comes from outside component */}

      {userInfo.user?.role === 'FinanceManager' ? (
        <ManagerView />
      ) : (
        <EmployeeView />
      )}

      {/* <div className="userSection">
        <div className="reimbursementSection">
          <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
            Create Reimbursement
          </h2>

          <ReimbursementForm />
        </div>

        <div className="reimbursementSection">
          <h2>All Reimbursement Submission</h2>
        </div>
      </div> */}
    </>
  );
};
