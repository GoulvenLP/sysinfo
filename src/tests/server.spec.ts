import http from 'http';
import { execSync } from 'child_process';



beforeAll((done) => {
    execSync('npm run serverTest');
    setTimeout(() => {
        done();
    }, 2000);
});

function shutdown(){
    execSync('npm run stopServerTest')
}

describe('typescript Testing the server', () => {
    it('request GET /api/v1/sysinfo: should return some non-empty content', async () => {
        const req = http.get('http://localhost:5100/api/v1/sysinfo', (res) => {
            let responseData = '';

            // collect the response
            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                expect(responseData).not.toBeNull();
                expect(res.statusCode).toBe(200);
            });

        });
        req.end();
        shutdown();

    });

    it('Invalid request should return a 404 error', async () => {
        const req = http.get('http://localhost:5100/api/v1/sysinfo', (res) => {
            let responseData = '';
            // collect the response
            res.on('data', (chunk) => {
                responseData += chunk;
            });
            res.on('end', () => {
                expect(res.statusCode).toBe(404);
            });
        });
        req.end();
        shutdown();

    });



});

