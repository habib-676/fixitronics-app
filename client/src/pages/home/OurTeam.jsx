import { use } from "react";
import Person from "./Components/Person";

const OurTeam = ({ teamPromise }) => {
  const teamData = use(teamPromise);
  return (
    <div className="text-primary-content">
      <div className="mb-28">
        <h2 className="text-center text-3xl  font-bold">Meet Our Team</h2>
        <p className="text-center  text-secondary-content mt-4">
          Real people behind the scenes
        </p>
        <div className="card-body card shadow-2xl bg-base-200 border border-primary mt-10 min-h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
            {teamData.map((person) => (
              <Person key={person.id} person={person}></Person>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
