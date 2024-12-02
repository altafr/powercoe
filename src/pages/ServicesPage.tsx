import { ArrowRight, Shield, Users, Workflow, Settings, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const detailedServices = [
  {
    title: 'Solution Architecture Review',
    description: 'Expert review of your Power Platform solution architecture to ensure scalability, performance, and best practices.',
    icon: Shield,
    features: ['Architecture assessment', 'Performance optimization', 'Security review', 'Best practices alignment'],
  },
  {
    title: 'Development Support',
    description: 'Hands-on support for your development teams building Power Platform solutions.',
    icon: Code,
    features: ['Technical guidance', 'Code review', 'Problem resolution', 'Pattern implementation'],
  },
  {
    title: 'Environment Management',
    description: 'Comprehensive management of your Power Platform environments across the organization.',
    icon: Settings,
    features: ['Environment provisioning', 'Access control', 'Monitoring', 'Backup and recovery'],
  },
  {
    title: 'Data Integration',
    description: 'Expert assistance with data integration patterns and implementations.',
    icon: Database,
    features: ['Dataverse optimization', 'Integration patterns', 'Data modeling', 'Performance tuning'],
  },
  {
    title: 'Training & Enablement',
    description: 'Comprehensive training programs for developers and business users.',
    icon: Users,
    features: ['Custom workshops', 'Best practices training', 'Certification preparation', 'Hands-on labs'],
  },
  {
    title: 'Process Automation',
    description: 'Support for implementing efficient process automation solutions.',
    icon: Workflow,
    features: ['Workflow design', 'Power Automate patterns', 'Process optimization', 'Integration design'],
  },
];

export function ServicesPage() {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive Power Platform services to support your organization's digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedServices.map((service) => (
            <Card key={service.title} className="p-6">
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-6">Learn More</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}