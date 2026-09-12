export default function ServicesCard({ title, description, icon, button }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 card-hover">
      {icon}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-end">
        <a
          href={button.href}
          className={`${button.color} font-medium inline-flex items-center`}>
          {button.text} <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  );
}
