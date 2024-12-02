import {
  Shield,
  BookOpen,
  Users,
  Lightbulb,
  Target,
  Workflow,
} from 'lucide-react';

const services = [
  {
    title: 'Governance & Security',
    description:
      'Implementing robust governance policies and security measures to protect your Power Platform investments.',
    icon: Shield,
  },
  {
    title: 'Best Practices',
    description:
      'Establishing and sharing best practices for Power Platform development and deployment.',
    icon: BookOpen,
  },
  {
    title: 'Team Enablement',
    description:
      'Training and supporting teams to build efficient and secure Power Platform solutions.',
    icon: Users,
  },
  {
    title: 'Innovation Support',
    description:
      'Fostering innovation while maintaining security and compliance standards.',
    icon: Lightbulb,
  },
  {
    title: 'Environment Management',
    description:
      'Managing and monitoring Power Platform environments across the enterprise.',
    icon: Target,
  },
  {
    title: 'Pattern Review',
    description:
      'Reviewing and approving new patterns and approaches for Power Platform solutions.',
    icon: Workflow,
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive support and governance for your Power Platform journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}