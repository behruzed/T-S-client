import { Route, Routes } from "react-router-dom"; // react-router-dom kutubxonasini chaqiring

import Lab from "../../Components/ALab/Lab";
import AdminStudent from "../../Components/ALab/AdminStudent";
import AdminTeacher from "../../Components/ALab/AdminTeacher";
import AdminTeachGr from "../../Components/ALab/AdminTeacherGroups/AdminTeachGr";
import AdminTeach1Gr from "../../Components/ALab/AdminTeacherGroup/AdminTeach1Gr";
import Arizaqoshish from "../../Components/ALab/Admintools/Arizaqoshish";
import Arxiv from "../../Components/ALab/Admintools/Arxiv";
import Moylar from "../../Components/ALab/Admintools/Moylar";
import Ochiqarizalar from "../../Components/ALab/Admintools/Ochiqarizalar";
import Ombor from "../../Components/ALab/Admintools/Ombor";
import Shablonlar from "../../Components/ALab/Admintools/Shablonlar";
import Surtma from "../../Components/ALab/Admintools/Surtma";
import Yopiqarizalar from "../../Components/ALab/Admintools/Yopiqarizalar";
import Xodimlar from "../../Components/ALab/Admintools/Xodimlar";
import Chilonshablon from "../../Components/ALab/Admintools/Chilonshablon";
import Unoshablon from "../../Components/ALab/Admintools/Unoshablon";
import Chilonmoylar from "../../Components/ALab/Admintools/Shablonlar/Chilonmoylar";
import Chilonsmazki from "../../Components/ALab/Admintools/Shablonlar/Chilonsmazki";
import Chilonboshqa from "../../Components/ALab/Admintools/Shablonlar/Chilonboshqa";
import Chilonnamuna from "../../Components/ALab/Admintools/Shablonlar/Chilonnamuna";

import Chilonadd from "../../Components/ALab/Admintools/Shablonlar/Chilonadd";
import Chilonothers from "../../Components/ALab/Admintools/Shablonlar/Chilonothers";

import Info from "../../Components/ALab/Admintools/Info";
import Eskiadmin from "../../Components/ALab/Eskiadmin";

import Aviatsion from "../../Components/ALab/Admintools/Shablonlar/Masla/Aviatsion";
import Gidravlik from "../../Components/ALab/Admintools/Shablonlar/Masla/Gidravlik";
import Kompressor from "../../Components/ALab/Admintools/Shablonlar/Masla/Kompressor";
import Motor from "../../Components/ALab/Admintools/Shablonlar/Masla/Motor";
import Reduktor from "../../Components/ALab/Admintools/Shablonlar/Masla/Reduktor";
import Transformator from "../../Components/ALab/Admintools/Shablonlar/Masla/Transformator";
import Transmission from "../../Components/ALab/Admintools/Shablonlar/Masla/Transmission";
import Trubina from "../../Components/ALab/Admintools/Shablonlar/Masla/Trubina";

import Plastik from "../../Components/ALab/Admintools/Shablonlar/Smazki/Plastik";
import Jeleznodorojniy from "../../Components/ALab/Admintools/Shablonlar/Smazki/Jeleznodorojniy";
import Obshego from "../../Components/ALab/Admintools/Shablonlar/Smazki/Obshego";
import Spets from "../../Components/ALab/Admintools/Shablonlar/Smazki/Spets";

import Drugie from "../../Components/ALab/Admintools/Shablonlar/Drugie/Drugie";
import Obraztsi from "../../Components/ALab/Admintools/Shablonlar/Obraztsi/Obraztsi";




import ChilonDobavitAll from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChilonDobavitAll'
import ChilonDobavitMasla from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChilonDobavitMasla'
import ChilonDobavitSmazki from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChilonDobavitSmazki'
import ChilonDobavitObraztsi from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChilonDobavitObraztsi'
import ChilonDobavitDrugie from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChilonDobavitDrugie'


import ChDAviatsion from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChDAviatsion'
import ChDGidravlik from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChDGidravlik'
import ChDKompressor from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChDKompressor'
import ChDMotor from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChDMotor'
import ChDReduktor from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChDReduktor'
import ChDTransformator from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChDTransformator'
import ChDTransmission from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChDTransmission'
import ChDTrubina from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChDTrubina'


import ChDSJeleznodorojniy from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChDSJeleznodorojniy'
import ChDSObshego from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChDSObshego'
import ChDSSpets from '../../Components/ALab/Zayavki/Dobavit/Chilon/ChDSSpets'



