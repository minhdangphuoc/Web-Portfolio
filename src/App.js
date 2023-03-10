import { useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Worker } from '@react-pdf-viewer/core';

import AboutMe from "./components/AboutMe";
import Sidebar from "./components/Sidebar";
import ProjectPage from "./components/Projects";
import EducationPage from "./components/Education";
import ExperiencePage from "./components/Experience";
import LicensesAndCertsPage from "./components/LicensesAndCertsPage";
import HonorsAndAwardsPage from "./components/HonorsAndAwardsPage";
import ContactPage from "./components/ContactPage";

const App = () => {
  const pages = [<AboutMe/>, <EducationPage/>, <ExperiencePage/>, <ProjectPage/>, <LicensesAndCertsPage/>, <HonorsAndAwardsPage/>, <ContactPage/>]
  const ref = useRef(Array(pages.length).fill(null)) 
  
  const scrollTo = (current) => {
    current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  
  const sidebarHandler = (id) => {
    try {scrollTo(ref.current[id]);}
    catch (e) {
      console.log(e);
    }
  }
  
  const scrollTop = () => {
    try {
        window.scrollTo({left: 0, top: 0, behavior: "smooth"})
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    
  }, []);

  return (    
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={
      <div className="grid place-items-center h-screen">
          <Link to="/portfolio">
              <div className="h-fit w-fit p-4 active:shadow-2xl active:outline-2  active:outline-blue-600  active:outline  active:bg-blue-200 rounded-md shadow-md bg-blue-300">Access My Portfolio</div>
          </Link>
              </div>
    }/>

      
    <Route path="/portfolio" element={
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">

      <div className="sm:flex sm:flex-row sm:pl-8 h-full sm:h-screen sm:pt-0 pt-4">
        <button onClick={() => scrollTop()} className="fixed sm:hidden p-4 m-2  active:shadow-2xl  active:outline-2  active:outline-blue-600  active:outline  active:bg-blue-200  h-fit min-w-8 w-fit right-0 bottom-0 rounded-md shadow-md bg-blue-300"> 
          Scroll to top 
        </button>
        <div className="sm:min-w-[90px] sm:px-0 px-4 sm:py-8">
          <Sidebar  sidebarHandler={sidebarHandler} ></Sidebar>
        </div>
        <div className="sm:grow h-full sm:flex-col sm:px-8 px-4 sm:pb-0 pb-4 sm:overflow-y-auto overflow-x-hidden justify-between">
          {
            pages.map((page) => 
            <div key={pages.indexOf(page)} ref={el => ref.current[pages.indexOf(page)] = el} className={pages.indexOf(page)===pages.length?"sm:pt-8 sm:pb-8 pt-2 pb-2 snap-start":"sm:pt-8 pt-4 snap-start"}>
              {page}
            </div>)
          }
        </div>
      </div>
      </Worker>
      } />

    <Route path="*" element={<div>404 NotFound</div>} />
    </Routes>
    </BrowserRouter>
  );
};


export default App;
