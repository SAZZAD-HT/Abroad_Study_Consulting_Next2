import { useState, useEffect } from 'react';
import axios from "axios";
import MyLayout from "@/pages/component/layout";
import SessionCheck from "@/pages/api/sessioncheck";
import AdminDrawer from "@/pages/component/admindrawer";
import Footer from '@/pages/component/footer';

const AdminsPage = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    async function fetchAdmins() {
      try {
        const response = await axios.get('http://localhost:3001/admin/index');
        setAdmins(response.data);
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    }

    fetchAdmins();
  }, []);

  const handleDeleteAdmin = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/admin/deleteadmin/${id}`);
      setAdmins(prevAdmins => prevAdmins.filter(admin => admin.id !== id));
    } catch (error) {
      console.error('Error deleting admin:', error);
    }
  };

  return (
    <>
    <SessionCheck />
    <MyLayout title="Admin Lists" />
    <AdminDrawer />

      <section className="pt-16 bg-gray-50 dark:bg-gray-900 sm:ml-64">                   
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="text-white bg-gray-50 dark:bg-gray-900 pl-10">
              <th className="border p-2">ID</th>
              <th className="border p-2">Username</th>
              <th className="border p-2">Email</th>
              {/* <th className="border p-2">Password</th> */}
              <th className="border p-2">Address</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id} className="text-white bg-gray-50 dark:bg-gray-900">
                <td className="border p-2">{admin.id}</td>
                <td className="border p-2">{admin.username}</td>
                <td className="border p-2">{admin.email}</td>
                {/* <td className="border p-2">{admin.password}</td> */}
                <td className="border p-2">{admin.address}</td>
                <td className="border p-2">
                  <button className="text-blue-600">Edit</button>
                  <button className="text-red-600 ml-2" onClick={() => handleDeleteAdmin(admin.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    <Footer/>
    </>
  );
};
export default AdminsPage;