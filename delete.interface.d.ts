export default interface Deleter{
    delete(): Promise<boolean>;
}