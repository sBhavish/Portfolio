import { createClient } from 'redis';

export const client = await createClient({
    url: process.env.REDIS_CONNECTION_STRING
    
    })
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

export async function disconnectRedisClient(){
    await client.disconnect();
}

export const redisClient =  async (key:string) => {
    const value = await client.get(key)
    return value
}
export const saveCache = async (key:string, value: object) =>{
    await client.set(key, JSON.stringify(value));
}
export default client;