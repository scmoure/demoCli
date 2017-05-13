import { ProfileDto } from './profile.model';
export class UserDto {
    id: number;
    code: string;
    nom: string;
    profile: ProfileDto;
}