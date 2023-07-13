const list=[100,208,31,150,390,72];
var low=list[0];
var high=list[0];
for(let i=1;i<=list.length;i++)
    {
    if(low>list[i])
        low=list[i];
    if(high<list[i])
        high=list[i];
    }
console.log('high',high);
console.log('low',low);