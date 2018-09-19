export class ModalInfo {
    constructor(public id: string,
                public acceptText: string = 'Ok',
                public declineText: string = '',
                public message: string = '',
                public onAccept: Function = null) {}
}
