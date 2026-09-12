export default function TestimonialCard({ title, name, comment, image }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 card-hover">
      {/* Testimonial 1 */}
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img
            src={image}
            alt="Client"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-6">{comment}</p>
    </div>
  );
}
