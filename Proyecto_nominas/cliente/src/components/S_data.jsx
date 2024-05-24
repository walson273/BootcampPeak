import React from 'react';
import { MdOutlinePayments } from "react-icons/md";
import { LiaReadme } from "react-icons/lia";
import { GiPlagueDoctorProfile } from "react-icons/gi";

export const slideBar = [
  {'name' : 'Perfil', 'icon' : <GiPlagueDoctorProfile />, 'link' : ''},
  {'name' : 'Nomina', 'icon' : <MdOutlinePayments />, 'link' : 's'},
];

export const slideBar_adm = [
  {'name' : 'Perfil', 'icon' : <GiPlagueDoctorProfile />, 'link' : ''},
  {'name' : 'Nomina', 'icon' : <MdOutlinePayments />, 'link' : 's'},
  {'name' : 'Administrar empleados', 'icon' : <LiaReadme />, 'link' : ''},

];