import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import dermstore from "../../Assets/Projects/dermstore.jpg";

import shoppers_stop from "../../Assets/Projects/shoppers_stop.png";
import apollo from "../../Assets/Projects/apollo.webp";


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
                 imgPath={dermstore}
              
              isBlog={false}
              title="DERMSTORE"
              description="Dermstore is a skin care and beauty e-commerce site in the United States. Since December 2020, it is a subsidiary of The Hut Group which is a British e-commerce company.We used HTML, CSS and JAVASCRIPT to bulit this project"
              link="https://github.com/Vivek8210/Dermstore"
              deployment_link="https://practical-lewin-786876.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
          
            <ProjectCard
            
              imgPath={shoppers_stop}
              isBlog={false}
              title="SHOPPERS STOP"
              description="Shoppers Stop stores have an unparalleled assortment of leading international and national brands in clothing for men, women, and kids, accessories, fragrances, cosmetics, footwear; home furnishing and decor products."
              link="https://github.com/mshakir082/Shoppers_Stop-Clone"
              deployment_link="https://steady-bavarois-32dc0a.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
          
            <ProjectCard
              imgPath={apollo}
              isBlog={false}
              title="APOLLO 24/7"
              description="Apollo 24|7 is the largest multi-channel digital healthcare platform in India, created with a vision of eliminating flexibility blockages from the healthcare industry. online doctor consultations, and diagnostic lab tests at home."
              link="https://github.com/soumyajit4419/Editor.io"
              deployment_link="https://dapper-chebakia-d4e762.netlify.app/"
              />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
