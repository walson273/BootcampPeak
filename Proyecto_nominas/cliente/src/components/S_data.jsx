import React from 'react';
import {BsBriefcase,BsController,BsFileEarmarkPerson } from "react-icons/bs";
import { LuFileCheck } from "react-icons/lu";
import { PiBracketsCurly } from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";

export const slideBar = [
  {'name' : 'Empleos', 'icon' : <BsBriefcase />, 'link' : ''},
  {'name' : 'Postulaciones', 'icon' : <LuFileCheck />, 'link' : 's'},
  {'name' : 'CodeX', 'icon' : <BsController />, 'link' : ''},
  {'name' : 'Preguntas', 'icon': <BiMessageRoundedDetail />, 'link' : ''},
  {'name' : 'Bootcamp', 'icon': <PiBracketsCurly />, 'link' : ''},
  {'name' : 'Premios', 'icon': <IoDiamondOutline />, 'link' : ''},
  {'name' : 'Tu Cv', 'icon': <BsFileEarmarkPerson />, 'link' : ''}
];
