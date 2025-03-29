export interface BlogPost {
    id: string;
    title: string;
    summary: string;
    content: string;
    imageUrl: string;
    date: string;
    stats?: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: "8-views-turns-7",
      title: "8 Views turns 7!",
      summary: "Time seems to fly by as we celebrate our 7th anniversary at 8 Views.",
      content: "Full content goes here...",
      imageUrl: "/images/blog/team-photo.jpg",
      date: "Jul 22, 2022",
      stats: "7 years | 100+ team members | 200+ brands | 2 cities"
    },
    {
      id: "hyderabad-real-estate-growth",
      title: "Hyderabad Real Estate Growth 2024",
      summary: "An analysis of the booming real estate market in Hyderabad's key areas.",
      content: "Full content goes here...",
      imageUrl: "/images/blog/hyderabad-skyline.jpg",
      date: "Mar 15, 2024"
    },
    {
      id: "investment-opportunities",
      title: "Top Investment Opportunities in Hyderabad",
      summary: "Discover the best areas for real estate investment in Hyderabad this year.",
      content: "Full content goes here...",
      imageUrl: "/images/blog/investment.jpg",
      date: "Feb 28, 2024"
    },
    {
      id: "commercial-vs-residential",
      title: "Commercial vs Residential: Where to Invest",
      summary: "A comprehensive comparison of commercial and residential investment options.",
      content: "Full content goes here...",
      imageUrl: "/images/blog/commercial-building.jpg",
      date: "Jan 10, 2024"
    }
  ];