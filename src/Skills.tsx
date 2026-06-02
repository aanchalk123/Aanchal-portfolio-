declare global {
      namespace JSX {
          interface IntrinsicElements {
                'lord-icon': any;
                    }
                      }
                      }

                      const skills = [
                        { name: "React.js", icon: "https://cdn.lordicon.com/wloilxuq.json" },
                          { name: "JavaScript", icon: "https://cdn.lordicon.com/fhtaantg.json" },
                            { name: "HTML5", icon: "https://cdn.lordicon.com/qsvgmlnk.json" },
                              { name: "CSS3", icon: "https://cdn.lordicon.com/msoeawqm.json" },
                                { name: "Git", icon: "https://cdn.lordicon.com/qvyppzqz.json" },
                                  { name: "REST APIs", icon: "https://cdn.lordicon.com/yqzmiobz.json" },
                                    { name: "Bootstrap", icon: "https://cdn.lordicon.com/dqxvvqzi.json" },
                                      { name: "Python", icon: "https://cdn.lordicon.com/fhtaantg.json" },
                                      ];

                                      const Skills = () => {
                                        return (
                                            <section id="skills" className="py-16 px-6">
                                                  <h2 className="text-3xl font-bold text-center mb-10 text-white">
                                                          Skills
                                                                </h2>
                                                                      <div className="flex flex-wrap justify-center gap-4">
                                                                              {skills.map((skill) => (
                                                                                        <div
                                                                                                    key={skill.name}
                                                                                                                className="flex flex-col items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-4 rounded-xl shadow-md hover:scale-105 transition-all cursor-pointer"
                                                                                                                          >
                                                                                                                                      <lord-icon
                                                                                                                                                    src={skill.icon}
                                                                                                                                                                  trigger="hover"
                                                                                                                                                                                colors="primary:#ffffff"
                                                                                                                                                                                              style={{ width: '40px', height: '40px' }}
                                                                                                                                                                                                          />
                                                                                                                                                                                                                      <span className="text-sm font-medium">{skill.name}</span>
                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                        ))}
                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                  </section>
                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                    export default Skills;
