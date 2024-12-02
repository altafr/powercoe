import {
  Shield,
  FileCheck,
  Users,
  Lock,
  AlertTriangle,
  BookOpen,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const governanceAreas = [
  {
    title: 'Security & Compliance',
    icon: Shield,
    description: 'Comprehensive security policies and compliance frameworks.',
    details: [
      'Data Loss Prevention (DLP) policies',
      'Environment security configurations',
      'Compliance monitoring and reporting',
      'Access control and authentication',
    ],
  },
  {
    title: 'Environment Strategy',
    icon: FileCheck,
    description: 'Structured approach to environment management.',
    details: [
      'Environment provisioning guidelines',
      'Development lifecycle management',
      'Resource allocation policies',
      'Backup and disaster recovery',
    ],
  },
  {
    title: 'User Management',
    icon: Users,
    description: 'Clear roles and responsibilities framework.',
    details: [
      'Role-based access control',
      'License management',
      'User onboarding and offboarding',
      'Training requirements',
    ],
  },
];

const faqItems = [
  {
    question: 'What is the Power Platform CoE Governance Framework?',
    answer: 'Our governance framework is a comprehensive set of policies, procedures, and best practices designed to ensure secure and efficient use of Power Platform across the organization. It covers security, compliance, user management, and development standards.',
  },
  {
    question: 'How do we handle environment requests?',
    answer: 'Environment requests are managed through our standardized process that includes business justification, security review, and approval workflows. This ensures proper resource allocation and maintains security standards.',
  },
  {
    question: 'What are our data governance policies?',
    answer: 'Our data governance policies include strict DLP policies, data classification guidelines, and compliance requirements. We regularly audit and monitor data usage to ensure compliance with organizational and regulatory standards.',
  },
];

export function GovernancePage() {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Governance Framework</h1>
          <p className="text-xl text-gray-600">
            Our comprehensive governance framework ensures secure, compliant, and
            efficient use of Power Platform across the organization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {governanceAreas.map((area) => (
            <Card key={area.title} className="p-6">
              <area.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <ul className="space-y-2">
                {area.details.map((detail) => (
                  <li key={detail} className="flex items-center text-sm text-gray-600">
                    <AlertTriangle className="h-4 w-4 mr-2 text-primary" />
                    {detail}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}