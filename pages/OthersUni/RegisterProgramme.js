import { useState } from 'react';
import { useRouter } from 'next/router';

const ProgramRegistration = ({ universities }) => {
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [programData, setProgramData] = useState({
    OfferedProgramName: '',
    Duration: '',
    TutionFee: '',
    DepartmentName: '',
    IsActive: '1',
  });

  const router = useRouter();

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
    setProgramData({ ...programData, OfferedProgramID: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform the POST request to submit the program data
    try {
      const response = await fetch('http://localhost:3002/University/create/Programme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(programData),
      });

      if (response.ok) {
        router.push('./CreateALL'); // Redirect to a success page
      } else {
        // Handle errors
        console.error('Program registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto py-10">
    <h1 className="text-2xl font-bold mb-5 text-center animate-glow text-blue-900 hover:text-blue-600">Program Registration</h1>


      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="university" className="block text-gray-600">Select University:</label>
          <select
            id="university"
            name="university"
            value={selectedUniversity}
            onChange={handleUniversityChange}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select University</option>
            {universities.map((uni) => (
              <option key={uni.IdUniversity} value={uni.IdUniversity}>
                {uni.UniversityName}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="programName" className="block text-gray-600">Program Name:</label>
          <input
            type="text"
            id="programName"
            name="programName"
            value={programData.OfferedProgramName}
            onChange={(e) =>
              setProgramData({ ...programData, OfferedProgramName: e.target.value })
            }
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="duration" className="block text-gray-600">Duration:</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={programData.Duration}
            onChange={(e) =>
              setProgramData({ ...programData, Duration: e.target.value })
            }
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tutionFee" className="block text-gray-600">Tuition Fee:</label>
          <input
            type="text"
            id="tutionFee"
            name="tutionFee"
            value={programData.TutionFee}
            onChange={(e) =>
              setProgramData({ ...programData, TutionFee: e.target.value })
            }
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="department" className="block text-gray-600">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={programData.DepartmentName}
            onChange={(e) =>
              setProgramData({ ...programData, DepartmentName: e.target.value })
            }
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch the list of universities from your API
  const response = await fetch('http://localhost:3002/University/UniversityDDl');
  const universities = await response.json();

  return {
    props: { universities },
  };
}

export default ProgramRegistration;
