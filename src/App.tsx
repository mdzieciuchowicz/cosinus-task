import { Button, Input } from "@/components";

function App() {
  return (
    <div className="flex flex-col items-start gap-2 p-4">
      <Input label="Name" placeholder="Name" />
      <Input label="Name" placeholder="Name" error="Some error message" />
      <Button>Submit</Button>
    </div>
  );
}

export default App;
