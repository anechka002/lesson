import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import {TasksList} from "./TasksList.tsx";
import {Detail} from "./Detail.tsx";
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import {PageTitle} from "./components/PageTitle.tsx";

createRoot(document.getElementById('root')!).render(<MainPage />)

function MainPage () {
  return (
    <div>
      <Header/>
      <PageTitle/>
      <div style={{display: 'flex', gap: '30px'}}>
        <TasksList/>
        <hr/>
        <Detail/>
      </div>
      <Footer/>
    </div>
  )
}
