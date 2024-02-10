

//// functions in javscript 



/// write a function which tkaes in array and age
//  this returns true if this array contains my age false otherwise


const arr = [23,34,54,34];
const age = 34;

function findage(arr, age) {

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] == age)
        {
            return true;
        }
        else{
            return false;
        }
    }
    
}

findage(arr,age);

const findtheage = function(arr,age)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] == age)
        {
            return true;
        }
        else{
            return false;
        }
    }

}

const ans =  findtheage(arr,age)

const findtheAge = (arr,age) => {
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] == age)
        {
            return true;
        }
        else{
            return false;
        }
    }
}

const ans2 = findtheAge(arr,age);

// i have made some changes 