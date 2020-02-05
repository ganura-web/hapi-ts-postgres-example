import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';

export default function(request: Request, h: ResponseToolkit): ResponseObject {
    return h.view('app');
}
