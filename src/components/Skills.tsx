declare global {
      namespace JSX {
          interface IntrinsicElements {
                'lord-icon': any
                    }
                      }
                      }

                      const skills = [
                        {
                            name: 'React.js',
                                icon: 'https://cdn.lordicon.com/wloilxuq.json',
                                  },
                                    {
                                        name: 'JavaScript',
                                            icon: 'https://cdn.lordicon.com/fhtaantg.json',
                                              },
                                                {
                                                    name: 'HTML5',
                                                        icon: 'https://cdn.lordicon.com/qsvgmlnk.json',
                                                          },
                                                            {
                                                                name: 'CSS3',
                                                                    icon: 'https://cdn.lordicon.com/dqxvvqzi.json',
                                                                      },
                                                                        {
                                                                            name: 'JSX',
                                                                                icon: 'https://cdn.lordicon.com/wloilxuq.json',
                                                                                  },
                                                                                    {
                                                                                        name: 'Git',
                                                                                            icon: 'https://cdn.lordicon.com/qvyppzqz.json',
                                                                                              },
                                                                                                {
                                                                                                    name: 'REST APIs',
                                                                                                        icon: 'https://cdn.lordicon.com/yqzmiobz.json',
                                                                                                          },
                                                                                                            {
                                                                                                                name: 'Bootstrap',
                                                                                                                    icon: 'https://cdn.lordicon.com/msoeawqm.json',
                                                                                                                      },
                                                                                                                        {
                                                                                                                            name: 'Python',
                                                                                                                                icon: 'https://cdn.lordicon.com/ybfmnnft.json',
                                                                                                                                  },
                                                                                                                                    {
                                                                                                                                        name: 'Django',
                                                                                                                                            icon: 'https://cdn.lordicon.com/jnzhohhs.json',
                                                                                                                                              },
                                                                                                                                                {
                                                                                                                                                    name: 'PostgreSQL',
                                                                                                                                                        icon: 'https://cdn.lordicon.com/rqsvgwkb.json',
                                                                                                                                                          },
                                                                                                                                                          ]

                                                                                                                                                          const Skills = () => {
                                                                                                                                                            return (
                                                                                                                                                                <section id="skills" className="py-24 px-6 relative">
                                                                                                                                                                      <div className="max-w-5xl mx-auto">
                                                                                                                                                                              {/* Section label */}
                                                                                                                                                                                      <p className="text-blue-400 text-sm font-medium tracking-widest uppercase text-center mb-3">
                                                                                                                                                                                                What I work with
                                                                                                                                                                                                        </p>
                                                                                                                                                                                                                <h2
                                                                                                                                                                                                                          className="text-4xl font-bold text-center mb-14 text-white"
                                                                                                                                                                                                                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                                      Skills
                                                                                                                                                                                                                                                              </h2>

                                                                                                                                                                                                                                                                      <div className="flex flex-wrap justify-center gap-4">
                                                                                                                                                                                                                                                                                {skills.map((skill) => (
                                                                                                                                                                                                                                                                                            <div
                                                                                                                                                                                                                                                                                                          key={skill.name}
                                                                                                                                                                                                                                                                                                                        className="group flex flex-col items-center gap-3 bg-[#0d1b2a] border border-white/5 hover:border-blue-500/50 text-white px-6 py-5 rounded-2xl hover:bg-[#112240] transition-all duration-300 cursor-pointer w-28 glow"
                                                                                                                                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                                                                                                                                  <lord-icon
                                                                                                                                                                                                                                                                                                                                                                  src={skill.icon}
                                                                                                                                                                                                                                                                                                                                                                                  trigger="hover"
                                                                                                                                                                                                                                                                                                                                                                                                  colors="primary:#60a5fa,secondary:#a78bfa"
                                                                                                                                                                                                                                                                                                                                                                                                                  style={{ width: '44px', height: '44px' }}
                                                                                                                                                                                                                                                                                                                                                                                                                                />
                                                                                                                                                                                                                                                                                                                                                                                                                                              <span className="text-sm font-medium text-gray-300 group-hover:text-white text-center transition-colors">
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
