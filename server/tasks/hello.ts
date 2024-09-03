export default defineTask({
  meta: {
    name: "hello",
    description: "Hello world task",
  },
  run({ payload, context }) {
    console.log("Hello world!");
    return { result: "Hello world!" };
  },
});
