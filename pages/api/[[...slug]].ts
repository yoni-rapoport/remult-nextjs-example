import { NextApiRequest, NextApiResponse } from 'next'
import { remultExpress } from 'remult/remult-express';
import * as util from 'util';
import { User } from '../../common/User';
import { sampleUserData } from '../../utils/sample-data';

const api = remultExpress({
    initApi: async (remult) => {
        if (await remult.repo(User).count() === 0)
            await remult.repo(User).insert(sampleUserData);
    }
});

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    await util.promisify((api as any))(_req, res);
}

export default handler
