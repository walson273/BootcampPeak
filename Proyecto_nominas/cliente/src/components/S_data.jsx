import React from 'react';
import { MdOutlinePayments } from "react-icons/md";
import { LiaReadme } from "react-icons/lia";
import { GiPlagueDoctorProfile } from "react-icons/gi";


const id = localStorage.getItem('IDUsuario')

export const slideBar = [
  { 'name': 'Perfil', 'icon': <GiPlagueDoctorProfile />, 'link': `http://localhost:5173/menu/perfil/${id}` },
  { 'name': 'Nomina', 'icon': <MdOutlinePayments />, 'link': 'http://localhost:5173/menu/ver_nominas' },
];

export const slideBar_adm = [
  { 'name': 'Perfil', 'icon': <GiPlagueDoctorProfile />, 'link': `http://localhost:5173/menu/perfil/${id}` },
  { 'name': 'Nomina', 'icon': <MdOutlinePayments />, 'link': 'http://localhost:5173/menu/ver_nominas' },
  { 'name': 'Administrar empleados', 'icon': <LiaReadme />, 'link': 'http://localhost:5173/menu/buscar' },

];