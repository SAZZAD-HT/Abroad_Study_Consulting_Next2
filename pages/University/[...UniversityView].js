import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import MyLayout from '../component/layout';
import Footer from '../component/footer';

const UniversityView = () => {
  const [universityData, setUniversityData] = useState(null);
  const [programmeData, setProgrammeData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const uid = router?.query?.UniversityView?.[1];

  useEffect(() => {
    // Fetch university and program data when the component mounts
    if (uid) {
      fetchUniversityData(uid);
      fetchProgrammeData(uid);
    }
  }, [uid]);

  const fetchUniversityData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3002/University/get/University/${id}`);
      setUniversityData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProgrammeData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3002/University/get/Porgramme/${id}`);
      setProgrammeData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (<>
    <MyLayout title="Add Admin" />
    <div className="container mx-auto mt-8">
      {universityData && (
        <div className="flex bg-gradient-to-r from-blue-500 via-green-400 to-yellow-300 text-white rounded-lg shadow-md p-8 animate-pulse">
          {universityData.UniImage && (
            <img
              src={universityData.UniImage}
              alt={universityData.UniversityName}
              className="w-48 h-48 object-cover mr-8 rounded-full"
            />
          )}

          <div className="text-gray-800">
            <h1 className="text-4xl font-semibold mb-4">{universityData.UniversityName}</h1>
            <p className="text-lg mb-2">Address: {universityData.UniversityAddress}</p>
            <p className="text-lg mb-2">Phone: {universityData.UniversityPhone}</p>
            <p className="text-lg mb-2">Email: {universityData.UniversityEmail}</p>
            <p className="text-lg mb-2">City: {universityData.UniversityCity}</p>
            <p className="text-lg mb-2">Ranking: {universityData.Ranking}</p>
            <p className="text-lg mb-2">Description: {universityData.UniversityDescription}</p>

            <table className="min-w-full table-auto mt-4">
              <thead>
                <tr>
                  <th className="px-4 py-2">Course Name</th>
                  <th className="px-4 py-2">Program Type</th>
                  <th className="px-4 py-2">Duration</th>
                  <th className="px-4 py-2">Fee</th>
                  <th className="px-4 py-2">Department Name</th>
                </tr>
              </thead>
              <tbody>
                {programmeData.map((programme, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{programme.OfferedProgramName}</td>
                    <td className="border px-4 py-2">Bachelors</td>
                    <td className="border px-4 py-2">{programme.Duration}</td>
                    <td className="border px-4 py-2">{programme.TutionFee}</td>
                    <td className="border px-4 py-2">{programme.DepartmentName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div></>
  );
};

export default UniversityView;
