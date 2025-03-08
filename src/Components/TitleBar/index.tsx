import "./index.css"
import { useState } from "react"
import { window as windowApi } from '@tauri-apps/api'

export default function TitleBar() {
    const [maximized, setMaximized] = useState(0);

    return (
        <div className="title-bar">
            <div className="drag" onMouseDown={() => windowApi.appWindow.startDragging()}>
                <p className="title">RaidCall</p>
            </div>
            <div className="buttons">
                <div className="collapse" onClick={() => windowApi.appWindow.minimize()}><img src="./collapse.png" alt="" /></div>
                <div className="expand" onClick={() => {
                    if(maximized) {
                        windowApi.appWindow.unmaximize();
                        setMaximized(0);
                        return;
                    }
                    windowApi.appWindow.maximize();
                    setMaximized(1);
                }}><img src="./expand.png" alt="" /></div>
                <div className="close" onClick={() => windowApi.appWindow.close()}><img src="./close.png" alt="" /></div>
            </div>
        </div>
    )
}