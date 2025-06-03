import logo from "../assets/images/shailendra.jpg";
import styles from "../assets/css/app.module.css";

const Home = () => {
  return (
    <>
      {/* <Link to="/" className="mx-auto flex justify-center my-6">
        <button className="flex items-center justify-center py-3 px-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors duration-200">
          <IoMdHome className="mr-2" /> Go To Home
        </button>
      </Link> */}

      <div className={styles.myContainer}>
        <div className="flex items-center justify-start space-x-12 mb-20">
          <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-gray-300 align-left ms-1 pl-1">
            <img
              src={logo}
              alt="Shailendra Shrestha"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mx-6 space-y-1">
            <h1 className="text-5xl font-bold text-sky-900 mb-3">
              Shailendra Shrestha
            </h1>
            <p>
              <span className="font-bold">Date of Birth:</span> 15/05/1990
            </p>
            <p>
              <span className="font-bold">Phone number:</span>
              <a href="tel:+9779862004936">+977 9802235854</a>
            </p>
            <p>
              <span className="font-bold">Email address:</span>{" "}
              <a href="mailto:shailendracool433@gmail.com">
                shailendracool433@gmail.com
              </a>
            </p>
            <p>
              <span className="font-bold">Work:</span> Kathmandu, Nepal
            </p>
            <p>
              <span className="font-bold">Home:</span> Biratnagar-11, Morang,
              Nepal
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2 tracking-wide uppercase text-sky-900 opacity-95">
            Professional Summary
          </h2>
          <div className="border-b border-gray-500 my-4 border-2 opacity-50"></div>
          <p className="text-gray-800">
            With over 7 years of experience in the IT, software products, and
            digital marketing, I bring a diverse skillset that includes web
            development, programming, DevOps tools, system administration, and
            business development. I have driven organizational growth and
            streamlined processes. I am passionate about pursuing a dynamic
            career in Information Technology, constantly striving for excellence
            and innovation.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-2 tracking-wide uppercase text-sky-900">
            Work Experience
          </h2>
          <div className="border-b border-gray-500 my-4 border-2 opacity-50"></div>
          <div className="space-y-2 mb-8">
            <h3 className="font-bold text-2xl text-sky-900 underline">
              IT Manager
            </h3>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">
                <a href="https://softechpark.com/" target="_blank">
                  Softechpark Pvt. Ltd.
                </a>
              </span>{" "}
              [20/02/2019 - Present]
            </p>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">City:</span> Kathmandu
            </p>
            <p className="text-gray-800">
              Technical Support, System Administration, Digital Marketing,
              Business Development, Leadership, Project Management, Vendor
              Management, Software Development, Website Development
            </p>
            <hr className="mt-6 border-t border-gray-300" />
          </div>

          <div className="space-y-2 mb-8">
            <h3 className="font-bold text-2xl text-sky-900 underline">
              IT Officer
            </h3>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">
                <a href="https://chainpurmun.com.np/" target="_blank">
                  Chainpur Municipality
                </a>
              </span>{" "}
              [06/03/2018 – 14/01/2019]
            </p>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">City:</span> Chainpur
            </p>
            <p className="text-gray-800">
              System Administration, IT Support, Leadership, Training, Software
              Maintenance, MIS, Networking, Budgeting
            </p>
            <hr className="mt-6 border-t border-gray-300" />
          </div>

          <div className="space-y-2 mb-8">
            <h3 className="font-bold text-2xl text-sky-900 underline">
              Network Assistant
            </h3>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">
                <a href="https://rbb.com.np/" target="_blank">
                  Rastriya Banijya Bank
                </a>
              </span>{" "}
              [07/01/2017 – 02/11/2018]
            </p>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">City:</span> Kathmandu
            </p>
            <p className="text-gray-800">
              Network Maintenance, Installation, Configuration, User Support,
              Security, Monitoring, Upgrades and Updates
            </p>
            <hr className="mt-6 border-t border-gray-300" />
          </div>

          <div className="space-y-2 mb-8">
            <h3 className="font-bold text-2xl text-sky-900 underline">
              PHP Tutor and Supervisor
            </h3>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">
                <a href="https://skyvisionfoundation.com/" target="_blank">
                  Sky Bridge Academy Pvt. Ltd.
                </a>
              </span>{" "}
              [01/08/2014 – 03/08/2016]
            </p>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">City:</span> Kathmandu
            </p>
            <p className="text-gray-800">
              Teaching, Mentoring, Code Review, Course Development, IT
              Assistance, Assessment and Evaluation
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-2 tracking-wide uppercase text-sky-900">
            Additional Experience
          </h2>
          <div className="border-b border-gray-500 my-4 border-2 opacity-50"></div>
          <div className="space-y-2 mb-8">
            <h3 className="font-bold text-2xl text-sky-900 underline">
              Managing Director
            </h3>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">
                New Bhojpure Suppliers{" "}
              </span>
              [09/04/2016-24/02/2024]
            </p>
            <p className="text-gray-800">
              Administration, Finance, Accounting, Operations, Inventory,
              Logistics, Customer Support, Offline Marketing
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-2 tracking-wide uppercase text-sky-900">
            Education
          </h2>
          <div className="border-b border-gray-500 my-4 border-2 opacity-50"></div>
          <div className="space-y-2 mb-8">
            <h3 className="font-bold text-2xl text-sky-900 underline">
              Masters in Computer Application (MCA)
            </h3>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">
                Sharda University{" "}
              </span>
              [ 07/01/2017-02/11/2018]
            </p>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">City: </span>Delhi |
              Country: India |
              <span className="font-bold text-gray-600"> Website: </span>
              <a className="lowercase" href="https://sharda.ac.in">
                https://sharda.ac.in
              </a>
            </p>
            <hr className="mt-6 border-t border-gray-300" />
          </div>
          <div className="space-y-2 mb-8">
            <h3 className="font-bold text-2xl text-sky-900 underline">
              Bachelor of Science in Information Technology (Bsc.IT)
            </h3>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">
                Lord Buddha Education Foundation{" "}
              </span>
              [15/08/2010 – 31/10/2013]
            </p>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">City: </span>Kathmandu |
              <span className="font-bold text-gray-600"> Country: </span>
              Nepal |<span className="font-bold text-gray-600"> Website: </span>
              <a className="lowercase" href="https://www.lbef.org">
                https://www.lbef.org
              </a>
            </p>
            <hr className="mt-6 border-t border-gray-300" />
          </div>

          <div className="space-y-2 mb-8">
            <h3 className="font-bold text-2xl text-sky-900 underline">
              Higher Secondary Education
            </h3>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">
                Little Angel's College{" "}
              </span>
              [25/08/2007 – 18/09/2009]
            </p>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">City: </span>Kathmandu |
              <span className="font-bold text-gray-600"> Country: </span>
              Nepal |<span className="font-bold text-gray-600"> Website: </span>
              <a className="lowercase" href="https://lacm.edu.np">
                https://lacm.edu.np
              </a>
            </p>
            <hr className="mt-6 border-t border-gray-300" />
          </div>

          <div className="space-y-2 mb-8">
            <h3 className="font-bold text-2xl text-sky-900 underline">
              School Leaving Certificate (SLC)
            </h3>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">
                Bal Kalyan Vidya Mandir (BKVM){" "}
              </span>
              [15/07/2007]
            </p>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">City: </span>
              Biratnagar |
              <span className="font-bold text-gray-600"> Country: </span>Nepal |
              <span className="font-bold text-gray-600"> Website: </span>
              <a className="lowercase" href="https://bkvmschool.com">
                https://bkvmschool.com
              </a>
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-2 tracking-wide uppercase text-sky-900">
            Training
          </h2>
          <div className="border-b border-gray-500 my-4 border-2 opacity-50"></div>
          <div className="space-y-2 mb-8">
            <h3 className="font-bold text-2xl text-sky-900 underline">CCNA</h3>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">KVCH </span>
              [12/06/2017- 27/07/2017]
            </p>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">City: </span>
              India |<span className="font-bold text-gray-600"> Country: </span>
              India |<span className="font-bold text-gray-600"> Website: </span>
              <a className="lowercase" href="https://kvch.in">
                https://kvch.in
              </a>
            </p>
            <hr className="mt-6 border-t border-gray-300" />
          </div>
          <div className="space-y-2 mb-8">
            <h3 className="font-bold text-2xl text-sky-900 underline">
              Advance PHP/MYSQL
            </h3>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">
                Broadway Infosys Nepal{" "}
              </span>
              [01/01/2013 – 15/02/2013]
            </p>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">City: </span>
              Kathmandu |{" "}
              <span className="font-bold text-gray-600"> Country: </span> Nepal
              |<span className="font-bold text-gray-600"> Website: </span>
              <a className="lowercase" href="https://broadwayinfosys.com">
                https://broadwayinfosys.com
              </a>
            </p>
            <hr className="mt-6 border-t border-gray-300" />
          </div>

          <div className="space-y-2 mb-8">
            <h3 className="font-bold text-2xl text-sky-900 underline">
              PHP & MYSQL
            </h3>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">
                Global Institute Pvt. Ltd.{" "}
              </span>
              [04/01/2012 – 28/03/2012]
            </p>
            <p className="text-gray-800">
              <span className="font-bold text-gray-600">City: </span>
              Kathmandu |{" "}
              <span className="font-bold text-gray-600"> Country: </span> Nepal
              |<span className="font-bold text-gray-600"> Website: </span>
              <a className="lowercase" href="https://global.edu.np">
                https://global.edu.np
              </a>
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-2 tracking-wide uppercase text-sky-900">
            Achievements
          </h2>
          <div className="border-b border-gray-500 my-4 border-2 opacity-50"></div>
          <p className="font-bold text-sky-900 underline">
            Certificate of Merit [2018]
          </p>
          <p className="text-gray-800">
            on securing{" "}
            <span className="font-semibold capitalize">second position</span> in
            Masters of Computer Application (MCA)
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-2 tracking-wide uppercase text-sky-900">
            Skills
          </h2>
          <div className="space-y-2 border-b border-gray-500 my-4 border-2 opacity-50"></div>
          <h3 className="font-bold text-2xl text-sky-900 underline">
            Frontend Development
          </h3>
          <p className="text-gray-800 mb-4">
            HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Bootstrap,
            Tailwind CSS
          </p>

          <h3 className="font-bold text-2xl text-sky-900 underline">
            Backend Development
          </h3>
          <p className="text-gray-800 mb-4">
            Node.js, Express.js, PHP, Laravel, RESTful API Development, API
            Integration
          </p>

          <h3 className="font-bold text-2xl text-sky-900 underline">
            Database and DevOps
          </h3>
          <p className="text-gray-800 mb-4">
            MongoDB, MySQL, Docker, AWS, GitHub/GitLab/Bitbucket, CI/CD (GitHub
            Actions, Jenkins), Linux
          </p>

          <h3 className="font-bold text-2xl text-sky-900 underline">
            API Tools and Testing
          </h3>
          <p className="text-gray-800 mb-4">
            Postman, API Handling (REST), JWT
          </p>

          <h3 className="font-bold text-2xl text-sky-900 underline">
            Design and Productivity
          </h3>
          <p className="text-gray-800 mb-4">
            Figma, Canva, Adobe Photoshop, Microsoft Office (Excel, PowerPoint,
            Word, Outlook)
          </p>

          <h3 className="font-bold text-2xl text-sky-900 underline">
            Business and Marketing
          </h3>
          <p className="text-gray-800 mb-4">
            Software Testing and Deployment, Web Hosting (cPanel), SEO, Google
            Analytics, Meta Suite
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-2 tracking-wide uppercase text-sky-900">
            Language Skills
          </h2>
          <div className="border-b border-gray-500 my-4 border-2 opacity-50"></div>
          <p className="text-gray-800">
            <span className="font-bold text-gray-600">Mother Tongue(s): </span>
            Nepali
          </p>
          <p className="text-gray-800">
            <div className="flex flex-row space-x-1">
              <span className="font-bold text-gray-600">Other language(s):</span>
              <div>
                English (Intermediate) <br/>
                Hindi
              </div>
            </div>
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-2 tracking-wide uppercase text-sky-900">
            Hobbies and Interests
          </h2>
          <div className="border-b border-gray-500 my-4 border-2 opacity-50"></div>
          <p className="text-gray-800">
            <span className="font-bold text-gray-600">Music:</span> Playing
            guitar and singing
          </p>
        </div>

        <div>
          <h2 className="flex text-3xl font-semibold tracking-wide uppercase text-sky-900">
            Driving License &nbsp;
            <p className="text-gray-800">[06/11/2024-05/11/2029]</p>
          </h2>
          <div className="border-b border-gray-500 my-4 border-2 opacity-50"></div>
          <p className="text-gray-800">A- Motorcycle (Two Wheelers)</p>
          <p className="text-gray-800">B-Light Four Wheelers</p>
        </div>
      </div>
    </>
  );
};

export default Home;
