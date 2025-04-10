import { Button, Card, Container, Input } from "@/components";
import { validation } from "@/contants/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().min(1, validation.required).email(validation.emailFormat),
  password: z
    .string()
    .min(1, validation.required)
    .regex(/[A-Z]/, validation.bigLetterRequired)
    .regex(/[0-9]/, validation.numberRequired)
    .regex(/[^a-zA-Z0-9]/, validation.specialCharacterRequired),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
  });

  return (
    <div className="flex min-h-screen w-full bg-[url(/img/bg-spikes.webp)]">
      <Container className="container flex items-center justify-center py-2">
        <Card className="flex max-w-[620px] grow flex-col gap-6 px-4 py-6 md:px-6 md:py-8">
          <h3 className="text-2xl font-bold">Zaloguj się</h3>
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <Input label="Email" placeholder="Adres email" error={errors.email?.message} {...register("email")} />
            <Input label="Hasło" placeholder="Hasło" error={errors.password?.message} {...register("password")} />
            <Button className="self-end">Zaloguj się</Button>
          </form>
        </Card>
      </Container>
    </div>
  );
}

export default App;
