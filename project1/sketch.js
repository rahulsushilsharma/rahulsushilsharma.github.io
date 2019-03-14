let arr = [];
function setup() {
  createCanvas(600,400);
  for(let i = 0; i<=width;i++)
    arr[i] = random(height);
}
function draw() {
  background(0);
  for(let i = 0;i <arr.length;i++){
    stroke(arr[i],159,arr[i]);
   line(i+3,height,i+3,height-arr[i]);
  }
   bubble_sort(0);
}

function bubble_sort(fin){
    let a,b;
  for(b = 0;b<arr.length;b++){
    if(arr[b]>arr[b+1])
    {
      swap(arr,b,b+1);
    }
  }fin++;
  if (fin>arr.length) {   
  noLoop();
  }
}

function swap(array,first,sec) {
  let temp = array[first];
  array[first] = array[sec];
  array[sec] = temp;
}
