export default interface Updater{
    update(): Promise<boolean>;
}