function RouteLa() {
  return (
    <>
      <Routes>

      <Route element={<ChDAviatsion />} path="/ariza-qoshish/chilon/masla/aviatsion"></Route>
      <Route element={<ChDGidravlik />} path="/ariza-qoshish/chilon/masla/gidravlik"></Route>
      <Route element={<ChDKompressor />} path="/ariza-qoshish/chilon/masla/kompressor"></Route>
      <Route element={<ChDMotor />} path="/ariza-qoshish/chilon/masla/motor"></Route>
      <Route element={<ChDReduktor />} path="/ariza-qoshish/chilon/masla/reduktor"></Route>
      <Route element={<ChDTransformator />} path="/ariza-qoshish/chilon/masla/transformator"></Route>
      <Route element={<ChDTransmission />} path="/ariza-qoshish/chilon/masla/transmission"></Route>
      <Route element={<ChDTrubina />} path="/ariza-qoshish/chilon/masla/trubina"></Route>

      <Route element={<ChDSJeleznodorojniy />} path="/ariza-qoshish/chilon/smazki/jeleznodorojniy"></Route>
      <Route element={<ChDSObshego />} path="/ariza-qoshish/chilon/smazki/obshego"></Route>
      <Route element={<ChDSSpets />} path="/ariza-qoshish/chilon/smazki/spets"></Route>


        <Route element={<ChilonDobavitAll />} path="/ariza-qoshish/chilon"></Route>
        <Route element={<ChilonDobavitMasla />} path="/ariza-qoshish/chilon/masla"></Route>
        <Route element={<ChilonDobavitSmazki />} path="/ariza-qoshish/chilon/smazki"></Route>
        <Route element={<ChilonDobavitDrugie />} path="/ariza-qoshish/chilon/drugie"></Route>
        <Route element={<ChilonDobavitObraztsi />} path="/ariza-qoshish/chilon/obraztsi"></Route>


        {/* <Route element={<Lab />} path="/laboratoriya"></Route>
        <Route element={<Arizaqoshish />} path="/ariza-qoshish"></Route>
        <Route element={<Arxiv />} path="/arxiv"></Route>
        <Route element={<Moylar />} path="/moylar"></Route>
        <Route element={<Ochiqarizalar />} path="/ochiq-arizalar"></Route>
        <Route element={<Ombor />} path="/ombor"></Route>
        <Route element={<Shablonlar />} path="/shablonlar"></Route>
        <Route element={<Surtma />} path="/surtma-moylar"></Route>
        <Route element={<Yopiqarizalar />} path="/yopiq-arizalar"></Route>
        <Route element={<Xodimlar />} path="/xodimlar"></Route>
        <Route element={<Eskiadmin />} path="/old"></Route>
        <Route element={<Chilonshablon />} path="/chilonshablon"></Route>
        <Route element={<Unoshablon />} path="/unoshablon"></Route>
        <Route element={<Chilonmoylar />} path="/chilon-moylar"></Route>
        <Route element={<Chilonsmazki />} path="/chilon-smazki"></Route>
        <Route element={<Chilonboshqa />} path="/chilon-boshqa"></Route>
        <Route element={<Chilonnamuna />} path="/chilon-namunalar"></Route>
        <Route element={<Chilonadd />} path="/chilon-add"></Route>
        <Route element={<Chilonothers />} path="/chilon-add878"></Route> */}

          {/* Masla */}
        <Route element={<Aviatsion />} path="/chilon-moy-aviatsion"></Route>
        <Route element={<Gidravlik />} path="/chilon-moy-gidravlik"></Route>
        <Route element={<Kompressor />} path="/chilon-moy-kompressor"></Route>
        <Route element={<Motor />} path="/chilon-moy-motor"></Route>
        <Route element={<Reduktor />} path="/chilon-moy-reduktor"></Route>
        <Route element={<Transformator />} path="/chilon-moy-transformator"></Route>
        <Route element={<Transmission />} path="/chilon-moy-transmission"></Route>
        <Route element={<Trubina />} path="/chilon-moy-trubina"></Route>

          {/* Smazki */}
        <Route element={<Plastik />} path="/chilon-smazki-plastik"></Route>
        <Route element={<Jeleznodorojniy />} path="/chilon-smazki-jeleznodorojniy"></Route>
        <Route element={<Spets />} path="/chilon-smazki-spets"></Route>
        <Route element={<Obshego />} path="/chilon-smazki-obshego"></Route>
          {/* Drugie */}
        <Route element={<Drugie />} path="/chilon-moy-drugie"></Route>
          {/* Obraztsi */}
        <Route element={<Obraztsi />} path="/chilon-moy-obraztsi"></Route>

        <Route element={<Info />} path="/info"></Route>
        <Route element={<AdminStudent />} path="/adminstudent"></Route>
        <Route element={<AdminTeacher />} path="/adminteacher"></Route>
        <Route element={<AdminTeachGr />} path="/adminteachergroups"></Route>
        <Route element={<AdminTeach1Gr />} path="/adminteacheronegroup"></Route>
      </Routes>
    </>
  );
}

export default RouteLa;