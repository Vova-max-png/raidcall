import TitleBar from "../Components/TitleBar/";
import Nav from "../Nav";

export default function App() {
    document.addEventListener("contextmenu", e => {
        e.preventDefault();
        return false;
    }, {capture: true});

    document.addEventListener("selectstart", e => {
        e.preventDefault();
        return false;
    }, {capture: true});

    return (
        <div id="app">
            <TitleBar />
            <Nav />
        </div>
    )
}