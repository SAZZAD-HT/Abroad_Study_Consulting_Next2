import Link from 'next/link';

import SessionCheck from '../api/sessioncheck';
import MyLayout from '../component/layout';
import AdminDrawer from '../component/admindrawer';
import Footer from '../component/footer';

const UniHeart = () => {
  return (<>  <MyLayout title="Add Admin" />
  <SessionCheck />
        <AdminDrawer />
  
    <div className="text-center mt-16">
      <h1 className="text-4xl font-bold mb-8">Create ALL </h1>
      <div className="space-y-4">
      <a className="block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
        <Link href="/OthersUni/CreateUniversity">
           Create University
         
        </Link> </a>
        <a className="block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
           
        <Link href="/OthersUni/RegisterDepartment">
           Register Department
         
        </Link> </a>
       <a className="block bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
            
        <Link href="/OthersUni/RegisterProgramme">
         Register Program
         
        </Link> </a>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default UniHeart;
