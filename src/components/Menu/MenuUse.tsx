import React, { FC } from "react";

import Menu from "./menu";

import MenuItem from "./menuItem";

export const MenuUseCom: FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}>
            <Menu defaultIndex={0}>
                <MenuItem>菜单1</MenuItem>
                <MenuItem>菜单2</MenuItem>
                <MenuItem>菜单3</MenuItem>
                <MenuItem>菜单4</MenuItem>
            </Menu>
        </div>
    )
}
