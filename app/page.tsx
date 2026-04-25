import Hero from '@/components/sections/Hero';
import Trust from '@/components/sections/Trust';
import Services from '@/components/sections/Services';
import Pillars from '@/components/sections/Pillars';
import Journey from '@/components/sections/Journey';
import Locations from '@/components/sections/Locations';
import Booking from '@/components/sections/Booking';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Trust />
      <Services />
      <Pillars />
      <Journey />
      <Locations />
      <Booking />
    </main>
  );
}
