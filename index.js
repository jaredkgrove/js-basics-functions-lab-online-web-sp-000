// Code your solution in this file!
function distanceTravelledInFeet(startBlock, endBlock){
    const feetTravelled = 264 * (Math.abs(startBlock - endBlock));
    return feetTravelled;
};

function distanceFromHqInBlocks(block){
    const blocksFromHq = Math.abs(42 - block);
    return blocksFromHq;
};

function distanceFromHqInFeet(block){
    const feetFromHq = 264 * distanceFromHqInBlocks(block);
    return feetFromHq;
};

function calculatesFarePrice(start, destination){
    const feetTravelled = distanceTravelledInFeet(start, destination);
    let fee;
    switch (true){
        case feetTravelled < 400:
            fee = 0;
            break;
        case feetTravelled <= 2000:
            fee = (feetTravelled - 400) * 0.02;
            break;
        case feetTravelled <= 2500:
            fee = 25;
            break;
        case feetTravelled > 2500:
            fee = 'cannot travel that far'
            break;
    }
    return fee;
};