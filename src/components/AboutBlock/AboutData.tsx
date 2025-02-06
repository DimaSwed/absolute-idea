interface IAboutData {
  numbers: string
  image: string
  title: string
  description: string
}

export const aboutData: IAboutData[] = [
  {
    numbers: '10+',
    image: '/about/about-card-image1.png',
    title: 'Years – Technology Expertise',
    description:
      'With over a decade of experience, we specialize in VR training solutions and IT outsourcing for various industries.'
  },
  {
    numbers: '500+',
    image: '/about/about-card-image2.png',
    title: 'Specialists – Skilled & Trainede',
    description:
      'Our VR programs enhance workforce skills, while our IT teams deliver top-tier development solutions for businesses.'
  },
  {
    numbers: '15+',
    image: '/about/about-card-image3.png',
    title: 'Industries – Global Reach',
    description:
      'We provide immersive VR training and scalable IT outsourcing services to businesses worldwide, adapting to diverse industry needs.'
  }
]
