function distanceFromHqInBlocks(distance){
    if(distance > 42){
        return distance - 42;
    }
    else {
        return 42 - distance;
    }
}

function distanceFromHqInFeet(distanceFeet){
   return distanceFromHqInBlocks(distanceFeet) * 264;

}

function distanceTravelledInFeet(start, destination){
    if (destination>start){
        return (destination-start)*264
    }
    else{
        return (start-destination)*264
    }
}

function calculatesFarePrice(start,destination){
    let feet = distanceTravelledInFeet(start,destination)
    let newFeet =feet - 400;
        if(feet>2000 && feet <2500){
            return 25;
        }
        else if(feet>400 && feet <2000){
            return newFeet*0.02
        }
        else if(feet<400){
            return 0;
        }
        else{
            return "cannot travel that far";
        }
}
