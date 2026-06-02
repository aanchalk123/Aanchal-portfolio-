function Skills() {
    
    const skills = [
        { name: "React", icon: "https://cdn.lordicon.com/wloilxuq.json" },
          { name: "TypeScript", icon: "https://cdn.lordicon.com/yqzmiobz.json" },
            { name: "CSS", icon: "https://cdn.lordicon.com/msoeawqm.json" },
              {
                    name: "Git",
                        icon: "https://cdn.lordicon.com/qvyppzqz.json",
                          },
                {
                      name: "JavaScript",
                          icon: "https://cdn.lordicon.com/fhtaantg.json",
                            },
                
                // add more...
                ];

    

                return (
                    <section id="skills" className="bg-gray-800 py-16 px-4 text-center ">
                          <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
                                <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                                        {skills.map((skill) => (
                                                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm animate-fadeInUp " style={{ animationDelay: `${index * 0.1}s` }}
                                                    >
                                                              {skill}
                                                              <lord-icon
                                                                    src={skill.icon}       
                                                                          trigger="hover"
                                                                                colors="primary:#ffffff"
                                                                                      style={{ width: '32px', height: '32px' }}
                                                                                          />
                                                                                              {skill.name}
                                                                        </span>
                                                                                ))}
                                                                                      </div>
                                                                                          </section>
                                                                                            )
                                                                                            }

                                                                                            export default Skills;