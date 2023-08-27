import Link from 'next/link';

const UniHeart = () => {
  return (<>
  
    <div className="text-center mt-16">
      <h1 className="text-4xl font-bold mb-8">DashBoard</h1>
      <div className="space-y-4">
      <a className="block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
        <Link href="/University/CreateUniversity">
           Create University
         
        </Link> </a>
        <a className="block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
           
        <Link href="/University/RegisterDepartment">
           Register Department
         
        </Link> </a>
       <a className="block bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
            
        <Link href="/University/RegisterProgramme">
         Register Program
         
        </Link> </a>
      </div>
    </div></>
  );
};

export default UniHeart;
