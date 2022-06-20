import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Center, TextInput, Stack, Button, List } from "@mantine/core";

const Home: NextPage = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState({});

  const fetchTasks = async () => {
    const data = await fetch(`http://localhost:5000/api/v1/fults/getTasks`);
    const res = await data.json();
    setTasks(res);
  };

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
        <Button size="sm" onClick={fetchTasks}>
          Fetch existing tasks
        </Button>

        <List spacing="xs" size="sm" center>
          {
            Object.keys(tasks).map((task) => (
               <List.Item >{task.map((t) => {
                  return t.content
               })}</List.Item>
            ))
          }
        </List>
      </Stack>
    </Center>
  );
};

export default Home;
