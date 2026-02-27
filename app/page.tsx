import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="header">
        <Image src="/mlsa.png" alt="MLSA Logo" width={100} height={60} className="logo" />
      </header>

      <div className="container">
        <Image
          src="/megaphone.png"
          alt="Megaphone"
          width={180}
          height={180}
          className="megaphone"
        />

        <h1>What is DevGathering?</h1>

        <div className="description">
          A college hackathon where ideas turn into real solutions through creativity, teamwork, and innovation.
        </div>

        <div className="cards">

          <div className="card card1">
            <div>
              <h3>Community Focused</h3>
              <p>
                Meet peers from across the country and build lasting professional connections.
              </p>
            </div>
            <Image src="/community.png" alt="Community" width={260} height={260} className="community-img" />
          </div>

          <div className="card card2">
            <h3>Fast-Paced Innovation</h3>
            <p>
              24 hours of intense brainstorming, coding, and prototyping with expert mentors.
            </p>
            <Image src="/bulb.png" alt="Bulb" width={220} height={220} />
          </div>

          <div className="card card3">
            <h3>Impact</h3>
            <p>
              Showcase your talent, earn certificates, win prizes,
              and add valuable experience to your portfolio.
            </p>

            <div className="impact-images">
              <Image src="/laptop.png" alt="Laptop" width={200} height={200} />
              <Image src="/boxes.png" alt="Boxes" width={200} height={200} />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}