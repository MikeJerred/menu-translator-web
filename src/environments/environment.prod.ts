import { Injectable } from '@angular/core';
import { Environment } from '@menu-translator/shared/environments/environment';

@Injectable()
export class WebEnvironment extends Environment {
    production = true;
    googleCloudVisionAPIKey = '';
}

export const production = true;
