import { useState, useEffect } from 'react';
import axios from 'axios';
import MyLayout from '../component/layout';
import Footer from '../component/footer';
import Link from 'next/link';

const Dashboard = () => {
  const [universityData, setUniversityData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [uniTable, setUniTable] = useState([]);
  useEffect(() => {
   
    fetchUniTable();
    fetchUniversityData();
   
  }, []);

  const fetchUniversityData = async () => {
    try {
     
      const payload = {
        search: searchTerm,
      };

     
      const response = await axios.post('http://localhost:3002/University/UniversityLanding', payload);

      
      setUniversityData(response.data.university);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUniTable = async () => {
    try {
      const response = await axios.get('http://localhost:3002/University');

      
      setUniTable(response.data); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    
    fetchUniversityData();
  };

  return (
    <>
      <MyLayout title="Add Admin" />

      <div className="p-4">
        <h1 className="text-2xl font-bold">University Home Page</h1>

        <div className="mt-4 flex space-x-2">
          <input
            type="text"
            className="w-1/2 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Search by university name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {universityData && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold"> {universityData.UniversityName}</h2>
            <p>Address: {universityData.UniversityAddress}</p>
            <p>Phone: {universityData.UniversityPhone}</p>
            <p>Email: {universityData.UniversityEmail}</p>
            <p>City: {universityData.UniversityCity}</p>
            <p>Ranking: {universityData.Ranking}</p>
            <p>Description: {universityData.UniversityDescription}</p>
          </div>
        )}

        <div className="mt-8">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">University Name</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">City</th>
                <th className="px-4 py-2">Ranking</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {uniTable.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No university data available.
                  </td>
                </tr>
              ) : (
                uniTable.map((university) => (
                  <tr key={university.IdUniversity}>
                    <td className="border px-4 py-2">
                      <Link
                        href={`./UniversityView/${university.IdUniversity}`}
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:bg-gray-700"
                      >
                        {university.UniversityName}
                      </Link>
                    </td>
                    <td className="border px-4 py-2">{university.UniversityAddress}</td>
                    <td className="border px-4 py-2">{university.UniversityPhone}</td>
                    <td className="border px-4 py-2">{university.UniversityEmail}</td>
                    <td className="border px-4 py-2">{university.UniversityCity}</td>
                    <td className="border px-4 py-2">{university.Ranking}</td>
                    <td className="border px-4 py-2">{university.UniversityDescription}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
