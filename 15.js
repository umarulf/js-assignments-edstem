var pin='585043';
var flag=0;
if(pin.length==6 && pin[0]=='5')//length=6 and starting number 5
    {
    for(let i=0;i<pin.length;i++)
        {
        if(pin[i]=='0')
            flag=1; // if any '0' found, set flag=1
        }
    if(flag==1)
        console.log("valid"); // if flag=1 valid otherwise invalid
    else{
        console.log('Invalid')
    }
    }

else
    console.log('Invalid'); //invalid if length notequal 6 or first element not 5