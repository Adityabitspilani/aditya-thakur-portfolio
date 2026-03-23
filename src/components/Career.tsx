import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Operations Lead</h4>
                <h5>eClinicalWorks</h5>
              </div>
              <h3>2018 - Present</h3>
            </div>
            <p>
              Delivered payment module products (Surcharge Fee, Card-on-File,
              Payment Plans). Owned end-to-end delivery including PRDs, user stories,
              acceptance criteria, and shipped 10+ product enhancements in one year.
              Led cross-functional coordination between Product, Engineering, QA, and
              Support; executed RCA and post-mortems per ITIL principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master in Data Science & AI (In Progress)</h4>
                <h5>BITS Pilani</h5>
              </div>
              <h3>2025 – Present</h3>
            </div>
            <p>
              Expanding analytics and AI expertise with machine learning,
              statistics, and applied data science to support data-driven product
              strategy and consulting outcomes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor's in Computer Science</h4>
                <h5>Thakur College, Mumbai University</h5>
              </div>
              <h3>2017</h3>
            </div>
            <p>
              Foundational undergraduate degree in computer science with
              technical coursework in programming, databases, and IT systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
