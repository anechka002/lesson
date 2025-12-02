import {createRoot} from 'react-dom/client'
import './index.css'
import App from "./App.tsx";
import {TogglePage} from "./home/TogglePage.tsx";
import {TextPage} from "./home/TextPage.tsx";

createRoot(document.getElementById('root')!).render(<TextPage />)

