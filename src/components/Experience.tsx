import { FaUniversity, FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    icon: <FaBriefcase className="w-8 h-8 text-gray-900 flex-shrink-0 mr-4" />,
    title: "Sniip",
    description: `Tech Lead
                    <br />
                    Dec 2020 - Jan 2022 | Tokyo, Japan
                    <br />
                    - Led a remote team to develop a profitable Tourist Webapp.
                    <br />
                    - Implemented SCRUM and CI/CD processes.
                    <br />
                    - Built a platform for student-host interactions using WebSockets.
                    <br />
                    Skills: MongoDB, CI/CD, Git, Express.js, Node.js,
                    Redux.js, HTML/CSS, React.js, Agile Project Management,
                    JavaScript`,
  },
  {
    icon: <FaBriefcase className="w-8 h-8 text-gray-900 flex-shrink-0 mr-4" />,
    title: "WowTokens",
    description: `Developer
                    <br />
                    Jul 2021 | Seattle, WA
                    <br />
                    - Developed a RESTful API with cacheable calls.
                    <br />
                    - Built a sales prediction calculator using heuristics.
                    <br />
                    - Managed auction data with Cronjobs for scalability.
                    <br />
                    Skills: MongoDB, Express.js, Redux.js, React.js, Redux Thunk, JavaScript`,
  },
  {
    icon: <FaBriefcase className="w-8 h-8 text-gray-900 flex-shrink-0 mr-4" />,
    title: "Oracle",
    description: `Software Engineer Internship
                    <br />
                    May 2022 - Aug 2022`,
  },
  {
    icon: <FaUniversity className="w-8 h-8 text-gray-900 flex-shrink-0 mr-4" />,
    title: "UC San Diego",
    description: `Bachelor of Science - BS, Business/Managerial Economics
                    <br />
                    2019 - Jun 2023 | Grade: 4.0 GPA
                    <br />
                    Skills: Express.js, Java, Redux.js, Git, C++, OpenCV,
                    React.js, Python, Google Apps Script, Node.js, Pandas, Go,
                    Microsoft Excel`,
  },
  {
    icon: <FaUniversity className="w-8 h-8 text-gray-900 flex-shrink-0 mr-4" />,
    title: "UC San Diego",
    description: `Bachelor of Science - BS, Computer Science
                    <br />
                    2019 - 2023 | Grade: 3.8 GPA
                    <br />
                    Skills: Haskell`,
  },
  {
    icon: <FaBriefcase className="w-8 h-8 text-gray-900 flex-shrink-0 mr-4" />,
    title: "Oracle",
    description: `Software Developer
                    <br />
                    Sep 2023 - Aug 2024 | Austin, Texas, United States
                    <br />
                    Skills: Software Infrastructure, Software Design, Python,
                    Docker, Kubernetes, Fleet Management, PL/SQL, Ansible,
                    Helm, JavaScript, Fleet Services, Shell Scripting, SQL,
                    Terraform`,
  },
  {
    icon: <FaBriefcase className="w-8 h-8 text-gray-900 flex-shrink-0 mr-4" />,
    title: "Oracle",
    description: `Software Developer II
                    <br />
                    Sep 2024 - Present | Austin, Texas Metropolitan Area
                    <br />
                    Skills: Terraform`,
  },
];
const Experience = () => {
  return (
    <section className="max-w-3xl mx-auto mt-12 pb-12">
      <h3 className="text-2xl font-serif mb-4">Experience</h3>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
        <div>
          <div className="flex flex-col space-y-4">
            {experiences.slice(0, 3).map((experience, index) => (
              <div key={index} className="flex items-center">
                {experience.icon}
                <div>
                  <h4 className="font-medium">{experience.title}</h4>
                  <p
                    className="text-sm text-gray-500"
                    dangerouslySetInnerHTML={{
                      __html: experience.description,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-4">
            {experiences.slice(3).map((experience, index) => (
              <div key={index} className="flex items-center">
                {experience.icon}
                <div>
                  <h4 className="font-medium">{experience.title}</h4>
                  <p
                    className="text-sm text-gray-500"
                    dangerouslySetInnerHTML={{
                      __html: experience.description,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
