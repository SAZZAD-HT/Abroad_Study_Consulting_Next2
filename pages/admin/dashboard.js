import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SessionCheck from '../api/sessioncheck';
import MyLayout from '../component/layout';
import AdminDrawer from '../component/admindrawer';
import Footer from '../component/footer';

const Dashboard = () => {
  const [adminCount, setAdminCount] = useState('');
  const [managerCount, setManagerCount] = useState('');
  const [consultantCount, setConsultantCount] = useState('');

  useEffect(() => {
    fetchAdminStatistics();
  }, []);

  const fetchAdminStatistics = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/adminCount');
      const response2 = await axios.get('http://localhost:3001/admin/managerCount');
      const response3 = await axios.get('http://localhost:3001/admin/consultantCount');
      setAdminCount(response.data);
      setManagerCount(response2.data);
      setConsultantCount(response3.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SessionCheck />
      <MyLayout title="Admin Dashboard" />
      <AdminDrawer />
      <div class="pt-9 sm:ml-64">
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-auto mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="pt-10 space-y-4 md:space-y-6 sm:p-8">
                            <form class="space-y-4 md:space-y-6" action="#">                            
                                <div className="bg-blue-200 p-4 rounded-lg shadow-md">
                                  <h3 className="text-lg font-semibold mb-2">Admins</h3>
                                  <p className="text-blue-700 text-xl font-bold">Total: {adminCount}</p>
                                </div>
                                <div className="bg-green-200 p-4 rounded-lg shadow-md">
                                  <h3 className="text-lg font-semibold mb-2">Managers</h3>
                                  <p className="text-green-700 text-xl font-bold">Total: {managerCount}</p>
                                </div>
                                <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
                                  <h3 className="text-lg font-semibold mb-2">Consultants</h3>
                                  <p className="text-yellow-700 text-xl font-bold">Total: {consultantCount}</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      <Footer />
    </>
  );
};

export default Dashboard;