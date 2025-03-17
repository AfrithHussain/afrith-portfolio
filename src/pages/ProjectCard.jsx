import Blog from "../assets/Blog.png";
import Movie from "../assets/Movie.png";
import Product from "../assets/Product.png";
import Shop from "../assets/Shop.png";

function ProjectCard() {
  const projects = [
    {
      title: "E-commerce Website",
      image: Shop,
      link: "https://voguevibe-afrithhussains-projects.vercel.app/",
    },
    {
      title: "Blog Website",
      image: Blog,
      link: "https://afrith-blog-website-fo3o45k6a-afrithhussains-projects.vercel.app/",
    },
    {
      title: "Movie App",
      image: Movie,
      link: "https://movie-app-six-virid-69.vercel.app/",
    },
    {
      title: "Medical Product Website",
      image: Product,
      link: "https://elbrit-assignment-afrith.netlify.app/",
    },
  ];

  return (
    <div id="project" className="py-20  ">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <p className="text-lg font-light mt-3 text-gray-500">My latest works</p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="w-[280px] h-[220px] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-[250px] object-contain" />
            </div>
            <h2 className="text-xl text-neutral-800 text-center py-3">{project.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
