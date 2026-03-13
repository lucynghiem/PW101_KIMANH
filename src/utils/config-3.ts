import * as fs from 'node:fs';
import * as path from 'node:path';

export function getConfig(configFile: string, caseId: string) {
    const env = process.env.ENV || 'dev'; // fallback
    // Read env config file
    let raw = fs.readFileSync(path.resolve(`src/data/${env}.json`), 'utf-8');
    const envJsonData = JSON.parse(raw)[caseId];

    // Read case config file
    raw = fs.readFileSync(path.resolve(`src/data/${configFile}-${env}.json`), 'utf-8');
    const testDataJson = JSON.parse(raw)[caseId];


    return {
        ...envJsonData,
        ...testDataJson,
    };
}