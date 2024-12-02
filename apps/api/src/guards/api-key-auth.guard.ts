import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

const API_KEY = process.env.API_KEY;

@Injectable()
export class ApiKeyAuthGuard implements CanActivate {

    public canActivate(context: ExecutionContext): boolean {
        const request = context
            .switchToHttp()
            .getRequest();

        if (request.headers.authorization !== API_KEY) {
            throw new UnauthorizedException();
        }

        return true;
    }
}
