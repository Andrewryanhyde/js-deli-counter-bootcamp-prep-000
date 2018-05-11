let katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  let position = katzDeliLine.length
  return 'Welcome, ' + name + '. You are number ' + position + ' in line.'
}


function nowServing(katzDeliLine) {
  let i = 0 
  while (i < katzDeliLine.length) {
    i++
  }
  
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } 
  
  else {
    let first = katzDeliLine.shift()
    return "Currently serving " + first + "."
    
  }
  
}

function currentLine(katzDeliLine) {
  let line = []
  
  for (let i = 0; i < katzDeliLine.length; i++) {
    line.push(katzDeliLine[i+1])
  }
  
  
  
 
}