import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills-Section";
import Expirence from "./components/Expirence-Section";
import Projects from "./components/Projects-Section";
import Footer from "./components/Footer";

function App() {
  const skillData = ["HTML","CSS","Javascript","React JS","Java","DSA","Python","PHP","Git","Github","MySQL"];

  const projectData = [
    { title: "EditVista - Photo Editor Web Application",link:"https://mayurifalke.github.io/EditVista/",src:"./images/photoeditor.jpg" ,tech: ["HTML", "CSS", "Javascript"], Description: "Developed a dynamic web application for photo editing with tools for cropping, resizing, filtering, and resetting images, Designed a user-friendly, responsive interface, Optimized performance for quick load times and cross-browser compatibility" },

    { title: "School Management System ",link:"https://github.com/mayurifalke/SchoolWeb", src:"./images/schoolWeb.png",
      tech: ["HTML", "CSS", "Javascript", "PHP","MySQL"],
      Description: "Developed a system for managing student data, academic records, attendance, and course scheduling,Ensured secure authentication and data integrity." 
    },
   
  ];
  return (
    <>
      <Header />
      <Hero />
      <Skills skillData={skillData} />
      <Expirence />
      <Projects projectData = {projectData}/>
      <Footer/>
    </>
  );
}

export default App;
