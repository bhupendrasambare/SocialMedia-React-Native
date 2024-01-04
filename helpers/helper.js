export function getSubStringByLength(words,len){
    if(words.length>len){
        return words.substring(0,len)+"..";
    }else{
        return words;
    }
}