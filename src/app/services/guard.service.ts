import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import { AuthGuardParentService } from './auth-guard-parent.service';

@Injectable()
export class GuardService extends AuthGuardParentService {

    constructor (protected userService: UserService, protected router: Router) {
        super(userService, router);
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.combinedAccess(super.canActivate(route, state));
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.combinedAccess(super.canActivateChild(route, state));
    }

    combinedAccess(precondition: Observable<boolean>): Observable<boolean> {
        return precondition.merge(this.customAccess()).every(access => access);
    }

    // Méthode à customizer
    customAccess(): Observable<boolean> {
        return this.userService.getUser().map(user => {
            if (!user.profile) {
                this.router.navigate(['error']);
            }
            else return true;
        })
    }
}