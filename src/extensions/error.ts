import Boom from '@hapi/boom';
import { Request, ResponseToolkit } from '@hapi/hapi';
import get from 'lodash/get';
import { SequelizeValidationErrors } from '../constants/sequelizeValidationErrors';

export default function(request: Request, h: ResponseToolkit): symbol {
    if (request.response.name === SequelizeValidationErrors.CONFLICT) {
        h.response().takeover();
        const error = get(request, 'response.parent.detail');
        throw Boom.conflict(error);
    }

    return h.continue;
}
