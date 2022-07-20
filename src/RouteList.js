import Homepage from "./Homepage";
import JobList from "./JobList";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import { Navigate, Route, Routes } from "react-router-dom";

/**Routes for browser
 *
 * App --> RouterList --> { Homepage, CompanyList, CompanyDetail, JobList}
 */
function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;
