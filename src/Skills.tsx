declare global {
    namespace JSX {
        interface IntrinsicElements {
              'lord-icon': any;
                  }
                    }
                    }

                    const skills = [
                      {
                          name: "React.js",
                              icon: "https://cdn.lordicon.com/wloilxuq.json",  // code window
                                  trigger: "hover",
                                      state: "hover-code",
                                        },
                                          {
                                              name: "JavaScript",
                                                  icon: "https://cdn.lordicon.com/fhtaantg.json",  // error/warning
                                                      trigger: "hover",
                                                          state: "hover-error",
                                                            },
                                                              {
                                                                  name: "HTML5",
                                                                      icon: "https://cdn.lordicon.com/qsvgmlnk.json",
                                                                          trigger: "hover",
                                                                              state: "hover-pinch",
                                                                                },
                                                                                  {
                                                                                      name: "CSS3",
                                                                                          icon: "https://cdn.lordicon.com/dqxvvqzi.json",  // quilt layout
                                                                                              trigger: "hover",
                                                                                                  state: "hover-layout",
                                                                                                    },
                                                                                                      {
                                                                                                          name: "Git",
                                                                                                              icon: "https://cdn.lordicon.com/qvyppzqz.json",  // github reveal
                                                                                                                  trigger: "hover",
                                                                                                                      state: "hover-reveal",
                                                                                                                        },
                                                                                                                          {
                                                                                                                              name: "REST APIs",
                                                                                                                                  icon: "https://cdn.lordicon.com/yqzmiobz.json",  // api spin
                                                                                                                                      trigger: "hover",
                                                                                                                                          state: "hover-spin",
                                                                                                                                            },
                                                                                                                                              {
                                                                                                                                                  name: "Bootstrap",
                                                                                                                                                      icon: "https://cdn.lordicon.com/msoeawqm.json",
                                                                                                                                                          trigger: "hover",
                                                                                                                                                              state: "hover-pinch",
                                                                                                                                                                },
                                                                                                                                                                  {
                                                                                                                                                                      name: "Python",
                                                                                                                                                                          icon: "https://cdn.lordicon.com/ybfmnnft.json",  // python
                                                                                                                                                                              trigger: "hover",
                                                                                                                                                                                  state: "hover-spin",
                                                                                                                                                                                    },
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
                                                                                                                                                                                                                                                                                                                trigger={skill.trigger}
                                                                                                                                                                                                                                                                                                                              state={skill.state}
                                                                                                                                                                                                                                                                                                                                            colors="primary:#ffffff,secondary:#93c5fd"
                                                                                                                                                                                                                                                                                                                                                          style={{ width: '48px', height: '48px' }}
                                                                                                                                                                                                                                                                                                                                                                      />
                                                                                                                                                                                                                                                                                                                                                                                  <span className="text-sm font-medium">{skill.name}</span>
                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                    ))}
                                                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                                              </section>
                                                                                                                                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                                                                                                                                };

                                                                                                                                                                                                                                                                                                                                                                                                                export default Skills;
