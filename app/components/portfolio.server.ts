import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.POCKETBASE_BASE_URL);
export const authData = await pb.admins.authWithPassword(process.env.POCKETBASE_EMAIL as string, process.env.POCKETBASE_PASS as string );
export default pb;
