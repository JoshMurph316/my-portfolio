
export class ViewChangeService {
    
    newView: string;

    changeView(changedView: string) {
        this.newView = changedView;
    }
}