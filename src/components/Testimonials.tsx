import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Digital Transformation Lead',
    content:
      'The Power Platform CoE team has been instrumental in helping us scale our automation initiatives while maintaining security and governance.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Michael Chen',
    role: 'Business Solutions Architect',
    content:
      'Their guidance on best practices and pattern reviews has significantly improved the quality of our Power Platform solutions.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Citizen Developer',
    content:
      'The support and training provided by the CoE team helped me create secure and efficient solutions for my department.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
  },
];

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Partners Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover"
                  />
                </Avatar>
                <div className="ml-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}