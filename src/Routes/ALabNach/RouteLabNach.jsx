import { Route, Routes } from "react-router-dom"; // react-router-dom kutubxonasini chaqiring

import LabNach from "../../Components/ALabNach/LabNach";
import AdminStudent from "../../Components/ALabNach/AdminStudent";
import AdminTeacher from "../../Components/ALabNach/AdminTeacher";
import AdminTeachGr from "../../Components/ALabNach/AdminTeacherGroups/AdminTeachGr";
import AdminTeach1Gr from "../../Components/ALabNach/AdminTeacherGroup/AdminTeach1Gr";
import Arizaqoshish from "../../Components/ALabNach/Admintools/Arizaqoshish";
import Arxiv from "../../Components/ALabNach/Admintools/Arxiv";
import Moylar from "../../Components/ALabNach/Admintools/Moylar";
import Ochiqarizalar from "../../Components/ALabNach/Admintools/Ochiqarizalar";
import Ombor from "../../Components/ALabNach/Admintools/Ombor";
import Shablonlar from "../../Components/ALabNach/Admintools/Shablonlar";
import Surtma from "../../Components/ALabNach/Admintools/Surtma";
import Yopiqarizalar from "../../Components/ALabNach/Admintools/Yopiqarizalar";
import Xodimlar from "../../Components/ALabNach/Admintools/Xodimlar";
import Chilonshablon from "../../Components/ALabNach/Admintools/Chilonshablon";
import Unoshablon from "../../Components/ALabNach/Admintools/Unoshablon";
import Chilonmoylar from "../../Components/ALabNach/Admintools/Shablonlar/Chilonmoylar";
import Chilonsmazki from "../../Components/ALabNach/Admintools/Shablonlar/Chilonsmazki";
import Chilonboshqa from "../../Components/ALabNach/Admintools/Shablonlar/Chilonboshqa";
import Chilonnamuna from "../../Components/ALabNach/Admintools/Shablonlar/Chilonnamuna";

import Chilonadd from "../../Components/ALabNach/Admintools/Shablonlar/Chilonadd";
import Chilonothers from "../../Components/ALabNach/Admintools/Shablonlar/Chilonothers";

import Info from "../../Components/ALabNach/Admintools/Info";
import Eskiadmin from "../../Components/ALabNach/Eskiadmin";

import Aviatsion from "../../Components/ALabNach/Admintools/Shablonlar/Masla/Aviatsion";
import Gidravlik from "../../Components/ALabNach/Admintools/Shablonlar/Masla/Gidravlik";
import Kompressor from "../../Components/ALabNach/Admintools/Shablonlar/Masla/Kompressor";
import Motor from "../../Components/ALabNach/Admintools/Shablonlar/Masla/Motor";
import Reduktor from "../../Components/ALabNach/Admintools/Shablonlar/Masla/Reduktor";
import Transformator from "../../Components/ALabNach/Admintools/Shablonlar/Masla/Transformator";
import Transmission from "../../Components/ALabNach/Admintools/Shablonlar/Masla/Transmission";
import Trubina from "../../Components/ALabNach/Admintools/Shablonlar/Masla/Trubina";

import Plastik from "../../Components/ALabNach/Admintools/Shablonlar/Smazki/Plastik";
import Jeleznodorojniy from "../../Components/ALabNach/Admintools/Shablonlar/Smazki/Jeleznodorojniy";
import Obshego from "../../Components/ALabNach/Admintools/Shablonlar/Smazki/Obshego";
import Spets from "../../Components/ALabNach/Admintools/Shablonlar/Smazki/Spets";

import Drugie from "../../Components/ALabNach/Admintools/Shablonlar/Drugie/Drugie";
import Obraztsi from "../../Components/ALabNach/Admintools/Shablonlar/Obraztsi/Obraztsi";




import ChilonDobavitAll from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChilonDobavitAll'
import ChilonDobavitMasla from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChilonDobavitMasla'
import ChilonDobavitSmazki from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChilonDobavitSmazki'
import ChilonDobavitObraztsi from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChilonDobavitObraztsi'
import ChilonDobavitDrugie from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChilonDobavitDrugie'


import ChDAviatsion from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChDAviatsion'
import ChDGidravlik from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChDGidravlik'
import ChDKompressor from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChDKompressor'
import ChDMotor from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChDMotor'
import ChDReduktor from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChDReduktor'
import ChDTransformator from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChDTransformator'
import ChDTransmission from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChDTransmission'
import ChDTrubina from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChDTrubina'


import ChDSJeleznodorojniy from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChDSJeleznodorojniy'
import ChDSObshego from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChDSObshego'
import ChDSSpets from '../../Components/ALabNach/Zayavki/Dobavit/Chilon/ChDSSpets'



function RouteLabNach() {
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

{/* 
        <Route element={<LabNach />} path="/nachalnik-lab"></Route>
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

export default RouteLabNach;