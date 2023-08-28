import { useState } from 'react';
import axios from 'axios';
import SessionCheck from '../api/sessioncheck';
import MyLayout from '../component/layout';
import AdminDrawer from '../component/admindrawer';
import Footer from '../component/footer';

const AdminDashboard = ({ data }) => {
  const [departments, setDepartments] = useState(data);
  const [showChat, setShowChat] = useState(false);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3002/Login/delete/${id}`);
      if (response.status === 200) {
        // Filter out the deleted department
        setDepartments(departments.filter((dept) => dept.DepartmentId !== id));
      } else {
        console.error('Delete request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (<>
  <MyLayout title="Add Admin" />
          
         
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Admin Dashboard</h1>
      <button
        onClick={() => setShowChat(!showChat)}
        className={`${
          showChat
            ? 'bg-blue-500 hover:bg-blue-600'
            : 'bg-green-500 hover:bg-green-600'
        } text-white py-2 px-4 rounded-full transition duration-300 transform hover:scale-105`}
      >
        {showChat ? 'Close Chat' : 'Open Chat'}
      </button>
      <table className="min-w-full bg-white rounded-lg overflow-hidden mt-5">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Username</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {departments.map((dept) => (
            <tr key={dept.DepartmentId}>
              <td className="py-3 px-6">{dept.DeptUsername}</td>
              <td className="py-3 px-6">{dept.DeptEmail}</td>
              <td className="py-3 px-6">{dept.Status}</td>
              <td className="py-3 px-6">
                <button
                  onClick={() => handleDelete(dept.DepartmentId)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
                {/* Add an update button and modal for updating data */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:3002/Login');
    const data = response.data;
    return {
      props: { data },
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      props: { data: [] },
    };
  }
}

export default AdminDashboard;
