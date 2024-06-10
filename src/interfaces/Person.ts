export interface IPerson {
    id?: number | null,
    name: string,
    address: string,
    phone: number,
    createdAt: Date | null,
    updateAt: Date | null
}
export class Person implements IPerson {
    public id: null;
    public name: string;
    public address: string;
    public phone: number;
    public createdAt: Date | null;
    public updateAt: Date | null;

    constructor(){
        this.id = null;
        this.name = "";
        this.address = "";
        this.phone = 0;
        this.createdAt = null;
        this.updateAt = null;
    }

}