function add(a,b,callback)

{

	disp(a);

	disp(b);

}


function disp(no)

{
	if(no%2==0)

	{
		console.log("The Number is Even"+ no);

	}

	else

	{

		console.log("The Number is Odd"+ no);

	}

}


add(10,12);

var i = 0;
function f1()
{
    i++;
    console.log("Hello Dash!"+i);
    if(i>9)
    {
        clearInterval(timerID)
    }
}
var timerID = setInterval(f1,2000);