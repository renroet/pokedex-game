import React from "react";

function shuffle(arr) {
    let i = arr.length, j, temp;
    while(--i > 0){
      j = Math.floor(Math.random()*(i+1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr
  }


function totalExp(arr) {
    let res = arr.reduce((acc, cur) => 
        acc + cur.base_experience, 0
    )
    return res
}

export { shuffle, totalExp };