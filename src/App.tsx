import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import NavBar from "./NavBar";

function App() {
      return (
          <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center pt-20">
                <NavBar/>
                      <h1 className="text-5xl font-bold mb-4 animate-fade1">
                              Hi, I'm <span className="text-blue-400">Aanchal Kumari</span>
                                    </h1>

                                          <p className="text-xl text-gray-400 mb-2 fade2">
                                                  Frontend Developer | React.js Developer
                                                        </p>

                                                              <p className="text-gray-500 mb-8 max-w-md fade3">
                                                                      I build responsive, clean and user-friendly web interfaces.
                                                                            </p>

                                                                                  <div className="flex gap-4 fade4">
                                                                                          <a href="https://github.com/aanchalk123" target="_blank"
                                                                                                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full">
                                                                                                              GitHub
                                                                                                                      </a>
                                                                                                                              <a href="https://www.linkedin.com/in/aanchalk07" target="_blank"
                                                                                                                                        className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-2 rounded-full">
                                                                                                                                                  LinkedIn
                                                                                                                                                          </a>
                                                                                                                                                                </div>

                                                                                            <Skills/>                                                 
               <Projects/>                          <Experience/>    
                                                           
                                                           <Contact/>                          </div>
                                                                                                                                                                      )
                                                                                                                                                                      }

                                                                                                                                                                      export default App;
