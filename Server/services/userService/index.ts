import {DBAccess} from "../../utils/DbAccess/dbAccess";
import {AbstractServer} from "../../utils/AbstractServer/abstractServer";
import {UserServiceApi} from "./api/userServiceApi";


async function run():Promise<void> {
    const app = AbstractServer.createServer();
    AbstractServer.serverListen(app, 3001);
    await DBAccess.init("mongodb+srv://chaimmist:chaim123@workerforce.nuzyqqc.mongodb.net/?retryWrites=true&w=majority&appName=workerForce");
    await UserServiceApi.init(app);
}

run();