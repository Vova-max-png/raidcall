import { useState } from "react"

export default function Checkbox(props: any) {
    const [checked, setChecked] = useState(props.checked);

    const toggleChecked = () => {
        setChecked(!checked);
    }

    return (
        <div className="checkbox-wrapper" onClick={toggleChecked}>
            <h1>{props.title}</h1>
            <input type="checkbox" checked={checked} />
        </div>
    )
}