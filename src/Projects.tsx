function Projects() {
    const projects = [
        {
              name: "DHTC India",
                    description: "Improved dashboard responsiveness across multiple screen sizes and built dynamic UI components.",
                          tech: "React.js, CSS"
                              },
                                  {
                                        name: "DHTC Logistics",
                                              description: "Developed responsive frontend interfaces using React.js and integrated REST APIs.",
                                                    tech: "React.js, REST APIs"
                                                        },
                                                            {
                                                                  name: "Calcutta Express Transport",
                                                                        description: "Contributed to frontend development and REST API integration using React.js.",
                                                                              tech: "React.js, REST APIs"
                                                                                  },
                                                                                      {
                                                                                            name: "Hospital Management System",
                                                                                                  description: "Final year project for managing patient records and appointment scheduling.",
                                                                                                        tech: "HTML5 , CSS, JavaScript , SQLite3"
                                                                                                            },
                                                                                                              ]

                                                                                                                return (
                                                                                                                    <section id="projects" className="bg-gray-900 py-16 px-4 text-center">
                                                                                                                          <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
                                                                                                                                <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
                                                                                                                                        {projects.map((project) => (
                                                                                                                                                  <div className="bg-gray-800 p-6 rounded-xl text-left">
                                                                                                                                                              <h3 className="text-xl font-bold text-blue-400 mb-2">{project.name}</h3>
                                                                                                                                                                          <p className="text-gray-300 mb-3">{project.description}</p>
                                                                                                                                                                                      <span className="text-sm text-blue-300">{project.tech}</span>
                                                                                                                                                                                                </div>
                                                                                                                                                                                                        ))}
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                  </section>
                                                                                                                                                                                                                    )
                                                                                                                                                                                                                    }

                                                                                                                                                                                                                    export default Projects;
