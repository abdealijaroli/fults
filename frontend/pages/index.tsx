import type { NextPage } from "next";
import { useEffect, useState } from "react";
import {
  Center,
  TextInput,
  Stack,
  Button,
  List,
  Notification,
  Group,
} from "@mantine/core";
import { Check } from "tabler-icons-react";
import { showNotification } from "@mantine/notifications";

const Home: NextPage = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await fetch(`http://localhost:5000/api/v1/fults/getTasks`);
        const res = await data.json();
        setTasks(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async () => {
    try {
      const data = await fetch(
        `http://localhost:5000/api/v1/fults/createTask`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: value, completed: false }),
        }
      );
      const res = await data.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //   function successNotification() {
  //     return (
  //       <>
  //         <h1></h1>
  //       </>
  //     );
  //   }

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
        <Button size="sm" onClick={addTask}>
          Add
        </Button>
        <h3>Existing tasks:</h3> 
        <List spacing="xs" size="sm" center>
          {tasks.map((task) => (
            <List.Item key={task["_id"]}>{task["content"]}</List.Item>
          ))}
        </List>
      </Stack>
    </Center>
  );
};

export default Home;
