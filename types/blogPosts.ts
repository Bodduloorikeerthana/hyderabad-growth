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
      id: "hyderabad-real-estate-growth",
      title: "2025 Hyderabad Property Predictions: Boom or Bust? Insights from a Real Estate Expert",
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