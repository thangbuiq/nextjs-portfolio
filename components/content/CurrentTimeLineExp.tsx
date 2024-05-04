'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>KMS Technology</a> | mar. 2024 - Currently</TimelineEvent.Title>

        <TimelineEvent.Description>
          AI Engineer, working on the deployment of AI applications using Kubernetes, ArgoCD, Helm and GitHub Actions, also working on the development of NLP models using Python, TensorFlow, FastAPI, and LLM agent with LlamaIndex.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>Bosch Global Software Technologies | sep. 2023 - mar. 2024</TimelineEvent.Title>

        <TimelineEvent.Description>
          DevOps Engineer, working on the deployment of applications using Docker, Jenkins, GitHub Actions, Terraform. Write scripts in Python, Bash, and Groovy. Also, working on the development of a CI/CD pipeline with store versioning and rollback using JFrog Artifactory.
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;