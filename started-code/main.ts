import { StringManipulationService } from "./main-service";
import { NumberManipulationService } from "./main-service";

class  StringManipulations implements StringManipulationService {
    print(word:String){
        console.log(word);
        return word.toUpperCase();
        return word.toLowerCase();
        let pos: number;
        
        var stringToConvert = window.prompt('Enter a number');
        var numberValue = Number(stringToConvert);
        return word.charAt(numberValue);

        let newWord=window.prompt('Enter another word to concatenate');
        return word.concat(newWord);
        return word.slice(1,-1);
        return word.length;
    }


    printWithSpace(word:String){
        for(var i=0;i<word.length;i++){
            console.log(word.charAt(i)+" ");
        }
    }

    findVowel(word:String){
        var count=0;
        const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        for(var i=0;i<word.length;i++){
            var letter=word.charAt(i);
            if(vowels.includes(letter)){
                count++;
            }
            return count;
        }
    }
}

class NumbersManipulations implements NumberManipulationService{
    findPrime(num: number){
        for (var i : 2; i <= num - 1; i++) 
                if (num % i == 0) { 
                    var flag : boolean; 
                    break; 
                } 
                  
            // Check and display output 
            if (flag == true) 
                console.log(num + " is prime"); 
            else
                console.log(num + " is not prime"); 
    }


    findMagic(num: number){
        while(num>0)    
        {    
        var m=num%10;    
        var sum=sum+m;    
        num=num/10;    
        }   
        if(num==1){
            console.log('MAGIC NUMBER');
        } 
    }
}