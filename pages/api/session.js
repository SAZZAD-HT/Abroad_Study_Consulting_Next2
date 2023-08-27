import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

export default function Session() {
    const [email, setEmail] = useState(null);
    const router = useRouter();
    
    useEffect(() => {
        if (typeof window !== 'undefined')
        {
            const session = sessionStorage.getItem('email');
            if (session) {
                setEmail(sessionStorage.getItem('email'));
            }
        }
    }, []);

    const handleSignOut = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/admin/signout');
            console.log(response.data);
            sessionStorage.removeItem('email');
            setEmail(null);
            router.push('/auth/signin');
        } catch (error) {
            console.error(error);
        }
    };
    return (
    <>
        {email !== null ? (
        <>
            <div className="flex md:order-2">
                <Link href="/admin/dashboard/addadmin" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     {/* <svg fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"></path>
                     </svg> */}
                     <span className="flex-1 ml-3 whitespace-nowrap">Add Admin</span>
                  </Link>

                <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSignOut}>Sign out</button>
      
                <Link href="/admin/dashboard" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DashBoard</Link>   
            </div>
            </>
            ) : (
            <div className="flex md:order-2">
                <Link href="/auth/signin" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</Link>

                <Link href="/auth/registration" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registration</Link> 
            </div>
        )}
    </>
  );
}
