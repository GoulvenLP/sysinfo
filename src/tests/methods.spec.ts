import {getCPU, getMem, getCurrentLoad, getNetworkInterfaces,
     getDiskLayout, getSystemData, getOsData, getProcessData,
      getSystemInformation} from '../methods/methods'

afterEach(() => {
    jest.clearAllMocks();
})

describe('typeScript Unit tests', () => {
    //TESTING getCPU
    it('getCPU: should return a response', async () => {
        expect.assertions(3);
        const res = await (getCPU());
        expect(res).not.toBeNull();
        expect(res).not.toBeUndefined();
        expect(res).not.toContain("failed");
    });


    //TESTING getMem
    it('getMem: should return a response', async () => {
        expect.assertions(3);
        const res = await (getMem());
        expect(res).not.toBeNull();
        expect(res).not.toBeUndefined();
        expect(res).not.toContain("failed");
    });


    //TESTING getCurrentLoad
    it('getCurrentLoad: should return a response', async () => {
        expect.assertions(3);
        const res = await (getCurrentLoad());
        expect(res).not.toBeNull();
        expect(res).not.toBeUndefined();
        expect(res).not.toContain("failed");        
    });


    //TESTING getSystemData
    it('getSystemData: should return a response', async () => {
        expect.assertions(3);
        const res = await (getSystemData());
        expect(res).not.toBeNull();
        expect(res).not.toBeUndefined();
        expect(res).not.toContain("failed");        
    });


    //TESTING getOsData
    it('getOsData: should return a response', async () => {
        expect.assertions(3);
        const res = await (getOsData());
        expect(res).not.toBeNull();
        expect(res).not.toBeUndefined();
        expect(res).not.toContain("failed");        
    });

    
    //TESTING getDiskLayout
    it('getDiskLayout: should return a response', async () => {
        expect.assertions(5);
        const res = await (getDiskLayout());
        expect(res).not.toBeNull();
        expect(res).not.toBeUndefined();
        expect(res).not.toContain("failed");
        expect(Array.isArray(res)).toBe(true);
        expect(res.length).toBeGreaterThan(0);    
    });

    
    //TESTING getProcessData
    it('getProcessData: should return a response', async () => {
        expect.assertions(3);
        const res = await (getProcessData());
        expect(res).not.toBeNull();
        expect(res).not.toBeUndefined();
        expect(res).not.toContain("failed");        
    });
    
    //TESTING getNetworkInterfaces
    it('getNetworkInterfaces: should return a response', async () => {
        expect.assertions(5);
        const res = await (getNetworkInterfaces());
        expect(res).not.toBeNull();
        expect(res).not.toBeUndefined();
        expect(res).not.toContain("failed");
        expect(Array.isArray(res)).toBe(true);
        expect(res.length).toBeGreaterThan(0);
    });
    

    //TESTING getSystemInformation
    it('getSystemInformation: should return a response', async () => {
        expect.assertions(3);
        const res = await (getSystemInformation());
        expect(res).not.toBeNull();
        expect(res).not.toBeUndefined();
        expect(res).not.toContain("failed");        
    });




});

