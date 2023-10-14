import React, { FC } from "react";

import Menu from "./menu";

import MenuItem from "./menuItem";

export const MenuUseCom: FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}>
            <Menu defaultIndex={0} onSelect={(e) => console.log(e)}>
                <MenuItem index={0}>菜单1</MenuItem>
                <MenuItem index={1}>菜单2</MenuItem>
                <MenuItem index={2}>菜单3</MenuItem>
                <MenuItem index={3}>菜单4</MenuItem>
            </Menu>
        </div>
    )
}
