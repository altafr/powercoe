import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
    </main>
  );
}