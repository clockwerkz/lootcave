export const easyMode = () => {
    const arr = [];
    for (let i=0; i<10; i++) {
        arr.push(easyVariance());
    }
    return arr;
} 

export const mediumMode = () => {
    const arr = [];
    for (let i=0; i<20; i++) {
        arr.push(mediumVariance());
    }
    return arr;
} 


export const hardMode = () => {
    const arr = [];
    for (let i=0; i<40; i++) {
        arr.push(hardVariance());
    }
    return arr;
} 






const easyVariance = () => {
    let rnd = Math.floor(Math.random()*100);
    if (rnd <= 50) return 1;
    if (rnd <= 60) return 2;
    if (rnd <= 70) return 2 + Math.floor(Math.random()*3);
    if (rnd <= 80) return 4 + Math.floor(Math.random()*2);
    if (rnd <= 100) return  6 + Math.floor(Math.random()*4);
}

const mediumVariance = () => {
    let rnd = Math.floor(Math.random()*100);
    if (rnd <= 40) return 1;
    if (rnd <= 50) return 2 + Math.floor(Math.random()*2);
    if (rnd <= 60) return 4 + Math.floor(Math.random()*4);
    if (rnd <= 70) return 8 + Math.floor(Math.random()*4);
    if (rnd <= 80) return  12 + Math.floor(Math.random()*4);
    if (rnd <= 90) return  14 + Math.floor(Math.random()*5);
    if (rnd <= 100) return  19 + Math.floor(Math.random()*2);
}

const hardVariance = () => {
    let rnd = Math.floor(Math.random()*100);
    if (rnd <= 20) return 1;
    if (rnd <= 30) return 1 + Math.floor(Math.random()*6);
    if (rnd <= 40) return 7 + Math.floor(Math.random()*6);
    if (rnd <= 50) return 13 + Math.floor(Math.random()*10);
    if (rnd <= 60) return  22 + Math.floor(Math.random()*9);
    if (rnd <= 70) return  30 + Math.floor(Math.random()*7);
    if (rnd <= 80) return  36 + Math.floor(Math.random()*7);
    if (rnd <= 90) return  43 + Math.floor(Math.random()*6);
    if (rnd <= 100) return  49 + Math.floor(Math.random()*2);
}