// Code your solution in this file!
function distanceFromHqInBlocks(location,distanceInBlocks){
    return distanceInBlocks = Math.abs(location - 42);
}

function distanceFromHqInFeet(location,distanceInFeet){
    distanceFromHqInBlocks(location);
    return distanceInFeet = (Math.abs(location - 42)) * 264;
}

function distanceTravelledInFeet(start, destination,distanceTravelled){
    return distanceTravelled = Math.abs((start - destination) * 264);
}

function calculatesFarePrice(start, destination) {
    let fare;
    const distance = Math.abs((destination - start) * 264);
    if (distance < 400){
        return fare = 0;
    }else if(distance > 400 && distance < 2000){
        return fare = 0.02 * (distance-400);
    }else if(distance > 2000 && distance < 2500){
        return fare = 25;
    }else{
        return 'cannot travel that far';
    }
}