import { Switch as SWITCH } from '@headlessui/react'
import { FC } from 'react'

type SwitchProps = {
    enabled: boolean
    setEnabled: (val: boolean) => void
}

const Switch: FC<SwitchProps> = (props) => {

    const { enabled, setEnabled } = props

    return (
        <SWITCH
            checked={enabled}
            onChange={setEnabled}
            className="group inline-flex h-6 w-11 items-center rounded-full bg-transparent transition border-2 "
        >
            <span className="size-4 translate-x-1 rounded-full transition group-data-checked:translate-x-6 bg-gradient-to-r  from-[#19FFFB] via-[#3DFF9B] to-[#FFCD4C]" />
        </SWITCH>
    )
}

export default Switch