'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'
import { MyDetails } from './MyDetails'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab-01')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="tab-01"
          title="my details"
          isSelected={currentTab === 'tab-01'}
        />
        <TabItem
          value="tab-02"
          title="profile"
          isSelected={currentTab === 'tab-02'}
        />
        <TabItem
          value="tab-03"
          title="password"
          isSelected={currentTab === 'tab-03'}
        />
        <TabItem
          value="tab-04"
          title="team"
          isSelected={currentTab === 'tab-04'}
        />
        <TabItem
          value="tab-05"
          title="plan"
          isSelected={currentTab === 'tab-05'}
        />
        <TabItem
          value="tab-06"
          title="billing"
          isSelected={currentTab === 'tab-06'}
        />
        <TabItem
          value="tab-07"
          title="email"
          isSelected={currentTab === 'tab-07'}
        />
        <TabItem
          value="tab-08"
          title="notifications"
          isSelected={currentTab === 'tab-08'}
        />
        <TabItem
          value="tab-09"
          title="integrations"
          isSelected={currentTab === 'tab-09'}
        />
        <TabItem
          value="tab-10"
          title="API"
          isSelected={currentTab === 'tab-10'}
        />
      </Tabs.List>
      <Tabs.Content value="tab-01">
        <MyDetails />
      </Tabs.Content>
      <Tabs.Content value="tab-02">
        <h1>Tab 02</h1>
      </Tabs.Content>
      <Tabs.Content value="tab-03">
        <h1>Tab 03</h1>
      </Tabs.Content>
      <Tabs.Content value="tab-04">
        <h1>Tab 04</h1>
      </Tabs.Content>
      <Tabs.Content value="tab-05">
        <h1>Tab 05</h1>
      </Tabs.Content>
      <Tabs.Content value="tab-06">
        <h1>Tab 06</h1>
      </Tabs.Content>
      <Tabs.Content value="tab-07">
        <h1>Tab 07</h1>
      </Tabs.Content>
      <Tabs.Content value="tab-08">
        <h1>Tab 08</h1>
      </Tabs.Content>
      <Tabs.Content value="tab-09">
        <h1>Tab 09</h1>
      </Tabs.Content>
      <Tabs.Content value="tab-10">
        <h1>Tab 10</h1>
      </Tabs.Content>
    </Tabs.Root>
  )
}
