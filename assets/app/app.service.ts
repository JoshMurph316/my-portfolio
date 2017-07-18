
export class AppService {
    contactView: string = 'landing'

    onContactViewChange(status: string) {
        this.contactView = status;
        console.log('this is the app service '+ status);
    }

    onSwitchContact() {

    }

    getContactView() {
        return this.contactView;
    }

}