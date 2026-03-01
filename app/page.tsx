import EventTimeline from '../components/eventplanner';
import LeadOrganizers from '../components/leadorganizer';
import GetInTouch from '../components/get-in-touch';
import PastEvents from '@/components/PastEvents';
import FAQ from '@/components/FAQ';



export default function Home() {
  return (
    <main className="bg-gray-50"> 
      <EventTimeline />
      <LeadOrganizers /> 
      <PastEvents />
      <FAQ />
      <GetInTouch />
    </main>
  );
}