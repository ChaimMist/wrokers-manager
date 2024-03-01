import {DBAccess} from "./services/DbAccess/dbAccess";
import {AppServer} from "./services/appServer/appServer";

async function run(): Promise<void> {
    AppServer.initServer();
    AppServer.initRoutes();
    AppServer.serverListen(3001);
    await DBAccess.init("mongodb+srv://chaimmist:chaim123@workerforce.nuzyqqc.mongodb.net/?retryWrites=true&w=majority&appName=workerForce");
}

run();