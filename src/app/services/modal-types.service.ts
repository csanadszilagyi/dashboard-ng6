import { Injectable } from '@angular/core';
import { ModalInfo } from '../ModalInfo';
import { findIndex as _findIndex } from 'lodash';

@Injectable({
    providedIn: 'root',
})
export class ModalTypesService {


    private _modals: ModalInfo[] = [
        new ModalInfo('remove', 'Yes', 'Cancel', 'Are you sure?'),
        new ModalInfo('info', 'Ok')
    ];

    constructor() { }

    getModal(id: string): ModalInfo {
        const idx = _findIndex(this._modals, (m: ModalInfo) => id === m.id);
        if (idx >= 0) {
            return this._modals[idx];
        }

        return null;
    }

    getModals(): ModalInfo[] {
        return this._modals;
    }
}
