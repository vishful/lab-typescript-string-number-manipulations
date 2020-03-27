export interface StringManipulationService {
    print(word:string): void;
    printWithSpace(sentence:string) : void;
}

export interface NumberManipulationService {
    findPrime() : string;
    findMagic() : string;
    findVowel() : number;
}