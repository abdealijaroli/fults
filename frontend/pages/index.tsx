import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Center,
  TextInput,
  Stack,
  Button,
  List,
  ThemeIcon,
  Checkbox,
} from "@mantine/core";
import { CircleCheck, CircleDashed } from "tabler-icons-react";

const Home: NextPage = () => {
  const [value, setValue] = useState<string>("");

  return (
    <Center>
      <Stack>
        <h1>Track your tasks and meet your deadlines.</h1>
        <h2>Todo:</h2>
        <TextInput
          placeholder="What do you want to accomplish today?"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <Button size="sm">Add</Button>

        <List spacing="xs" size="sm" center>
          <h4>Clone or download repository from GitHub</h4>
          <h4>Install dependencies with yarn</h4>
          <h4>
            To start development server run npm start command
          </h4>
          <h4>Download
            Run tests to make sure your changes do not break the build
          </h4>
          <h4>Submit a pull request once you are done</h4>
        </List>
      </Stack>
    </Center>
  );
};

export default Home;
