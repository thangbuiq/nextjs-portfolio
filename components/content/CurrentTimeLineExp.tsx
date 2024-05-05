// 'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://kms-technology.com/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'><strong className='text-white'>KMS Technology</strong></a> | mar. 2024 - Currently</TimelineEvent.Title>

        <TimelineEvent.Description>
          <ul>
            <li><span>&#8226;</span><strong className='text-white'> AI Engineer</strong></li>
            <li><span>&#8226;</span> Deployment of AI applications using Kubernetes, ArgoCD, Helm and GitHub Actions</li>
            <li><span>&#8226;</span> Development of NLP models using Python, TensorFlow, FastAPI, and LLM agent with LlamaIndex</li>
          </ul>
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title><a href='https://kms-technology.com/' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'><strong className='text-white'>Bosch Global Software Technologies</strong></a> | sep. 2023 - mar. 2024</TimelineEvent.Title>

        <TimelineEvent.Description>
          <ul>
            <li><span>&#8226;</span><strong className='text-white'> DevOps Engineer</strong></li>
            <li><span>&#8226;</span> Deployment of applications using Docker, Jenkins, GitHub Actions, Terraform</li>
            <li><span>&#8226;</span> Implement CI/CD pipelines with store versioning and rollback using JFrog Artifactory</li>
            <li><span>&#8226;</span> Write scripts in Python, Bash, and Groovy</li>
          </ul>
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;