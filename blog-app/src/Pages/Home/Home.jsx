import  { useState } from 'react';
import './Home.css';
import Hero from '../../Components/Hero/Hero';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Chip from '../../Components/Chip/Chip';
import coffeeImage from '../../assets/coffee.jpg';
import collaboration from '../../assets/collaboration.jpg';
import gym from '../../assets/gym.jpg';
import money from '../../assets/money.jpg';
import robot from '../../assets/robot.jpg';
import rest from '../../assets/rest.jpg';
import techColour from '../../assets/tech-color.jpg';
import {Link} from 'react-router-dom'

//all data for the blogs
const postData = 
[
  {
    id: 1,
    title: '7652 Cups of Coffee',
    category: 'Wellness',
    subCategory: ['Programming', 'Health', 'Work'],
    description:
      "In the bustling world of software development, where lines of code are crafted and digital landscapes are shaped, there exists a steadfast companion that has fueled countless late-night coding sessions and helped developers power through complex problem-solving: coffee. This beloved beverage has become an integral part of a developer's toolkit, serving not just as a source of caffeine but also as a symbol of camaraderie, creativity, and resilience. In this blog post, we'll explore the special relationship between developers and coffee, the science behind the brew, and why it's more than just a caffeinated drink.The Coffee Culture in Development: Walk into any tech company, startup, or co-working space, and you're likely to find developers huddled around their computers with a cup of coffee in hand. It's not just about staying awake; it's about the culture that has evolved around it. Coffee breaks become opportunities for collaboration, brainstorming, and sharing insights. The social aspect of coffee in the development world fosters a sense of community among coders.",
    authorName: 'Tafazdwa',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2023',
    cover: coffeeImage,
  },
  {
    id: 2,
    title: 'The Power of Collaboration',
    category: 'development',
    subCategory: ['ui/ux', 'javascript', 'full stack'],
    description:
      "Collaboration is not a new concept. Throughout human history, we have recognized its value, from early communities working together for survival to the Renaissance's collaborative spirit that sparked a period of unprecedented artistic and scientific innovation. However, the modern age has brought about a new level of interconnectedness, allowing for collaboration on an unprecedented scale.Innovation at its Best: One of the most apparent benefits of collaboration is its capacity to drive innovation. When individuals with diverse backgrounds and expertise come together, they bring unique perspectives and ideas to the table. This diversity often leads to the generation of groundbreaking solutions and ideas that would be difficult to achieve in isolation. Problem Solving: Collaboration can be a powerful tool in problem-solving. When faced with complex challenges, a collaborative approach allows for a more comprehensive analysis of the issue. Teams can tap into the collective intelligence and creativity of their members to devise effective solutions.Fostering Creativity: Collaboration nurtures creativity by providing a platform for brainstorming and sharing ideas. Collaborators can bounce ideas off each other, refine concepts, and explore new possibilities. This process often leads to more innovative outcomes than solitary work.",
    authorName: 'Chacha',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 06, 2023',
    cover: collaboration,
  },
  {
    id: 3,
    title: 'Gym Life is a Happy Life',
    category: 'Lifestyle',
    subCategory: ['Wellness', 'Health'],
    description:
      "The life of a programmer is often marked by long hours in front of a computer screen, deep problem-solving, and a constant flow of caffeine. While these qualities are essential for success in the tech world, they can take a toll on one's physical and mental well-being. That's where the gym comes into play. Incorporating fitness into your routine as a programmer isn't just about aesthetics; it's about enhancing your productivity, improving your overall health, and finding balance in a sedentary profession. In this article, we'll explore why gym life is a game-changer for programmers.Physical Health BenefitsProgramming is a sedentary profession. Hours spent hunched over a keyboard can lead to poor posture, back pain, and a host of other physical issues. Regular exercise at the gym can help mitigate these problems and offer numerous other benefits:Improved Posture: Strength training exercises can correct muscular imbalances and improve posture, reducing the risk of chronic pain. Enhanced Cardiovascular Health: Cardio workouts boost heart health, increase stamina, and improve circulation, which can help prevent heart disease and other cardiovascular issues.Increased Energy Levels: Regular exercise can boost energy and combat the mid-afternoon slump, helping you stay productive throughout the day.Better Sleep: Exercise promotes better sleep quality, which is crucial for maintaining focus and cognitive function.",
    authorName: 'Chacha',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 09, 2023',
    cover: gym,
  },
  {
    id: 4,
    title: 'Financial Literacy',
    category: 'finance',
    subCategory: ['career', 'goal setting', 'lifestyle'],
    description:
      "As a programmer, you're well-versed in writing code, debugging, and solving complex technical challenges. However, just like writing a clean and efficient codebase is crucial for software development, understanding and managing your finances is equally essential for your personal and professional well-being. In this article, we'll explore the importance of financial literacy for programmers and provide practical guidance on how to navigate the financial landscape effectively. The Significance of Financial Literacy for Programmers. Steady Income Requires Careful Management: offers stable employment and a decent income. However, it's essential to manage your earnings wisely. Financial literacy allows you to budget effectively, save, invest, and secure your financial future.Debt Management is Key: Education and training often come with student loans. Financial literacy helps you understand different types of debt, their implications, and strategies to manage and repay them efficiently.Investing in Your Future:As a programmer, you have the potential to earn a comfortable living. Learning about investment options and wealth-building strategies can help you make your money work for you and build a strong financial foundation.",
    authorName: 'Tafadzwa',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 10, 2023',
    cover: money,
  },
  {
    id: 5,
    title: 'DO NOT Overwork Yourself',
    category: 'Wellness',
    subCategory: ['Health', 'programming', 'lifestyle'],
    description:
      "In the fast-paced world of software development, the pressure to deliver, innovate, and meet deadlines can be overwhelming. As a programmer, you're no stranger to long hours, tight schedules, and the urge to keep pushing forward. However, the culture of overworking can have detrimental effects on both your health and your work. In this article, we'll explore the importance of resting and not overworking as a programmer and why it's essential for your well-being and productivity.The Toll of Overworking Burnout and Mental Health: Overworking often leads to burnout, a state of emotional, physical, and mental exhaustion. Burnout can manifest as chronic stress, anxiety, depression, and even physical health issues. It can hinder your ability to concentrate, be creative, and solve complex problems, all of which are crucial skills for programmers. Diminished Productivity: Paradoxically, overworking can result in diminished productivity. The law of diminishing returns applies to work as well; as you exceed a reasonable workload, your efficiency and quality of output decline. Bugs, errors, and inefficient code become more likely. Reduced Creativity: Creativity is a cornerstone of programming. It's the ability to think outside the box, find elegant solutions to problems, and innovate. Overworking narrows your focus and stifles creativity, leading to suboptimal solutions and a lack of fresh ideas.",
    authorName: 'Tafadzwa',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover: rest,
  },
  {
    id: 6,
    title: 'Is AI replacing Companionship?',
    category: 'development',
    subCategory: ['tech', 'programming', 'career'],
    description:
      "Artificial Intelligence (AI) has made incredible strides in recent years, transforming various aspects of our lives. From personal assistants like Siri to chatbots providing customer support, AI has proven its capability to simulate human interaction. However, as AI continues to evolve, it raises an intriguing question: can AI truly replace companionship and the profound emotional connection humans share? In this article, we explore the role of AI in companionship, its potential benefits, and the ethical considerations surrounding the integration of AI into our emotional lives. The Evolution of AI Companions Chatbots and Virtual Assistants: AI-driven chatbots and virtual assistants are becoming increasingly sophisticated in mimicking human conversation. They can provide companionship by engaging in dialogues, answering questions, and offering suggestions, albeit within the confines of programmed responses. Social Robots: Social robots, such as Pepper and Paro, are designed to provide companionship to individuals, particularly the elderly and those with limited social interaction. These robots offer conversation, emotional support, and even entertainment. AI in Entertainment and Gaming: AI-driven characters in video games and virtual worlds can provide a sense of companionship, making players feel emotionally connected to these virtual beings.",
    authorName: 'Chacha',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 18, 2023',
    cover: robot,
  },
  {
    id: 7,
    title: 'A Tech Life is a `colorful` one',
    category: 'Tech',
    subCategory: ['skill', 'design', 'ui/ux'],
    description:
      "In the ever-evolving world of technology, a vibrant and colorful tech life is a reflection of the diversity and innovation that permeates this exciting field. Far from the monochromatic stereotypes often associated with tech, this article celebrates the myriad of colors that paint the canvas of a tech enthusiast's journey. From the rainbow of coding languages to the vibrant community spirit, let's dive into what it means to lead a colorful tech life. 1. Diverse Coding Languages: Tech enthusiasts have the privilege of exploring a vast spectrum of coding languages. Each language comes with its unique syntax, quirks, and applications. Whether it's the sleek elegance of Python, the dynamic nature of JavaScript, or the mathematical precision of C++, each language adds its own color to the programmer's palette. Embracing diversity in coding languages not only expands your skill set but also adds vibrancy to your tech life. 2. The Rainbow of Projects: Techies are not limited to a single hue; they can work on projects spanning various industries and domains. From developing mobile apps that brighten people's days to creating solutions that tackle global challenges like climate change or healthcare, a colorful tech life means engaging with projects that bring positive change and impact. 3. The Joy of Problem Solving Tech enthusiasts are like puzzle solvers, and the tech world offers an endless array of colorful problems to tackle. Each challenge is like a unique piece of a jigsaw puzzle, and the satisfaction of cracking the code or finding the optimal solution is akin to completing a beautiful picture 4. The Art of Creativity: Tech is an art form as much as it is a science. Creativity shines through in user interface design, game development, graphic design, and countless other tech-related fields. The fusion of art and technology results in visually stunning and innovative creations that make our world more colorful.",
    authorName: 'Tafazdwa',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 23, 2023',
    cover: techColour,
  }
];

const Home = () => {
  const [blogs, setBlogs] = useState(postData); 
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = postData; 
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(postData); // Reset to all blog posts
    setSearchKey('');
  };

  return (
    <div>
      <Hero />
      <div>
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
      </div>
      <div className="posts">
        <div className="blogList-wrap">
          {blogs.map((post) => (
            <div className="post" key={post.id}>
              <div className="blogItem-wrap">
                <img className="blogItem-cover" src={post.cover} alt="cover" />
                <Chip label={post.category} />
                <h3>{post.title}</h3>
                <p className="blogItem-desc">{post.description}</p>
                <footer className="blog-footer">
                  <div className="blogItem-author">
                    <div>
                      <h6>{post.authorName}</h6>
                      <p>{post.createdAt}</p>
                    </div>
                  </div>
                 <Link className='blogItem-link' to={`/post/${post.id}`}>
                      ➝
                  </Link> 
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
