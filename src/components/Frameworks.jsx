import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    { name: "trpc", ext: "png" },
    { name: "redis", ext: "png" },
    { name: "docker", ext: "png" },
    { name: "nodejs", ext: "jpg" },
    { name: "typescript", ext: "png" },
    { name: "css3", ext: "svg" },
    { name: "nestjs", ext: "png" },
    { name: "nginx", ext: "png" },
    { name: "git", ext: "svg" },
    { name: "html5", ext: "svg" },
    { name: "javascript", ext: "svg" },
    { name: "aws", ext: "png" },
    { name: "react", ext: "svg" },
    { name: "mongodb", ext: "png" },
    { name: "tailwindcss", ext: "svg" },
    { name: "vitejs", ext: "svg" },
    { name: "nextjs", ext: "png" },
  ];
  
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill.name}.${skill.ext}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill.name}.${skill.ext}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
