import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function TabNav() {
    return(
        <Menu>
            <Menu.Item>
                <NavLink exact to="/"> Home </NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/characters"> Characters </NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/episodes"> Episodes </NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/locations"> Locations </NavLink>
            </Menu.Item>
        </Menu>
    )
};
