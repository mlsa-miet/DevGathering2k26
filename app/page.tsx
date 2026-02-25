import EventTimeline from '../components/eventplanner';
import LeadOrganizers from '../components/leadorganizer';

export default function Home() {
  return (
    <main className="bg-gray-50"> 
      <EventTimeline />
      <LeadOrganizers /> 
    </main>
  );
}