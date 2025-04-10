import { Button, Card, Container, Input } from "@/components";

function App() {
  return (
    <div className="flex min-h-screen w-full bg-[url(/img/bg-spikes.webp)]">
      <Container className="container flex items-center justify-center py-2">
        <Card className="flex max-w-[620px] grow flex-col gap-2 px-4 py-6 md:px-6 md:py-8">
          <h3 className="text-2xl font-bold">Sign in</h3>
          <Input label="Name" placeholder="Name" />
          <Input label="Name" placeholder="Name" error="Some error message" />
          <Button className="self-end">Submit</Button>
        </Card>
      </Container>
    </div>
  );
}

export default App;
