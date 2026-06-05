declare global {
      namespace JSX {
          interface IntrinsicElements {
                'lord-icon': any
                    }
                      }
                      }

                      const skills = [
                        { name: 'React.js', icon: 'https://cdn.lordicon.com/wloilxuq.json' },
                          { name: 'JavaScript', icon: 'https://cdn.lordicon.com/fhtaantg.json' },
                            { name: 'HTML5', icon: 'https://cdn.lordicon.com/qsvgmlnk.json' },
                              { name: 'CSS3', icon: 'https://cdn.lordicon.com/dqxvvqzi.json' },
                                { name: 'JSX', icon: 'https://cdn.lordicon.com/wloilxuq.json' },
                                  { name: 'Git', icon: 'https://cdn.lordicon.com/qvyppzqz.json' },
                                    { name: 'REST APIs', icon: 'https://cdn.lordicon.com/yqzmiobz.json' },
                                      { name: 'Bootstrap', icon: 'https://cdn.lordicon.com/msoeawqm.json' },
                                        { name: 'Python', icon: 'https://cdn.lordicon.com/ybfmnnft.json' },
                                          { name: 'Django', icon: 'https://cdn.lordicon.com/jnzhohhs.json' },
                                            { name: 'PostgreSQL', icon: 'https://cdn.lordicon.com/rqsvgwkb.json' },
                                            ]

                                            const Skills = () => {
                                              return (
                                                  <section id="skills" className="py-16 px-6">
                                                        <div className="max-w-3xl mx-auto">
                                                                <h2 className="text-3xl font-bold text-center mb-10 text-white">
                                                                          Skills
                                                                                  </h2>
                                                                                          <div className="flex flex-wrap justify-center gap-3">
                                                                                                    {skills.map((skill) => (
                                                                                                                <div
                                                                                                                              key={skill.name}
                                                                                                                                            className="group flex flex-col items-center gap-2 bg-[#0d1b2a] hover:bg-[#112240] text-white px-5 py-4 rounded-xl transition-all duration-200 cursor-pointer w-24"
                                                                                                                                                        >
                                                                                                                                                                      <lord-icon
                                                                                                                                                                                      src={skill.icon}
                                                                                                                                                                                                      trigger="hover"
                                                                                                                                                                                                                      colors="primary:#60a5fa,secondary:#a78bfa"
                                                                                                                                                                                                                                      style={{ width: '40px', height: '40px' }}
                                                                                                                                                                                                                                                    />
                                                                                                                                                                                                                                                                  <span className="text-xs text-gray-400 group-hover:text-white text-center transition-colors">
                                                                                                                                                                                                                                                                                  {skill.name}
                                                                                                                                                                                                                                                                                                </span>
                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                        </section>
                                                                                                                                                                                                                                                                                                                                          )
                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                          export default Skills
