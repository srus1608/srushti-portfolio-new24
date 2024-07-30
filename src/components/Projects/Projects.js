import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import asd from "../../Assets/Projects/asd.jpg";
import dbms from "../../Assets/Projects/dbms.jpg";
import fb from "../../Assets/Projects/fb.png";
import hospi from "../../Assets/Projects/hospi.png";
import ms from "../../Assets/Projects/ms.png";
import task from "../../Assets/Projects/task.png";
import sms from "../../Assets/Projects/sms.png";
import blog from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asd}
              isBlog={false}
              title="Machine Learning Techniques for ASD Detection and Recommendation"
              description="I developed machine learning models to diagnose Autism Spectrum Disorder, achieving 70.79% accuracy with Logistic Regression and 69.96% accuracy with SVM. Using Python, scikit-learn, and Jupyter Notebook, I built and trained these models. Additionally, I created an interactive diagnostic interface using Streamlit, demonstrating strong analytical and technical skills."
              ghLink="https://github.com/srus1608/Final_YEar-_Project_ASD"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fb}
              isBlog={false}
              title="Facebook Clone"
              description="I created a Facebook clone using HTML and Tailwind CSS, replicating the core design and functionality of the social media platform. This project showcases my front-end development skills and my ability to effectively use modern CSS frameworks for responsive and visually appealing web design."
              ghLink="https://github.com/srus1608/tailwindcss_fb1"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbms}
              isBlog={false}
              title="DBMS Project"
              description="I developed an online buying and selling platform for medicines using HTML, CSS, SCSS, PHP, and Bootstrap. This DBMS project features user authentication, product listings, and a secure payment system, showcasing my skills in full-stack development and database management."
              ghLink="https://github.com/srus1608/DBMS-project-new"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospi}
              isBlog={false}
              title="Hospital Management"
              description=" I developed a hospital management website using HTML, CSS, and JavaScript. The site includes patient registration, appointment scheduling, and staff management features, demonstrating my front-end development skills and ability to create user-friendly web applications."
              ghLink="https://github.com/srus1608/hospital-management"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sms}
              isBlog={false}
              title="SMS/Email Spam predictor"
              description="I developed an SMS/Email spam predictor using machine learning and natural language processing (NLP) techniques in Jupyter Notebook and PyCharm. This project involved training models to accurately classify messages as spam or not spam, demonstrating my expertise in machine learning, NLP, and practical implementation skills."
              ghLink="https://github.com/srus1608/SMS-Spam-predictor"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="FULL stack Blog Website"
              description="I developed a full-stack blog website using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project includes user authentication, post creation, and comment functionality, showcasing my proficiency in full-stack development and ability to create dynamic, responsive web applications."
              ghLink="https://github.com/srus1608/MERN_Blog_App"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task Manager "
              description="I created a task manager application using HTML, CSS, and JavaScript. This project includes features for adding, editing, and deleting tasks, as well as organizing tasks by priority or deadline. It highlights my front-end development skills and ability to build interactive, user-friendly applications."
              ghLink="https://github.com/srus1608/TASK_manager"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ms}
              isBlog={false}
              title="Microsoft Clone "
              description="I created a microsoft clone using HTML and Tailwind CSS, replicating the core design and functionality of the social media platform. This project showcases my front-end development skills and my ability to effectively use modern CSS frameworks for responsive and visually appealing web design."
              ghLink="https://github.com/srus1608/ms_clone"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
