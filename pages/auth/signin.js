import { useState } from 'react';
import axios from 'axios';
import MyLayout from '../component/layout';
import { useRouter } from 'next/router';
import Footer from '../component/footer';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3002/Login/signin', {
        DeptEmail: email,
        DeptPassword: password,
      });

 
      //  alert(response.status);
    if (response.status === 201) {

     
     localStorage.setItem('Id', response.data.DepartmentId);
     localStorage.setItem('staus', response.data.Status);

      const { Status, token } = response.data;

      
      
      if (response.data.Status === 'admin') {
       
       
        router.push('/DeaprtmentHome/DepartmentHome');
      } else {
        
        alert(sessionStorage.getItem('token'));
 
        router.push('/OthersUni/CreateALL');
        
      }
      ;
      } else {
        setError('Invalid login');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Invalid login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MyLayout title="Login" />
      <div className="flex items-center justify-center h-screen dark:bg-gray-800 dark:border-gray-700">
        <div className="bg-white p-8 rounded w-full max-w-md dark:bg-gray-800 dark:border-gray-100">
          <h1 className="text-2xl font-semibold mb-4 text-center text-white">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:ring focus:ring-blue-300"
              disabled={loading}
            >
              {loading ? 'Logging In...' : 'Login'}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
