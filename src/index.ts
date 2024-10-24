import {getSystemInformation} from './methods/methods';

import http from 'http';

const server = http.createServer(async (req, res) => {
    if(req.url === '/api/v1/sysinfo'){
        const sysInfo = await getSystemInformation();
        console.log('GET request on [/api/v1/sysinfo]');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const jsonSystemInformation = JSON.stringify(sysInfo);
        res.end(jsonSystemInformation);

    } else {
        res.statusCode = 404;
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify({ "error": "Wrong path"}));
    }
    
});


const PORT = 5100;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

const shutdown = () => {
    server.close(() => {
        process.exit(0);
    });
    setTimeout(() => console.error(''))
    return true;
}
