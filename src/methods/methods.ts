import { ISystemInformation } from './interfaces';
import si from 'systeminformation';


/*--------------------------------- GETTERS------------------------------ */
async function getCPU(): Promise<si.Systeminformation.CpuData> {
    try {
        const cpu = await si.cpu();
        return cpu;
    } catch (error){
        throw new Error('Failed to retrieve CPU info');
    }
}

async function getMem(): Promise<si.Systeminformation.MemData> {
        try {
            const mem = await si.mem();
            return mem;
        } catch (error){
            throw new Error('Failed to retrieve mem info');
        }
}

async function getCurrentLoad(): Promise<si.Systeminformation.CurrentLoadData> {
    try {
        const currentLoad = await si.currentLoad();
        return currentLoad;
    } catch (error) {
        throw new Error('Failed to retrieve the current load');
    }
}

async function getNetworkInterfaces(): Promise<si.Systeminformation.NetworkInterfacesData[]> {
    try {
        const networkInterfaces = await si.networkInterfaces();
        return Array.isArray(networkInterfaces) ? networkInterfaces : [networkInterfaces]
    } catch (error) {
        throw new Error('Failed to retrieve the network interfaces');
    }
}

async function getDiskLayout(): Promise<si.Systeminformation.DiskLayoutData[]> {
    try {
        const diskLayout = await si.diskLayout();
        return diskLayout;
    } catch (error) {
        throw new Error('Failed to retrieve the disk layout');
    }
}

async function getSystemData(): Promise<si.Systeminformation.SystemData> {
    try {
        const systemData = await si.system();
        return systemData;
    } catch (error) {
        throw new Error('failed to retrieve data about the system');
    }
}

async function getOsData(): Promise<si.Systeminformation.OsData> {
    try {
        const osData = await si.osInfo();
        return osData;
    } catch (error) {
        throw new Error('failed to retrieve informations about the OS');
    }
}

async function getProcessData(): Promise<si.Systeminformation.ProcessesData> {
    try {
        const processes = await si.processes();
        return processes;
    } catch (error) {
        throw new Error('Failed to retrieve data about the processes');
    }
}

/* ---------------------------END OF GETTERS-------------------- */

/**
 * Function that gathers and returns 8 fields of the ISystemInformation interface.
 * @returns 
 */
async function getSystemInformation(): Promise<ISystemInformation>{
    // assemble data
    const cpu = await getCPU();
    const system = await getSystemData();
    const mem = await getMem();
    const os = await getOsData();
    const currentLoad = await getCurrentLoad();
    const processes = await getProcessData();
    const diskLayout = await getDiskLayout();
    const networkInterfaces = await getNetworkInterfaces();

    return {
        cpu,
        system,
        mem,
        os,
        currentLoad,
        processes,
        diskLayout,
        networkInterfaces
    };
}
    


// functions
export {
    getSystemInformation,
    getCPU,
    getMem,
    getSystemData,
    getCurrentLoad,
    getDiskLayout,
    getNetworkInterfaces,
    getOsData,
    getProcessData,
}