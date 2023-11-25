const { PrismaClient } = require("@prisma/client");
const axios = require("axios");

const prisma = new PrismaClient();

// Function to fetch a random Unsplash image URL
const getRandomImageUrl = async () => {
  try {
    const response = await axios.get(
      "https://source.unsplash.com/random/400x300"
    );
    return response.request.res.responseUrl;
  } catch (error) {
    console.error("Error fetching Unsplash image:");
    return "https://placekitten.com/400/300"; // Fallback to a placeholder image
  }
};

// Function to generate real-world-like data for testing
const generateRealWorldData = async () => {
  const titles = [
    "Exploring the Great Outdoors",
    "Capturing Moments in Time",
    "Culinary Adventures Around the World",
    "Urban Landscapes: City Perspectives",
    "Embracing Minimalism in Design",
    "The Art of Storytelling in Photography",
    "Creative Spaces: Work and Play",
    "Inspirational Travel Destinations",
    "Discovering Hidden Gems in Nature",
    "The Intersection of Art and Technology",
  ];

  const getRandomTitle = () =>
    titles[Math.floor(Math.random() * titles.length)];

  return {
    title: getRandomTitle(),
    img: await getRandomImageUrl(),
    description:
      "Nestled within the heart of lush greenery and surrounded by a tapestry of vibrant flora, the Tranquil Oasis stands as a testament to natures enchanting beauty. This idyllic destination beckons seekers of serenity, inviting them on a journey that transcends the ordinary. As you embark on this expedition into the heart of tranquility, be prepared to immerse yourself in a haven of peace and discover the hidden gems that make the Tranquil Oasis a truly exceptional retreat. Unveiling Natures SymphonyThe first step into the Tranquil Oasis reveals a symphony of natural sounds, as the gentle rustling of leaves and the melodious chirping of birds create an orchestra of tranquility. The air, crisp and scented with the fragrance of blooming flowers, envelops visitors in a sensory embrace. Meandering pathways lead through vibrant gardens, each corner unveiling a new palette of colors and a new chapter in the story of natures grandeur.",
  };
};

// Function to insert data into the database
const insertData = async () => {
  try {
    for (let i = 0; i < 10; i++) {
      const postData = await generateRealWorldData();
      await prisma.post.create({
        data: postData,
      });
      console.log(`Inserted post with title: ${postData.title}`);
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    await prisma.$disconnect();
  }
};

// Run the script
insertData();
