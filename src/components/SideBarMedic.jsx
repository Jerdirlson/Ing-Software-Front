import React, { Component } from "react";
import {
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,

} from "@material-tailwind/react";
import {
    ClipboardDocumentCheckIcon,
    CalendarIcon,
    IdentificationIcon
} from "@heroicons/react/24/solid";
import LOGO_YELLOW_IPS from '../assets/img/logos/LogoIps_Mesa de trabajo 1.png'
import { medicNavigation } from "../utils/Routes.routes"
import { Link } from "react-router-dom";

/**
 * Contains the side menu of the operator options
 * @returns {Component} SideBar
 */
const SideBarMedic = () => {
   
    return (
        <div className="lg:mr-80">
            <div className="h-screen max-w-[20rem] fixed hidden p-4 shadow-xl bg-primary-blue text-white lg:block">
                <div className="mb-2 p-4">
                    <img src={LOGO_YELLOW_IPS} alt="" />
                </div>
                <hr className="w-11/12 mx-auto" />
                <List className="gap-4 mt-4">
                    <Link to={medicNavigation[0].href}>
                        <ListItem>
                            <ListItemPrefix>
                                <CalendarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            {medicNavigation[0].name}
                            <ListItemSuffix>
                                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                            </ListItemSuffix>
                        </ListItem>
                    </Link>
                    <Link to={medicNavigation[1].href}>
                        <ListItem>
                            <ListItemPrefix>
                                <ClipboardDocumentCheckIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            {medicNavigation[1].name}
                        </ListItem>
                    </Link>
                    <Link to={medicNavigation[2].href}>
                        <ListItem>
                            <ListItemPrefix>
                                <IdentificationIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            {medicNavigation[2].name}
                        </ListItem>
                    </Link>
                </List>

            </div>
        </div>
    )
}
export default SideBarMedic