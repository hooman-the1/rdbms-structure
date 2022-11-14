export default interface Creator{
    create(): Promise<boolean>;
}