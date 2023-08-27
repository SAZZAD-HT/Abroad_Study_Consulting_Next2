import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const CreateUniversity = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    UniversityName: '',
    UniversityAddress: '',
    UniversityPhone: '',
    UniversityEmail: '',
    UniversityCity: '',
    OfferedProgramID: '',
    Ranking: '',
    UniversityDescription: '',
    UniCity: '',
    UniversityLongtitude: '',
    UniversityLatitude: '',
    UniImage: '',
    IsActive: '1',
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post('http://localhost:3002/University/create/University', formData);
      alert('University data submitted successfully!');
      router.push('/'); // Redirect to the homepage or any other page after successful submission
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('An error occurred while submitting data.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Create University</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-blue-200 p-6 rounded-lg shadow-md hover:bg-blue-300 transition-colors duration-300"
      >
        {/* University Name */}
        <div className="mb-4">
          <label htmlFor="UniversityName" className="block text-gray-700 font-bold">
            University Name
          </label>
          <input
            type="text"
            id="UniversityName"
            name="UniversityName"
            value={formData.UniversityName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* University Address */}
        <div className="mb-4">
          <label htmlFor="UniversityAddress" className="block text-gray-700 font-bold">
            University Address
          </label>
          <input
            type="text"
            id="UniversityAddress"
            name="UniversityAddress"
            value={formData.UniversityAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* University Phone */}
        <div className="mb-4">
          <label htmlFor="UniversityPhone" className="block text-gray-700 font-bold">
            University Phone
          </label>
          <input
            type="tel"
            id="UniversityPhone"
            name="UniversityPhone"
            value={formData.UniversityPhone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* University Email */}
        <div className="mb-4">
          <label htmlFor="UniversityEmail" className="block text-gray-700 font-bold">
            University Email
          </label>
          <input
            type="email"
            id="UniversityEmail"
            name="UniversityEmail"
            value={formData.UniversityEmail}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* University City */}
        <div className="mb-4">
          <label htmlFor="UniversityCity" className="block text-gray-700 font-bold">
            University City
          </label>
          <input
            type="text"
            id="UniversityCity"
            name="UniversityCity"
            value={formData.UniversityCity}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Offered Program ID */}
        <div className="mb-4">
          <label htmlFor="OfferedProgramID" className="block text-gray-700 font-bold">
            Offered Program ID
          </label>
          <input
            type="number"
            id="OfferedProgramID"
            name="OfferedProgramID"
            value={formData.OfferedProgramID}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Ranking */}
        <div className="mb-4">
          <label htmlFor="Ranking" className="block text-gray-700 font-bold">
            Ranking
          </label>
          <input
            type="number"
            id="Ranking"
            name="Ranking"
            value={formData.Ranking}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* University Description */}
        <div className="mb-4">
          <label htmlFor="UniversityDescription" className="block text-gray-700 font-bold">
            University Description
          </label>
          <textarea
            id="UniversityDescription"
            name="UniversityDescription"
            value={formData.UniversityDescription}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* UniCity */}
        <div className="mb-4">
          <label htmlFor="UniCity" className="block text-gray-700 font-bold">
            UniCity
          </label>
          <input
            type="text"
            id="UniCity"
            name="UniCity"
            value={formData.UniCity}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* University Longitude */}
        <div className="mb-4">
          <label htmlFor="UniversityLongitude" className="block text-gray-700 font-bold">
            University Longitude
          </label>
          <input
            type="text"
            id="UniversityLongitude"
            name="UniversityLongitude"
            value={formData.UniversityLongitude}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* University Latitude */}
        <div className="mb-4">
          <label htmlFor="UniversityLatitude" className="block text-gray-700 font-bold">
            University Latitude
          </label>
          <input
            type="text"
            id="UniversityLatitude"
            name="UniversityLatitude"
            value={formData.UniversityLatitude}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* UniImage */}
        <div className="mb-4">
          <label htmlFor="UniImage" className="block text-gray-700 font-bold">
            UniImage
          </label>
          <input
            type="text"
            id="UniImage"
            name="UniImage"
            value={formData.UniImage}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* IsActive */}
        <div className="mb-4">
          <label htmlFor="IsActive" className="block text-gray-700 font-bold">
            IsActive
          </label>
          <select
            id="IsActive"
            name="IsActive"
            value={formData.IsActive}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all duration-300 ${
              submitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUniversity;
