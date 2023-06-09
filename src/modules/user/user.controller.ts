import {Crud, CrudController} from "@dataui/crud";
import {Controller, Post} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {UserEntity} from "./user.entity";
import {UserService} from "./user.service";
import {UserLoginDto} from "../auth/user-login.dto";

@Crud({
    model: {
        type: UserEntity,
    },
    params: {
        id: {
            field: 'id',
            type: 'uuid',
            primary: true,
        }
    },
    routes: {
        only: ['getOneBase'],
    }
})
@Controller('api/user')
@ApiTags('user')
export class UserController implements CrudController<UserEntity>{
    constructor(public service: UserService) {}

    get base(): CrudController<UserEntity> {
        return this;
    }
}