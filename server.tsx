
import { Application } from './dep/index.ts';
import router from "./routing.tsx";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: 3000 });

console.log("React SSR App listening on port 3000");
