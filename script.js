let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    let ans  = arr.filter((element, index) => {
        if(element.profession === "developer")
        {
            return arr[index];
        }
    })
    console.log(ans);
  }
  
  function addData() {
    //Write your code here, just console.log
    let newItem = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newItem);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.forEach((element, index) => {
        if(element.profession === "admin")
        {
            arr.splice(index, 1);
        }
    })
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 4, name: "messi", age: "36", profession: "football" },
        { id: 5, name: "virat", age: "34", profession: "cricketer" },
        { id: 6, name: "neeraj", age: "25", profession: "javelin" },
    ]
    arr = arr.concat(newArr);
    console.log(arr);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }