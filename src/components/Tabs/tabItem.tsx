import React, { FC } from 'react'

import { TabItemProps } from './types'

export const TabItem: FC<TabItemProps> = ({ children }) => {
  return (
    <div className="thunderkit-tab-panel">
      {children}
    </div>
  )
}

export default TabItem;