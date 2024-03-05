import {MongoClient, ServerApiVersion, UpdateResult} from 'mongodb';

export class DBAccess {
    private static client: MongoClient;

    public static async init(connectionString: string): Promise<void> {
        DBAccess.client = new MongoClient(connectionString, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        await DBAccess.client.connect();
    }

    static async selectOne(collection: string, query: any): Promise<any> {
        return await DBAccess.client.db('WorkerForce').collection(collection).findOne(query);
    }

    static async selectMany(collection: string, query: any): Promise<any[]> {
        return await DBAccess.client.db('WorkerForce').collection(collection).find(query).toArray();
    }

    static async upsert(collection: string, query: any, update: any): Promise<UpdateResult> {
        return await DBAccess.client.db('WorkerForce').collection(collection).updateOne(query, update
            , {upsert: true});
    }

    static async insertOne(collection: string, query: any): Promise<any> {
        return await DBAccess.client.db('WorkerForce').collection(collection).insertOne(query);
    }

    static async deleteOne(collection: string, query: any): Promise<any> {
        return await DBAccess.client.db('WorkerForce').collection(collection).deleteOne(query);
    }

}