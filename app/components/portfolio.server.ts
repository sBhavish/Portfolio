import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.POCKETBASE_BASE_URL);
export default pb;

export const auth = async()=>{
    let authData = await pb.admins.authWithPassword(process.env.POCKETBASE_EMAIL as string, process.env.POCKETBASE_PASS as string);
    return authData;
}
