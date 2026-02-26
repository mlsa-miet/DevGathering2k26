import EventTimeline from '../components/eventplanner';
import LeadOrganizers from '../components/leadorganizer';
import GetInTouch from '../components/get-in-touch';



export default function Home() {
  return (
    <main className="bg-gray-50"> 
      <EventTimeline />
      <LeadOrganizers /> 
      <GetInTouch />
    </main>
  );
}