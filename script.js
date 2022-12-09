// 1 задание

function printTime(hours='00', minutes='00', seconds='00')
{
    alert(convertToTime(convertToSeconds(+hours,+minutes,+seconds)));
}

printTime('12','12','60');


// 2 задание

function convertToSeconds(hours, minutes, seconds)
{
    return hours*3600+minutes*60+seconds;
}

alert(convertToSeconds(1,2,3));


// 3 задание

function convertToTime(seconds)
{
    let h=0,m=0;
    h+=parseInt(seconds/3600);
    seconds-=h*3600
    m+=parseInt(seconds/60);
    seconds-=m*60;
    return `${(h<10||h==0)?`0${h}`:h}:${(m<10||m==0)?`0${m}`:m}:${(seconds<10||seconds==0)?`0${seconds}`:seconds}`;
}

alert(convertToTime(3600));

// 4 задание

function dateDiff(h1,m1,s1,h2,m2,s2)
{
    return convertToTime(Math.abs(convertToSeconds(h1,m1,s1)-convertToSeconds(h2,m2,s2)));
}

alert(dateDiff(2,2,3,1,1,1));


