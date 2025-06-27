import type { Provider } from './types';

export const providers: Provider[] = [
  {
    id: 'techwave-solutions',
    name: 'TechWave Solutions',
    service: 'Web Development',
    location: 'San Francisco, CA',
    rating: 4.8,
    reviewsCount: 124,
    mainImage: 'https://placehold.co/600x400',
    longDescription:
      'TechWave Solutions is a premier web development agency specializing in creating high-performance, scalable, and secure web applications. Our team of expert developers leverages the latest technologies to deliver custom solutions that drive business growth. From e-commerce platforms to complex enterprise systems, we build digital experiences that users love.',
    images: [
      'https://placehold.co/800x600',
      'https://placehold.co/800x600',
      'https://placehold.co/800x600',
    ],
    reviews: [
      {
        id: 1,
        author: 'John Doe',
        rating: 5,
        date: '2023-10-22',
        comment:
          'Incredible team! They delivered our project ahead of schedule and the quality was exceptional. The communication was transparent and they were very responsive to our feedback.',
      },
      {
        id: 2,
        author: 'Jane Smith',
        rating: 4,
        date: '2023-09-15',
        comment:
          'A very professional and skilled group of developers. They understood our vision and translated it into a fantastic product. There were some minor delays, but the end result was worth it.',
      },
       {
        id: 3,
        author: 'Samuel Green',
        rating: 5,
        date: '2023-08-01',
        comment:
          'TechWave exceeded all our expectations. Their technical expertise is top-notch, and they provided valuable insights that improved our initial concept. Highly recommend their services.',
      },
    ],
  },
  {
    id: 'pixel-perfect-designs',
    name: 'Pixel Perfect Designs',
    service: 'Graphic Design',
    location: 'New York, NY',
    rating: 4.9,
    reviewsCount: 210,
    mainImage: 'https://placehold.co/600x400',
    longDescription: 'Pixel Perfect Designs is a creative agency that crafts stunning visual identities for brands. We believe that great design tells a story. Our services include logo design, branding packages, web design, and marketing materials. We work closely with our clients to create visuals that are not only beautiful but also effective.',
    images: [
      'https://placehold.co/800x600',
      'https://placehold.co/800x600',
      'https://placehold.co/800x600',
    ],
    reviews: [
      {
        id: 1,
        author: 'Emily White',
        rating: 5,
        date: '2023-11-05',
        comment:
          'Working with Pixel Perfect was a dream. Their creativity is unmatched and they truly captured the essence of our brand. The final designs were breathtaking.',
      },
      {
        id: 2,
        author: 'Michael Brown',
        rating: 5,
        date: '2023-10-18',
        comment:
          'The best design agency I have ever worked with. They are professional, timely, and incredibly talented. Our new branding has received so many compliments.',
      },
    ],
  },
  {
    id: 'market-gurus-inc',
    name: 'Market Gurus Inc.',
    service: 'Marketing',
    location: 'Chicago, IL',
    rating: 4.7,
    reviewsCount: 98,
    mainImage: 'https://placehold.co/600x400',
    longDescription: 'Market Gurus Inc. is a data-driven marketing agency that helps businesses grow their online presence. We specialize in SEO, PPC, content marketing, and social media strategy. Our goal is to deliver measurable results and a significant return on investment for our clients.',
    images: [
      'https://placehold.co/800x600',
      'https://placehold.co/800x600',
    ],
    reviews: [
      {
        id: 1,
        author: 'Jessica Lee',
        rating: 5,
        date: '2023-11-10',
        comment: 'Our website traffic has skyrocketed since we started working with Market Gurus. Their strategies are effective and their team is a pleasure to work with.',
      },
      {
        id: 2,
        author: 'David Chen',
        rating: 4,
        date: '2023-09-02',
        comment: 'Solid results and a knowledgeable team. The reporting could be a bit more detailed, but overall, we are very satisfied with their performance and our growth.',
      },
    ],
  },
    {
    id: 'innovate-it',
    name: 'InnovateIT',
    service: 'IT Consulting',
    location: 'Austin, TX',
    rating: 4.9,
    reviewsCount: 152,
    mainImage: 'https://placehold.co/600x400',
    longDescription: 'InnovateIT provides strategic IT consulting to help businesses navigate the complexities of digital transformation. We offer expertise in cloud infrastructure, cybersecurity, data analytics, and enterprise software. Our certified consultants partner with you to align technology with your business objectives.',
    images: [
      'https://placehold.co/800x600',
      'https://placehold.co/800x600',
      'https://placehold.co/800x600',
    ],
    reviews: [
      {
        id: 1,
        author: 'Sarah Johnson',
        rating: 5,
        date: '2023-11-20',
        comment: 'InnovateIT has been a crucial partner in our transition to the cloud. Their expertise and guidance were invaluable, making the process smooth and efficient.',
      },
      {
        id: 2,
        author: 'Tom Wilson',
        rating: 5,
        date: '2023-10-05',
        comment: 'The cybersecurity audit they performed was thorough and insightful. We now feel much more secure thanks to their recommendations. Highly professional team.',
      },
    ],
  },
  {
    id: 'creative-quill',
    name: 'Creative Quill',
    service: 'Content Creation',
    location: 'Remote',
    rating: 4.8,
    reviewsCount: 85,
    mainImage: 'https://placehold.co/600x400',
    longDescription: 'Creative Quill is a collective of passionate writers, editors, and strategists dedicated to crafting compelling content. We produce high-quality blog posts, articles, website copy, and whitepapers that engage audiences and build brand authority. Let us tell your story.',
    images: [
      'https://placehold.co/800x600',
    ],
    reviews: [
      {
        id: 1,
        author: 'Olivia Martinez',
        rating: 5,
        date: '2023-11-15',
        comment: 'The articles we received from Creative Quill were well-researched, beautifully written, and perfectly matched our brand voice. Our blog has never looked better.',
      },
      {
        id: 2,
        author: 'Ben Carter',
        rating: 4,
        date: '2023-09-30',
        comment: 'Great writing team. They are flexible and can handle a variety of topics. Sometimes revisions take a little while, but the quality of the final content is always excellent.',
      },
    ],
  },
];
