import SectionLayout from "../components/SectionLayout";

export default function ClientTestimonials() {
  const testimonials = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Sarah Johnson",
      title: "CEO, TechStart",
      comment:
        "Alex transformed our outdated website into a modern, high-performing platform that has significantly increased our conversion rates. His attention to detail and creative solutions were impressive.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Michael Chen",
      title: "Founder, GreenEats",
      comment:
        "Working with Alex on our mobile app was a game-changer for our business. He understood our vision perfectly and delivered beyond our expectations. The app has been downloaded over 50,000 times in the first month!",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Emily Rodriguez",
      title: "Marketing Director, LuxeLiving",
      comment:
        "Alex's design skills are exceptional. He created a stunning visual identity for our brand that perfectly captures our luxury aesthetic. Our customers love the new look and our engagement metrics have skyrocketed.",
    },
  ];
  return (
    <SectionLayout
      title="Client Testimonials"
      description="What people say about working with me.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Client"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">Sarah Johnson</h4>
              <p className="text-gray-500 text-sm">CEO, TechStart</p>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            "Alex transformed our outdated website into a modern,
            high-performing platform that has significantly increased our
            conversion rates. His attention to detail and creative solutions
            were impressive."
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
