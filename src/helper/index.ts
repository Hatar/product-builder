/**
 * 
 * @param {string} txt - the input txt to be sliced 
 * @param {number} [max=50] max - the maximum length before truncation 
 * @returns the sliced txt, with an ellipsis (...) appended if truncated
 */
export function textSlice(txt:string,max:number =30):string {
    if(txt.length >= max) return `${txt.slice(0,max)}...`
    else return txt
}