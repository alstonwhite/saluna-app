import * as contentful from 'contentful'

const fetchContentful = async () => {
    var client = contentful.createClient({
        space: 'z67ub1h0a7t4',
        accessToken: '-PTqI4a37RirY-az5ZzJe5nosyh_Z4w5feNnGe1J8U8' });

    const entries = await client.getEntries(
        // {
        //     content_type: "menuItem"
        // }
    );
    return entries.items;
}

export default fetchContentful;