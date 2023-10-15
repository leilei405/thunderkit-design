import React, { FC } from 'react'

import Tabs from './tabs'
import TabItem from './tabItem'

export const TabsUseCom:FC = () => {
    return (
        <div style={{ marginTop: '300px', marginLeft: '300px' }}>
            <Tabs>
                <TabItem label="选项卡一">
                    选项卡一
                </TabItem>
                <TabItem label="选项卡二">
                    选项卡二
                </TabItem>
                <TabItem label="选项卡三">
                    选项卡三
                </TabItem>
            </Tabs>
            <br /><br /><br /><br /><br />
            <Tabs type='card'>
                <TabItem label="选项卡一">
                    选项卡一
                </TabItem>
                <TabItem label="选项卡二">
                    选项卡二
                </TabItem>
                <TabItem label="选项卡三">
                    选项卡三
                </TabItem>
            </Tabs>

        </div>
    )
} 