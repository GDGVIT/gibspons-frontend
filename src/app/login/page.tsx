"use client";
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import classes from "@/styles/auth.module.css";
import Image from "next/image";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";

export default function AuthenticationImage() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      loginPreference: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 6 ? null : "Password should be at least 6 characters",
    },
  });

  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();
    localStorage.setItem("email", form.values.email);
    console.log(form.values);
    router.push("/home");
  };

  return (
    <div className={classes.wrapper}>
      <div className="hidden md:flex w-full h-full flex-row justify-center items-center">
        <Image src="/icon.svg" alt="Gibspons logo" width="60" height="60" />
        <div className="flex flex-col justify-center text-white text-left p-2">
          <h1 className="text-3xl font-bold leading-[100%]">gibspons</h1>
          <p className="text-sm">sponsorships made easier</p>
        </div>
      </div>
      <Paper className={classes.form} p={30}>
        {/* <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Welcome back to Mantine!
          </Title> */}
        <form
          className="w-full max-w-[400px] self-center"
          onSubmit={(e) => handleLogin(e)}
        >
          <TextInput
            label="Username or Email address"
            placeholder="xyz@gmail.com"
            size="md"
            required
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your Password"
            mt="lg"
            size="md"
            required
            {...form.getInputProps("password")}
          />
          <Checkbox
            label="Keep me logged in"
            mt="xl"
            size="md"
            {...form.getInputProps("loginPreference")}
          />
          <Button fullWidth mt="xl" className="bg-blue-500 hover:bg-blue-400" type="submit" size="md" w="100%">
            Login
          </Button>
        </form>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor<"a">
            href="/signup"
            fw={700}
            // onClick={(event) => event.preventDefault()}
          >
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
