import Button from "@/components/tokens/button";

export default function Home() {
    return (
    <main>
      <div className={"p-6"}>
        <Button typeName={"button"} className={"btn btn-primary mr-3"} name={"Primary"}/>
        <Button typeName={"button"} className={"btn btn-success mr-3"} name={"Success"}/>
        <Button typeName={"button"} className={"btn btn-info mr-3"} name={"Info"}/>
        <Button typeName={"button"} className={"btn btn-danger mr-3"} name={"Danger"}/>
        <Button typeName={"button"} className={"btn btn-warning mr-3"} name={"Warning"}/>
      </div>
    </main>
  );
}
