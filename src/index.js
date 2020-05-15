console.log("hello world!");

export const addition=(...x)=>{
    return x.reduce((a,b)=>a+b,0)
}

export const affect = (x,y)=>{
    return {x:x, y:y}
}

export function fooError(){
    throw new Error("Mon message")
}
