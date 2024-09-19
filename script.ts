const input = document.getElementById('add-input') as HTMLInputElement;
const button = document.getElementById('add-button') as HTMLButtonElement;

enum Status {
    Available = 'available',
    
}

interface Scooter {
    id?: string,
    model: string,
    batteryLevel: number,

}