
import Homepage from "./Homepage";
import JobList from "./JobList";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm"
import ProfileForm from "./ProfileForm";
import Logout from "./Logout";
import { Navigate, Route, Routes } from "react-router-dom";
import {updateCredentials} from "./App";

/**Routes for browser
 *
 * App --> RouterList --> { Homepage, CompanyList, CompanyDetail, JobList}
 */
function RouteList({ login, signup }) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/login" element={<LoginForm login={login}/>} />
      <Route path="/signup" element={<SignupForm signup={signup} />} />
      <Route path="/profile" element={<ProfileForm />} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;
