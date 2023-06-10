import httpClient from "@/utils/httpClient.ts";
import {HttpMethod} from "@/utils/httpMethod.ts";
import BaseApi from "@/api";
import {AxiosResponse} from "axios";

export class LogApi implements BaseApi {
    
    static URL_PREFIX: string = "/admin/system/logs";

    static getInstance(): LogApi {
        return new LogApi();
    }

    save(body: object): Promise<AxiosResponse<any, any>> {
        console.log(body)
        return new Promise(() => {
        });
    }

    deleteByIds(ids: number[]): Promise<AxiosResponse<any, any>> {
        return httpClient({
            url: LogApi.URL_PREFIX + `/${ids.join(",")}`,
            method: HttpMethod.DELETE,
        });
    }

    updateById(id: number, body: object): Promise<AxiosResponse<any, any>> {
        return httpClient({
            url: LogApi.URL_PREFIX + +`/${id}`,
            method: HttpMethod.PUT,
            data: body
        });
    }

    getById(id: number): Promise<AxiosResponse<any, any>> {
        return httpClient({
            url: LogApi.URL_PREFIX + `/${id}`,
            method: HttpMethod.GET,
        });
    }

    getListByPageAndQuery(query: object): Promise<AxiosResponse<any, any>> {
        return httpClient({
            url: LogApi.URL_PREFIX,
            method: HttpMethod.GET,
            data: query,
        });
    }
}