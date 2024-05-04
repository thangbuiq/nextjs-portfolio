import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
        I am an AI Engineer with data driven mindset, passionate about technology and I love to learn new things. My main goal is to bring the AI models outside the Jupiter notebooks and deploy them in production environments.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;