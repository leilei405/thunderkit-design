import React, { FC } from "react";

import Menu from "./menu";

import MenuItem from "./menuItem";

import SubMenu from "./subMenu";

export const MenuUseCom: FC = () => {
    return (
        <div style={{ width: '80%', marginTop: '100px' }}>
            <Menu style={{ float: 'left', marginLeft: 300 }} defaultIndex={'0'} onSelect={(e) => console.log(e)}>
                <MenuItem index={'0'}>菜单1</MenuItem>
                <MenuItem index={'1'}>菜单2</MenuItem>
                <SubMenu title="菜单3">
                    <MenuItem>菜单3-1</MenuItem>
                    <MenuItem>菜单3-2</MenuItem>
                    <MenuItem>菜单3-3</MenuItem>
                </SubMenu>
                <MenuItem index={'2'}>菜单4</MenuItem>
                <MenuItem index={'3'}>菜单5</MenuItem>
            </Menu>

            <Menu 
                style={{ float: 'right' }} 
                defaultIndex={'0'} 
                mode="vertical" 
                // defaultOpenSubmenus={['2']} 
                onSelect={(e) => {
                    console.log(e);
                }}
            >
                <MenuItem index={'0'}>菜单1</MenuItem>
                <MenuItem index={'1'}>菜单2</MenuItem>
                <SubMenu title="菜单3">
                    <MenuItem>菜单3-1</MenuItem>
                    <MenuItem>菜单3-2</MenuItem>
                    <MenuItem>菜单3-3</MenuItem>
                </SubMenu>
                <MenuItem index={'2'}>菜单4</MenuItem>
                <MenuItem index={'3'}>菜单5</MenuItem>
            </Menu>
        </div>
    )
}
