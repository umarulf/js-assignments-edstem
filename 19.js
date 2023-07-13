const str='This is a test statement.';
var count=0;
for(let i=0;i<str.length;i++)
    {
    if(str[i]==' ' || str[i]=='.')
        {
        count++;
        }
    }
console.log('No of words:',count); 