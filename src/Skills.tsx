function Skills() {
    const skills = [
        "React.js", "JavaScript", "HTML5", "CSS3",
            "Git", "REST APIs", "Bootstrap", "Python"
              ]

                return (
                    <section id="skills" className="bg-gray-800 py-16 px-4 text-center ">
                          <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
                                <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                                        {skills.map((skill) => (
                                                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm animate-fadeInUp " style={{ animationDelay: `${index * 0.1}s` }}
                                                    >
                                                              {skill}
                                                                        </span>
                                                                                ))}
                                                                                      </div>
                                                                                          </section>
                                                                                            )
                                                                                            }

                                                                                            export default Skills;