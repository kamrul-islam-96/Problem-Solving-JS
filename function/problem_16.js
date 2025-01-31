function getTimeOfDay (time) {
    if ( time >= 6 && time < 12) {
        console.log('Morning');
    }

    else if (time >= 12 && time < 18  ) {
        console.log('Afternoon');
    }

    else {
        console.log('Night');
    }
}

getTimeOfDay (6);
getTimeOfDay (11);
getTimeOfDay (12);
getTimeOfDay (17);
getTimeOfDay (18);
getTimeOfDay (5);
