import React from 'react';
import './SummaryStyles.css';

const SummaryContent = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2> {/* Added title for consistency */}
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Shraddha Majumdar</h4>
              <p><em>I am excited about the opportunities to apply my knowledge and skills in real-world scenarios. My portfolio showcases my projects and reflects my commitment to continuous learning and innovation. The following are my whereabouts and contact details:</em></p>
              <ul>
                <li>Agartala, Tripura, India</li>
                <li>(+91) 9862437452</li>
                <li>shraddhamajumdar03@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Technology (Electronics and Communications Engineering)</h4>
              <h5>2021 - 2025</h5>
              <p><em>National Institute of Technology, Agartala</em></p>
              <p>CGPA: 8.84</p>
            </div>
            <div className="resume-item">
              <h4>Higher Secondary (Central Board Of Secondary Education)</h4>
              <h5>2019 - 2021</h5>
              <p><em>Hindi Higher Secondary School, Agartala, Tripura</em></p>
              <p>Obtained 95.2%</p>
            </div>
            <div className="resume-item">
              <h4>Secondary Education (ICSE)</h4>
              <h5>2006 - 2019</h5>
              <p><em>Holy Cross School, Agartala, India</em></p>
              <p>Obtained 96.4%</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Data Science and Business Analytics Intern</h4>
              <h5>Sep'23 - Oct'23</h5>
              <p><em>The Sparks Foundation</em></p>
              <p><a href="https://truecertificates.com/verified/X8428EKBJA" target="_blank" rel="noopener noreferrer">https://truecertificates.com/verified/X8428EKBJA</a></p> {/* Ensured consistent paragraph structure */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummaryContent;
