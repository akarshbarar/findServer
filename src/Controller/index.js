/**
 * Function to return list of all the servers
 * @returns {Promise}
 */
const findServer = () =>
    new Promise((resolve, reject) => {
        const serverList = [
            {
                url: 'http://doesNotExist.kratikal.com',
                priority: 1,
            },
            {
                url: 'http://kratikal.com',
                priority: 7,
            },
            {
                url: 'http://offline.kratikal.com',
                priority: 2,
            },
            {
                url: 'http://google.com',
                priority: 4,
            },
        ];
    // Sorting depending upon there priority
    serverList.sort(function(a, b){
        return a.priority - b.priority;
    });
    //If no server present then reject
    if (serverList.length === 0 ) reject();
    //Otherwise return the lowest priority server
    resolve(serverList[0]);
});

module.exports = findServer;
