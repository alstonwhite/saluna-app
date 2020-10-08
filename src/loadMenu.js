import * as contentful from 'contentful'

export const fetchContentful = () => {
    var client = contentful.createClient({
        space: 'z67ub1h0a7t4',
        accessToken: '-PTqI4a37RirY-az5ZzJe5nosyh_Z4w5feNnGe1J8U8' });
    
    const sections = [];
    const items = [];

    client.getEntries().then(entries => {
        entries.items.forEach(entry => {
            if(entry.sys.contentType.sys.id==="menuSection" && entry.fields.active) {
            menuSections.push(entry.fields);
            // sections.push(entry.fields);
            }
            if(entry.sys.contentType.sys.id==="menuItem") {
            menuItems.push(entry.fields);
            }
        })
    })
    return sections, items
}