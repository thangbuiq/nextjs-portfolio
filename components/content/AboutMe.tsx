import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
        I am an <b>AI Engineer</b> with data driven mindset, passionate about technology and I love to learn new things. I have experience in develop and deploy AI models for various domains such as computer vision, natural language processing, and reinforcement learning.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;