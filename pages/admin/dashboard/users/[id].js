import MyLayout from "@/pages/component/layout";
import axios from "axios";
import { useRouter } from 'next/router'
import UserLayout from "@/pages/component/userlayout";
import SessionCheck from "@/pages/api/sessioncheck";
import AdminDrawer from "@/pages/component/admindrawer";

export default function UserProfile({ data }) {
  const router = useRouter();

  if (!data) {
    // Handle the case where data is not available
    return <div>Error fetching admin data.</div>;
  }

  return (
    <>
      <SessionCheck />
      <MyLayout title={data.id} />
      <AdminDrawer />

      <UserLayout
        username={data.username}
        email={data.email}
        address={data.address}
      />

      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>

    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  try {
    const response = await axios.get('http://localhost:3001/admin/' + id);
    const data = response.data;

    return { props: { data } };
  } catch (error) {
    console.error('Error fetching admin data:', error);
    return { props: { data: null } }; // You might want to handle this case differently
  }
}