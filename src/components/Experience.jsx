import React from 'react';

const Experience = () => {
  return (
    <section id='experience'>
      <p className='text-center'>Explore My</p>
      <h1 class='title  '>Experience</h1>
      <div className='experience-container'>
        <div className='company-container'>
          <h4>Software Engineer | GlobalLogic | Nov 2023 – Present</h4>
          <p>
            Design & develop RESTful APIs for web applications, debugging,
            deploying, testing, and providing integration support using Java,
            Spring Boot, AWS, Docker, CI/CD, Jenkins, Swagger, Splunk, TDD.
          </p>
        </div>
        <div className='company-container'>
          <h4>Software Developer | Eiger IT Inc | Jun 2023 – Oct 2023</h4>
          <p>
            Developed RESTful APIs with microservice architecture for enterprise
            level applications using Java, Spring Boot, MongoDB, MySQL,
            Hibernate, AWS Lambda, S3, JUnit, Mockito, Apache Kafka.
          </p>
        </div>
        <div className='company-container'>
          <h4>Software Development Engineer | Amazon | Aug 2022 – Mar 2023</h4>
          <p>
            Led the design and development of REST API's using Java, Spring
            Boot, Spring MVC, and Spring REST, implementing a CI/CD pipeline
            using AWS CDK and CloudFormation stacks, ensuring seamless
            deployment and continuous integration of new features.
          </p>
        </div>
        <div className='company-container'>
          <h4>
            Software Engineer | Tata Consultancy Services | Apr 2019 – Aug 2021
          </h4>
          <p>
            Engineered modular Java-based microservices using Spring Boot,
            Spring MVC, and Java 8 features, resulting in a 25% efficiency
            boost. Applied design patterns and Test-Driven Development (TDD) for
            robust, maintainable code, and achieved a 99% unit test success rate
            with JUnit5 and Mockito.
          </p>
        </div>
      </div>
      <div className='skills-container'>
        <h3>Skills</h3>
        <div className='skill-card'>
          <h5>Programming Languages</h5>
          <p>Java, J2EE, Python, C++, SQL</p>
        </div>
        <div className='skill-card'>
          <h5>Java Technologies</h5>
          <p>
            Spring Boot, Spring MVC, Spring Data JPA, Spring Cloud, Spring
            Security, JSP, Servlets, JDBC, EJB, Struts
          </p>
        </div>
        <div className='skill-card'>
          <h5>Web Technologies</h5>
          <p>
            JavaScript, React, Angular, TypeScript, NodeJs, ExpressJs, Redux,
            HTML5, CSS3, Bootstrap
          </p>
        </div>
        <div className='skill-card'>
          <h5>AWS Technologies</h5>
          <p>
            EC2, S3, CloudFormation, Lambda, StepFunctions, DynamoDB, API
            Gateway, IAM, SNS and CDK
          </p>
        </div>
        <div className='skill-card'>
          <h5>Database</h5>
          <p>
            MongoDB, DynamoDB, Postgresql, Microsoft SQL Server, Oracle, MySQL
          </p>
        </div>
        <div className='skill-card'>
          <h5>Tools/Frameworks</h5>
          <p>
            GIT, BitBucket, Docker, Kubernetes, Jenkins, JIRA, Postman, JUnit,
            Mockito, Apache Kafka, JWT, OAuth2, Splunk
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
