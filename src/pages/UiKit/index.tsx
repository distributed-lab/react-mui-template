import UiKitButtons from '@/pages/UiKit/UiKitButtons'
import UiKitFields from '@/pages/UiKit/UiKitFields'
import UiKitOther from '@/pages/UiKit/UiKitOther'
import UiKitWeb3 from '@/pages/UiKit/UiKitWeb3'
import { UiTabs } from '@/ui'

export default function UiKit() {
  return (
    <UiTabs
      tabs={[
        { label: 'Buttons', content: <UiKitButtons /> },
        { label: 'Fields', content: <UiKitFields /> },
        { label: 'Other', content: <UiKitOther /> },
        { label: 'Web3', content: <UiKitWeb3 />, isActive: true },
      ]}
    />
  )
}
