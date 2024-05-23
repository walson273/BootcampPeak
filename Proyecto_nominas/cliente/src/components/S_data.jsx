import React from 'react';
import {BsBriefcase,BsController,BsFileEarmarkPerson } from "react-icons/bs";
import { LuFileCheck } from "react-icons/lu";
import { PiBracketsCurly } from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";

export const slideBar = [
  {'name' : 'Empleos', 'icon' : <BsBriefcase />, 'link' : ''},
  {'name' : 'Postulaciones', 'icon' : <LuFileCheck />, 'link' : 'https://peaku.co/es/postulaciones'},
  {'name' : 'CodeX', 'icon' : <BsController />, 'link' : 'https://peaku.co/es/cursos'},
  {'name' : 'Preguntas', 'icon': <BiMessageRoundedDetail />, 'link' : 'https://peaku.co/es/preguntas'},
  {'name' : 'Bootcamp', 'icon': <PiBracketsCurly />, 'link' : 'https://peaku.co/es/bootcamp-fullstack'},
  {'name' : 'Premios', 'icon': <IoDiamondOutline />, 'link' : 'https://peaku.co/es/premios'},
  {'name' : 'Tu Cv', 'icon': <BsFileEarmarkPerson />, 'link' : 'https://peaku.co/es/cv'}
];
