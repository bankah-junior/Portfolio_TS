import { LucideIcon } from 'lucide-react';

interface TechCardProps {
  Icon: LucideIcon;
  title: string;
  items: { label: string; techs: string[] }[];
  color: string;
}

export default function TechCard({ Icon, title, items, color }: TechCardProps) {
  return (
    <div className="p-8 transition-all duration-500 group bg-gray-900/50 backdrop-blur-sm rounded-xl hover:bg-gray-900/80 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="flex items-center mb-6 space-x-5">
        <div className={`w-16 h-16 rounded-xl bg-${color}-500/10 flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-6`}>
          <Icon className={`w-8 h-8 text-${color}-400`} />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={item.label}
            className="transition-all duration-300 transform hover:translate-x-2"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <h4 className="mb-2 font-semibold text-gray-300">{item.label}</h4>
            <div className="flex flex-wrap gap-2">
              {item.techs.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 text-sm bg-${color}-500/10 text-${color}-400 rounded-full`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}