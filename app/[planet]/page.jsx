import planets from "@/public/data.json";

//components
import Details from "@/components/Details";

const Page = ({ params }) => {
  const data = planets["Planets"];
  const planet = data[params.planet];
  //console.log(planet);

  return (
    <div>
      <Details data={planet}></Details>
    </div>
  );
};

export default Page;
