import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'isomorphic-fetch';
import yaml from 'js-yaml';

@inject(HttpClient)
export class IconsService {

    constructor(http) {
        http.configure(config => config
            .useStandardConfiguration()
            .withBaseUrl('https://cdn.rawgit.com/FortAwesome/Font-Awesome/master/src/'));
        
        this.http = http;
    }
    
    load() {
        return this.http.fetch('icons.yml')
            .then(response => response.text())
            .then(text => yaml.load(text).icons);
    }
}