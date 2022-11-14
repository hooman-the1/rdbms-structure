export default interface Reader{
    read(): Promise<any[]>;
}