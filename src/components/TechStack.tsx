const skills = [
  "Python (Pandas, Scikit-Learn, Matplotlib)",
  "SQL (MySQL, MSSQL)",
  "IBM Cognos",
  "Tomcat",
  "WinSCP",
  "FileZilla",
  "Web Services API",
  "JavaScript",
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>My Techstack</h2>
      <div className="techstack-grid">
        {skills.map((skill, idx) => (
          <div className="techstack-chip" key={idx}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
