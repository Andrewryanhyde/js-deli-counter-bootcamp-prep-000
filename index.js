let katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  let position = katzDeliLine.length
  return 'Welcome, ' + name + '. You are number ' + position + ' in line.'
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift(0)
    
  } else {
    return "There is nobody waiting to be served!"
  }
}