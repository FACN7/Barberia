  const getRoundedTime = (time) => {
    const interval = 30;
    const startTime = 0;
    const endTime = 24;
    let acc = 0, i;
    let timesArray = []
    for (i = startTime; i < endTime; i++) {
      timesArray.push(("00" + i).slice(-2) + "00")
      acc = interval;
      while (acc % 60 != 0 && acc < 60) {
        timesArray.push(("00" + i).slice(-2) + ("00" + acc).slice(-2))
        acc += interval;
      }
    }
    let intervalsArray = [];
    for (let j = 0; j < timesArray.length - 1; j++) intervalsArray.push([timesArray[j], timesArray[j + 1]]);

    const roundedTime= intervalsArray.filter(item => {
      return parseInt(item[0]) <= parseInt(time) && parseInt(item[1]) > parseInt(time);
    })[0][1];
    return (roundedTime=="undefined")?"0000":roundedTime;
  };

  export {getRoundedTime};