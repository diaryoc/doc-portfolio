import Button from "@/components/tokens/button";
import InputForm from "@/components/component/inputForm";
import ListComponent from "@/components/component/listComponent";
import HeroSection from "@/components/feature/heroSection";
import ProfileSection from "@/components/feature/profileSection";
import ProjectSection from "@/components/feature/projectSection";
import ClientSection from "@/components/feature/clientSection";

export default function Home() {
  const dataItem = [
    {
      id:1,
      name:"item 1",
    },
    {
      id:2,
      name:"item 2",
    },
    {
      id: 3,
      name: "item 3",
    },
    {
      id:4,
      name:"item 4",
    },
    {
      id:5,
      name:"item 5",
    },
  ]
  return (
    <main>
      <HeroSection/>
      <ProfileSection/>
      <ProjectSection/>
      <ClientSection/>
      <div className={"p-6"}>
        <Button typeName={"button"} className={"btn btn-primary mr-3"} name={"Primary"}/>
        <Button typeName={"button"} className={"btn btn-success mr-3"} name={"Success"}/>
        <Button typeName={"button"} className={"btn btn-info mr-3"} name={"Info"}/>
        <Button typeName={"button"} className={"btn btn-danger mr-3"} name={"Danger"}/>
        <Button typeName={"button"} className={"btn btn-warning mr-3"} name={"Warning"}/>
        <InputForm labelName={"Email"} type={"text"} placeholder={"example@example.com"}/>

        <ListComponent list={dataItem}/>
      </div>
    </main>
  );
}
