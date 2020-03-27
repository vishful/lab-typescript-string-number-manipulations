export interface StringManipulationService {
    sayHello(word:string): void;
    sayHelloWithSpace(sentence:string) : void;
}

export interface NumberService {
    findPrime() : string;
    findMagic() : string;
    findVowel() : number;
}