import MyLayout from "@/pages/component/layout";
import SessionCheck from "@/pages/api/sessioncheck";
import AdminDrawer from "@/pages/component/admindrawer";

export default function AdminDashboard() {


  return (
    <>
      <SessionCheck />
      <MyLayout title="Admin DashBoard" />
      {/* <AdminDrawer /> */}
    </>
  )
}