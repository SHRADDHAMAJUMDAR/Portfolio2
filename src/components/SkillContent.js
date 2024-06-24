import React from 'react';
import './SkillContentStyles.css';

const SkillContent = () => {
  const skills = [
    { name: 'HTML', level: '60%' },
    { name: 'CSS', level: '80%' },
    { name: 'JavaScript', level: '75%' },
    { name: 'PHP', level: '40%' },
    { name: 'C/C++/Python', level: '80%' },
    { name: 'Database Management(Postgresql,MYSQL)', level: '60%' },
    { name: 'Django', level: '80%' },
    { name: 'Django Rest Framework', level: '60%' },
    { name: 'ReactJs', level: '50%' },
    { name: 'MongoDB', level: '40%' },
    { name: 'Core JAVA', level: '30%' },

  ];

  const splitSkills = (skills) => {
    const half = Math.ceil(skills.length / 2);
    return [skills.slice(0, half), skills.slice(half)];
  }

  const [firstColumnSkills, secondColumnSkills] = splitSkills(skills);

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          
        </div>
        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            {firstColumnSkills.map((skill, index) => (
              <div className="progress" key={index}>
                <span className="skill">{skill.name} <i className="val">{skill.level}</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" style={{ width: skill.level }} aria-valuenow={parseInt(skill.level, 10)} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            {secondColumnSkills.map((skill, index) => (
              <div className="progress" key={index}>
                <span className="skill">{skill.name} <i className="val">{skill.level}</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" style={{ width: skill.level }} aria-valuenow={parseInt(skill.level, 10)} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillContent;
