import RouteSignIn from "./Routes/RouteSignIn"
import RouteTrash from "./Routes/RouteTrash"
import RouteTeacher from "./Routes/Teachers/RouteTeacher"
import RouteStudents from "./Routes/Students/RouteStudent"

import RouteAdmin from "./Routes/Admin/RouteAdmin"
// import RouteLab from "./Routes/ALab/RouteLab"
// import RouteLabNach from "./Routes/ALabNach/RouteLabNach"
// import RoutePr from "./Routes/APr/RoutePr"
// import RoutePrNach from "./Routes/APrNach/RoutePrNach"
// import RouteSklad from "./Routes/ASklad/RouteSklad"
// import RouteSnab from "./Routes/ASnab/RouteSnab"
// import RouteTexnolog from "./Routes/ATexnolog/RouteTexnolog"

import Marqu from './Components/Admin/Admintools/Marqu'

function App() {
  return (
    <> 
      <RouteAdmin />
      {/* <RouteLab/>
      <RouteLabNach/>
      <RoutePr/>
      <RoutePrNach/>
      <RouteSklad/>
      <RouteSnab/>
      <RouteTexnolog/> */}
      


      <RouteSignIn />
      <RouteTrash />
      <RouteStudents />
      <RouteTeacher />
      
      {/* Demo */}
      <Marqu/>

    </>
  )
}

export default App